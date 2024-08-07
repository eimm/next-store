import { Category } from "@/models";
import { categoriesUrl, getCategoryUrl } from "@/lib/paths";

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(categoriesUrl);

  return res.json();
};

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(getCategoryUrl(id));

  return res.json();
};
