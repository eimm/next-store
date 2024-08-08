"use client";

import React, { FC } from "react";
import Button from "@/components/ui/Button";
import { BackpackIcon } from "@radix-ui/react-icons";
import { withEnsureClient } from "./HOCs/withEnsureClient";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

interface NavbatActionsProps {}

const NavbarActions: FC<NavbatActionsProps> = ({}) => {
  const cart = useCart();
  const router = useRouter();
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-lg bg-black px-4 py-2"
      >
        <BackpackIcon color="white" className="h-4 w-4"></BackpackIcon>
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default withEnsureClient(NavbarActions);
