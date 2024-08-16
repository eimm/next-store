"use client";

import React, { FC, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Cross1Icon, PlusIcon } from "@radix-ui/react-icons";

import Button from "@/components/ui/Button";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { Colour, Variant } from "@/models";

import Filter from "./Filter";

interface MobileFiltersProps {
  variants: Variant[];
  colours: Colour[];
}

const MobileFilters: FC<MobileFiltersProps> = ({ variants, colours }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex items-center bg-slate-600 gap-x-2 lg:hidden"
      >
        Filters
        <PlusIcon className="h-4 w-4" />
        <Dialog
          open={isOpen}
          onClose={handleClose}
          as="div"
          className="relative z-10 lg:hidden"
        >
          <DialogBackdrop className="fixed inset-0 bg-slate-900 bg-opacity-30" />
          <div className="fixed inset-0 z-10 flex">
            <DialogPanel className="relative ml-auto flex flex-col h-full w-full max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-end px-4">
                <ButtonIcon
                  onClick={handleClose}
                  icon={<Cross1Icon className="w-4 h-4" />}
                />
              </div>
              <div className="p-4">
                <Filter valueKey="variantId" name="Variants" data={variants} />
                <Filter valueKey="colourId" name="Colour" data={colours} />
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Button>
    </>
  );
};

export default MobileFilters;
