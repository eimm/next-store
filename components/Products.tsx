import React, { FC } from 'react';

import { cn } from '@/lib/utils';
import { Product } from '@/models';

import Empty from './ui/Empty';
import ProductCard from './ui/ProductCard';

interface ProductsProps {
  items: Product[];
  title: string;
  variant?: 'main' | 'aux';
}

const Products: FC<ProductsProps> = ({ items, title, variant = 'main' }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-6xl">{title}</h3>
      {!items.length ? (
        <Empty />
      ) : (
        <div
          className={cn(
            variant === 'aux' &&
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
            variant === 'main' && 'grid grid-cols-1 sm:grid-cols-2  gap-4',
          )}
        >
          {items.map((i) => (
            <ProductCard key={i.id} item={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
