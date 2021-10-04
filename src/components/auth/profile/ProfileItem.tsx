import { inputClassNames } from '../../../data/classNames';
import { State } from '../../../../@types/react';
import { TEditField } from '../../../../pages/profile';
import cx from 'classnames';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import useToast from '../../../hooks/useToast';
import Modal from '../../ui-components/Modal';
import Button from '../../ui-components/Button';
import Link from '../../ui-components/Link';

interface IProps {
  editFieldState: State<TEditField>;
  id: TEditField;
  isEditable: boolean;
  label: string;
  value: string;
}

interface IFieldState {
  newValue: string;
  isConfirmed: boolean;
  isSubmitting: boolean;
}

const defaultFieldState = {
  newValue: null,
  isConfirmed: false,
  isSubmitting: false,
};

const ProfileItem = ({
  editFieldState,
  id,
  isEditable,
  label,
  value,
}: IProps): JSX.Element => {
  const [editField, setEditField] = editFieldState;

  const setToast = useToast();

  const [{ newValue, isConfirmed, isSubmitting }, setFieldState] =
    useState<IFieldState>(defaultFieldState);

  const fieldValue = useRef<string>(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = e.target[id].value;
    if (fieldValue.current === newValue) {
      setToast({
        variant: 'error',
        message: `Please enter a new ${label.toLowerCase()}!`,
      });
      return;
    }
    setToast(null);
    setFieldState((state) => ({ ...state, newValue }));
  };

  useEffect(() => {
    const updateField = async () => {
      setFieldState((state) => ({ ...state, isSubmitting: true }));
      try {
        const res = await axios.post('/api/user/update', {
          field: id,
          label: label,
          newValue: newValue,
          oldValue: fieldValue.current,
        });
        fieldValue.current = newValue;
        setToast({ ...res.data });
      } catch (err) {
        setToast({ ...err.response.data });
      }
      setFieldState(defaultFieldState);
      setEditField(null);
    };

    if (isConfirmed) {
      updateField();
    }
  }, [id, isConfirmed, label, newValue, setEditField, setToast]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <label htmlFor="name">{label}:</label>
        <div className="flex items-center justify-between gap-4 h-12">
          {editField === id ? (
            <>
              <input
                type="text"
                id={id}
                autoFocus
                className={inputClassNames}
                defaultValue={fieldValue.current}
              />
              <Link type="submit">Save</Link>
              <Link
                action={(e) => {
                  e.preventDefault();
                  setEditField(null);
                  setToast(null);
                }}
              >
                Discard
              </Link>
            </>
          ) : (
            <>
              <p>{fieldValue.current}</p>
              {isEditable && (
                <Link
                  type="button"
                  className={cx({ invisible: editField !== null })}
                  action={(e) => {
                    e.preventDefault();
                    setToast(null);
                    setEditField(id);
                  }}
                >
                  Edit
                </Link>
              )}
            </>
          )}
        </div>
      </form>
      <Modal
        text={
          <>
            Are you sure you want to change your {label.toLowerCase()} from{' '}
            <b>{fieldValue.current}</b> to <b>{newValue}</b>?
          </>
        }
        buttonBar={
          <>
            <Link
              action={() => {
                setFieldState(defaultFieldState);
                setEditField(null);
              }}
            >
              No, cancel
            </Link>
            <Button
              action={() =>
                setFieldState((state) => ({ ...state, isConfirmed: true }))
              }
              isLoading={isSubmitting}
            >
              Yes, change {label.toLowerCase()}
            </Button>
          </>
        }
        isOpen={Boolean(newValue)}
        onClose={() => setFieldState(defaultFieldState)}
      />
    </>
  );
};

ProfileItem.defaultProps = {
  isEditable: true,
};

export default ProfileItem;
