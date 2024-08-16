"use client";

import React, { FC } from "react";

import { withEnsureClient } from "@/components/HOCs/withEnsureClient";
import Empty from "@/components/ui/Empty";
import useCart from "@/hooks/useCart";

import CartItem from "./CartItem";
import Summary from "./Summary";

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
  const cart = useCart();

  return (
    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-2">
      <div className="lg:col-span-7">
        {!cart.items.length && <Empty message="Cart is empty" />}
        <ul>
          {cart.items.map((i) => (
            <CartItem key={i.id} item={i} />
          ))}
        </ul>
      </div>
      <Summary />
    </div>
  );
};

export default withEnsureClient(Cart);
