import { Billboard } from "@/models";
import { billboardsUrl, getBillboardUrl } from "@/lib/paths";

export const getBillboards = async (): Promise<Billboard[]> => {
  const res = await fetch(billboardsUrl);

  return res.json();
};

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(getBillboardUrl(id));

  return res.json();
};
