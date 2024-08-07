import { Colour } from "@/models";
import { coloursUrl } from "@/lib/paths";

export const getColours = async (): Promise<Colour[]> => {
  const res = await fetch(coloursUrl);

  return res.json();
};
