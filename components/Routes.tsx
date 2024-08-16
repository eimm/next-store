"use client";
import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/models";

interface RoutesProps {
  data: Category[];
}

const Routes: FC<RoutesProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((r) => (
        <Link
          key={r.href}
          href={r.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            r.active ? "text-black" : "text-slate-800"
          )}
        >
          {r.label}
        </Link>
      ))}
    </nav>
  );
};

export default Routes;
