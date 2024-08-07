import { Variant } from "@/models";
import { variantsUrl } from "@/lib/paths";

export const getVariants = async (): Promise<Variant[]> => {
  const res = await fetch(variantsUrl);

  return res.json();
};
