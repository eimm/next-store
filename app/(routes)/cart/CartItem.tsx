"use client";
import { Product } from "@/models";
import React, { FC } from "react";
import Image from "next/image";
import Money from "@/components/ui/Money";
import useCart from "@/hooks/useCart";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { Cross1Icon } from "@radix-ui/react-icons";

interface CartItemProps {
  item: Product;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const cart = useCart();
  const handleRemove = () => {
    cart.remove(item);
  };
  return (
    <li className="flex bg-white rounded-lg p-6 border-b shadow-lg">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={item.images[0].url}
          alt={`${item.name} image`}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <ButtonIcon
            onClick={handleRemove}
            icon={<Cross1Icon className="w-4 h-4" />}
          />
        </div>
        <div className="relative mt-1 mr-24 justify-between items-center pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold text-slate-900">{item.name}</p>
          </div>
          <div className="flex text-lg ">
            <p className="text-slate-900">{item.variant.name}</p>
            <div
              className="ml-4 rounded-md px-4"
              style={{
                backgroundColor: item.colour.value,
              }}
            >
              <p className="font-extrabold text-white mix-blend-difference px-4">
                {item.colour.name}
              </p>
            </div>
          </div>
          <Money value={item.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
