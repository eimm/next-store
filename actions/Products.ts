import { Product } from "@/models";
import { getProductsUrl, ProductsQuery, getProductUrl } from "@/lib/paths";

export const getProducts = async (q: ProductsQuery): Promise<Product[]> => {
  const res = await fetch(getProductsUrl(q));

  return res.json();
};

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(getProductUrl(id));

  return res.json();
};
