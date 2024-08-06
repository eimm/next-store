import { Category } from "@/models";
import { categoriesUrl } from "@/lib/paths";

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(categoriesUrl);

  return res.json();
};
