import { getCategory } from "@/actions/Categories";
import { getColours } from "@/actions/Colours";
import { getProducts } from "@/actions/Products";
import { getVariants } from "@/actions/Variants";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import React, { FC } from "react";
import Filter from "./Filter";
import Empty from "@/components/ui/Empty";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilters from "./MobileFilters";

export const revalidate = 60;

interface pageProps {
  params: { categoryId: string };
  searchParams: {
    colourId: string;
    variantId: string;
  };
}

const CategoryPage: FC<pageProps> = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colourId: searchParams.colourId,
    variantId: searchParams.variantId,
    isFeatured: true,
  });
  const variants = await getVariants();
  const colours = await getColours();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category?.billboard} />
      </Container>
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileFilters variants={variants} colours={colours} />
          <div className="hidden lg:block">
            <Filter valueKey="variantId" name="Variants" data={variants} />
            <Filter valueKey="colourId" name="Colour" data={colours} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {!products.length && <Empty />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((p) => (
                <ProductCard key={p.id} item={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
