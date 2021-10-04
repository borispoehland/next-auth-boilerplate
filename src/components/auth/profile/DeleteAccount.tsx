import Link from '../../ui-components/Link';
import { useEffect, useState } from 'react';
import Modal from '../../ui-components/Modal';
import Button from '../../ui-components/Button';
import axios from 'axios';
import { useRouter } from 'next/router';
import useToast from '../../../hooks/useToast';
import { AiFillWarning } from 'react-icons/ai';
import { StateSetter } from '../../../../@types/react';

interface IDeleteAccountState {
  isConfirmed: boolean;
  isPending: boolean;
  isSubmitting: boolean;
}

const defaultDeleteAccountState = {
  isConfirmed: false,
  isPending: false,
  isSubmitting: false,
};

const useDeleteAccountWhenConfirmed = (
  isConfirmed: boolean,
  setDeleteAccountState: StateSetter<IDeleteAccountState>
) => {
  const router = useRouter();
  const setToast = useToast();
  useEffect(() => {
    const deleteAccount = async () => {
      setDeleteAccountState((state) => ({ ...state, isSubmitting: true }));
      try {
        const res = await axios.post('/api/user/delete');
        await router.push({
          pathname: '/',
          query: { customMessage: res.data.message, customVariant: 'info' },
        });
      } catch (err) {
        setDeleteAccountState(defaultDeleteAccountState);
        setToast({ ...err.response.data });
      }
    };

    if (isConfirmed) {
      deleteAccount();
    }
  }, [isConfirmed, router, setDeleteAccountState, setToast]);
};

export const DELETE_ACCOUNT_ACTION = 'delete_account'; // https://url.com/profile?action=delete_account

const useSetPendingWhenQueryParam = (
  setDeleteAccountState: StateSetter<IDeleteAccountState>
) => {
  const { action } = useRouter().query;

  useEffect(() => {
    if (action === DELETE_ACCOUNT_ACTION)
      setDeleteAccountState((state) => ({ ...state, isPending: true }));
  }, [action, setDeleteAccountState]);
};

const DeleteAccount = (): JSX.Element => {
  const [{ isConfirmed, isPending, isSubmitting }, setDeleteAccountState] =
    useState<IDeleteAccountState>(defaultDeleteAccountState);

  useDeleteAccountWhenConfirmed(isConfirmed, setDeleteAccountState);

  useSetPendingWhenQueryParam(setDeleteAccountState);

  return (
    <div className="flex justify-end">
      <Link
        className="mt-2"
        action={() =>
          setDeleteAccountState((state) => ({ ...state, isPending: true }))
        }
      >
        Delete account
      </Link>
      {isPending && (
        <Modal
          text="Are you sure you want to permanently delete your account?"
          onClose={() => setDeleteAccountState(defaultDeleteAccountState)}
          buttonBar={
            <>
              <Button
                action={() => setDeleteAccountState(defaultDeleteAccountState)}
              >
                No, don&apos;t delete
              </Button>
              <Link
                action={() => {
                  setDeleteAccountState((state) => ({
                    ...state,
                    isConfirmed: true,
                  }));
                }}
                isLoading={isSubmitting}
              >
                Yes, delete account forever
              </Link>
            </>
          }
          isOpen={isPending}
          withUndoneWarning
          icon={{
            icon: AiFillWarning,
            classNames: 'text-red-500',
          }}
        />
      )}
    </div>
  );
};

export default DeleteAccount;
