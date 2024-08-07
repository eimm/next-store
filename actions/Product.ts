import { Product } from "@/models";
import { getProductUrl } from "@/lib/paths";

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(getProductUrl(id));

  return res.json();
};
