"use client";

import React, { FC } from "react";
import Button from "@/components/ui/Button";
import { BackpackIcon } from "@radix-ui/react-icons";
import { withEnsureClient } from "./HOCs/withEnsureClient";

interface NavbatActionsProps {}

const NavbatActions: FC<NavbatActionsProps> = ({}) => {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-lg bg-black px-4 py-2">
        <BackpackIcon color="white" className="h-4 w-4"></BackpackIcon>
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default withEnsureClient(NavbatActions);
