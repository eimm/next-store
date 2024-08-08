import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { FC, Fragment } from "react";
import ButtonIcon from "./ButtonIcon";
import { Cross1Icon } from "@radix-ui/react-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Transition show={isOpen} appear as={Fragment}>
      <Dialog className="relative z-10" as="div" onClose={onClose}>
        <DialogBackdrop className="fixed inset-0 bg-slate-900 bg-opacity-30" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                <div className="relative flex w-full items-center overflow-hidden bg-slate-100 px-4 pb-8 pt-14 shadow-md sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <div className="absolute right-3 top-3">
                    <ButtonIcon
                      onClick={onClose}
                      icon={<Cross1Icon className="w-4 h-4" />}
                    />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
