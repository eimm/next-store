import { url } from "inspector";
import queryString from "query-string";

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const categoriesUrl = `${baseUrl}/categories`;
export const billboardsUrl = `${baseUrl}/billboards`;
export const productsUrl = `${baseUrl}/products`;

export const getBillboardUrl = (id: string) => `${billboardsUrl}/${id}`;

export interface ProductsQuery {
  categoryId?: string;
  colourId?: string;
  variantId?: string;
  isFeatured?: boolean;
}
export const getProductsUrl = (q: ProductsQuery) =>
  queryString.stringifyUrl({
    url: productsUrl,
    query: {
      categoryId: q.categoryId,
      colourId: q.colourId,
      variantId: q.variantId,
      isFeatured: q.isFeatured,
    },
  });

export const getProductUrl = (id: string) => `${productsUrl}/${id}`;
