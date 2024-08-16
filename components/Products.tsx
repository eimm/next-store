import React, { FC } from "react";

import { Product } from "@/models";

import Empty from "./ui/Empty";
import ProductCard from "./ui/ProductCard";

interface ProductsProps {
  items: Product[];
  title: string;
}

const Products: FC<ProductsProps> = ({ items, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-6xl">{title}</h3>
      {!items.length ? (
        <Empty />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((i) => (
            <ProductCard key={i.id} item={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
