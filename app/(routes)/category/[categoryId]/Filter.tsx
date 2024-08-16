"use client";

import React, { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Colour, Variant } from "@/models";

interface FilterProps {
  data: (Variant | Colour)[];
  name: string;
  valueKey: "colourId" | "variantId";
}

const Filter: FC<FilterProps> = ({ valueKey, name, data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const selected = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const cur = queryString.parse(searchParams.toString());

    const q = {
      ...cur,
      [valueKey]: id,
    };
    if (cur[valueKey] === id) {
      q[valueKey] = null;
    }

    const query = queryString.stringify(q, { skipNull: true });
    router.push(`${pathName}?${query}`);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />{" "}
      <div className="flex flex-wrap gap-2 ">
        {data.map((f) => (
          <div key={f.id} className="flex items-center">
            <Button
              onClick={() => handleClick(f.id)}
              style={{
                backgroundColor:
                  selected === f.id && valueKey === "colourId" ? f.value : "",
              }}
              className={cn(
                "rounded-md text- font-extrabold text-slate-700 bg-white border border-slate-300",
                selected === f.id && "bg-black text-white"
              )}
            >
              <p
                className={cn(
                  selected === f.id && valueKey && "mix-blend-difference"
                )}
              >
                {f.name}
              </p>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
