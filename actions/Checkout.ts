import { checkoutUrl } from "@/lib/paths";
import axios from "axios";

export const postCheckout = async (ids: string[]) => {
  try {
    const res = await axios.post(checkoutUrl, {
      productsId: ids,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
