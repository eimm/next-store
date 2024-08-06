export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  variant: Variant;
  colour: Colour;
  images: Image[];
}

export interface Variant {
  id: string;
  name: string;
  value: string;
}

export interface Colour {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}
