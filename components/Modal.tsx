'use client';
import { ReactNode, useCallback } from 'react';
import { BsX } from 'react-icons/bs';
import { Button } from './Button';

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactNode;
  footer?: ReactNode;
  actionLabel?: string;
  disabled?: boolean;
}

export const Modal = ({ isOpen, onClose, onSubmit, title, body, actionLabel, footer, disabled }: Props) => {

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Close the modal if the background is clicked, but not the modal content
    if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
      handleClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        onClick={handleBackgroundClick}
        className="
          modal-overlay
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-900/80
          bg-opacity-70
          px-4
        "
      >
        <div
          className="
            relative 
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto 
            lg:h-auto
            md:h-auto
          "
        >
          {/*content*/}
          <div
            className={`
              translate
              duration-300
              h-full
              ${isOpen ? 'translate-y-0' : 'translate-y-full'}
              ${isOpen ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div
              className="
                translate
                h-full
                lg:h-auto
                md:h-auto
                border-0 
                rounded-lg 
                shadow-lg 
                relative 
                flex 
                flex-col 
                w-full 
                bg-white 
                outline-none 
                focus:outline-none
              "
            >
              {/*header*/}
              <div
                className="
                  flex 
                  items-center 
                  p-4 
                  rounded-t
                  justify-center
                  relative
                  border-b-[1px]
                  "
              >
                <button
                  onClick={handleClose}
                  className="
                    p-1
                    border-0
                    hover:opacity-70
                    transition
                    absolute
                    right-3 md:right-5
                  "
                >
                  <BsX size={20} />
                </button>
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                {body}
              </div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                    secondary
                    fullWidth
                    large
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};