import React, { FC } from "react";
import { EyeNoneIcon } from "@radix-ui/react-icons";

const Empty: FC<{ message?: string }> = ({
  message = "This list is empty.",
}) => {
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500">
      <EyeNoneIcon className="h-4 w-4" />
      {message}
    </div>
  );
};

export default Empty;
