import { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonType = 'button' | 'reset' | 'submit';
type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type: ButtonType;
};

export function Button({ children, disabled, onClick, type }: ButtonProps) {
  return (
    <button
      className={classNames(
        'h-10 w-[10%] flex justify-between items-center mx-2 text-white bg-grey border-violet hover:bg-violet p-2 rounded-lg cursor-pointer border transition duration-300 ease-out',
        {
          'bg-light-grey cursor-default border-light-grey hover:bg-light-grey': disabled === true,
        },
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
