import { RiErrorWarningLine } from 'react-icons/ri';
import Separator from './Separator';
import ReactModal from 'react-responsive-modal';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import cx from 'classnames';

interface IIcon {
  icon: IconType;
  classNames: string;
}

interface IProps {
  buttonBar: ReactNode;
  icon?: IIcon;
  isOpen: boolean;
  onClose?: () => void;
  text: ReactNode;
  withUndoneWarning?: boolean;
}

const Modal = ({
  buttonBar,
  icon,
  isOpen,
  onClose,
  text,
  withUndoneWarning,
}: IProps): JSX.Element => {
  const { icon: Icon, classNames: iconClassNames } = icon;

  const hasCloseAction = Boolean(onClose);

  return (
    <ReactModal
      open={isOpen}
      classNames={{
        modal: 'max-w-lg bg-base-50 p-7 rounded',
        closeButton: 'text-base-900 fill-current',
      }}
      onClose={onClose}
      center
      showCloseIcon={hasCloseAction}
      closeOnEsc={hasCloseAction}
      closeOnOverlayClick={hasCloseAction}
    >
      <div className="flex flex-col gap-3">
        <Icon size={45} className={cx('self-center', iconClassNames)} />
        <p>{text}</p>
      </div>
      {withUndoneWarning && (
        <p className="text-red-600">This action cannot be undone!</p>
      )}
      <Separator />
      <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:justify-end sm:gap-6">
        {buttonBar}
      </div>
    </ReactModal>
  );
};

Modal.defaultProps = {
  icon: {
    icon: RiErrorWarningLine,
    classNames: 'text-yellow-500',
  },
  withUndoneWarning: false,
};

export default Modal;
