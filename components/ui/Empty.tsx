import { EyeNoneIcon } from "@radix-ui/react-icons";
import React, { FC } from "react";

const Empty: FC = () => {
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500">
      <EyeNoneIcon className="h-4 w-4" />
      This list is empty.
    </div>
  );
};

export default Empty;
