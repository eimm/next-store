import React, { FC } from 'react';

import { getBillboard } from '@/actions/Billboards';
import { getProducts } from '@/actions/Products';
import ParallaxBillboard from '@/components/ParallaxBillboard';
import Products from '@/components/Products';
import Container from '@/components/ui/Container';

export const revalidate = 60;

const HomePage: FC = async () => {
  const billboard = await getBillboard('073490d1-832b-4f28-90eb-82d6f422cb68');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <ParallaxBillboard data={billboard} />
          <Products title="Featured" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
