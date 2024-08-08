import queryString from "query-string";

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const getPathUrl = (path: string) => `${baseUrl}/${path}`;
const getUrlWithID = (path: string) => (id: string) => `${path}/${id}`;
export const categoriesUrl = getPathUrl("categories");
export const billboardsUrl = getPathUrl("billboards");
export const productsUrl = getPathUrl("products");
export const variantsUrl = getPathUrl("variants");
export const coloursUrl = getPathUrl("colours");
export const checkoutUrl = getPathUrl("checkout");

export const getBillboardUrl = getUrlWithID(billboardsUrl);
export const getCategoryUrl = getUrlWithID(categoriesUrl);
export const getProductUrl = getUrlWithID(productsUrl);

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
