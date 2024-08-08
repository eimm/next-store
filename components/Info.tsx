import { Product } from "@/models";
import React, { FC } from "react";
import Money from "./ui/Money";
import Button from "./ui/Button";
import { BackpackIcon } from "@radix-ui/react-icons";

interface InfoProps {
  data: Product;
}

const Info: FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-light text-slate-900">{data?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-slate-800">
          <Money value={data?.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-slate-950">Colour:</h3>
          <div
            className="h-6 w-6 rounded-full border border-slate-700"
            style={{ backgroundColor: data?.colour?.value }}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-slate-950">Variant:</h3>
          <div className="text-slate-800">{data?.variant?.name} </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2 bg-slate-600">
          Add To Cart
          <BackpackIcon />
        </Button>
      </div>
    </div>
  );
};

export default Info;
