import React, { FC } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface MoneyProps {
  value?: string | number;
}

const Money: FC<MoneyProps> = ({ value }) => {
  return (
    <div className="text-slate-800 text-md">
      {formatter.format(Number(value))}
    </div>
  );
};

export default Money;
