import React, { FC } from "react";

import { getBillboard } from "@/actions/Billboards";
import { getProducts } from "@/actions/Products";
import Billboard from "@/components/Billboard";
import Products from "@/components/Products";
import Container from "@/components/ui/Container";

export const revalidate = 60;

const HomePage: FC = async () => {
  const billboard = await getBillboard("073490d1-832b-4f28-90eb-82d6f422cb68");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <Products title="Featured" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
