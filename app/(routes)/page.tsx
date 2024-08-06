import React, { FC } from "react";
import Container from "@/components/ui/Container";
import Billboard from "@/components/Billboard";
import { getBillboard } from "@/actions/Billboards";
import { getProducts } from "@/actions/Products";
import Products from "@/components/Products";

const HomePage: FC = async () => {
  const billboard = await getBillboard("de973623-c232-4c60-9045-4afae41810ec");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <Products title="Featured" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
