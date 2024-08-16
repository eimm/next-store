"use client";

import React, { FC, useEffect } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

import { postCheckout } from "@/actions/Checkout";
import Button from "@/components/ui/Button";
import Money from "@/components/ui/Money";
import useCart from "@/hooks/useCart";

interface SummaryProps {}

const Summary: FC<SummaryProps> = ({}) => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const empty = useCart((state) => state.empty);
  const isDisabled = !items.length;

  const total = items.reduce((acc, i) => acc + Number(i.price), 0);
  const handleCheckout = async () => {
    const response = await postCheckout(items.map((i) => i.id));

    window.location = response?.data?.url;
  };
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Happy Payment time!");
      empty();
    }

    if (searchParams.get("canceled")) {
      toast.success("Sad Payment time!");
    }
  }, [searchParams, empty]);
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 shadow-lg">
      <h2 className="text-lg font-medium text-slate-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-slate-900">Full price</div>
          <Money value={total} />
        </div>
      </div>
      <Button
        disabled={isDisabled}
        onClick={handleCheckout}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
