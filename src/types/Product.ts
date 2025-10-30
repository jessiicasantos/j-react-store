export interface BreadcrumbsType {
  id: number;
  category: string;
  name: string;
}

export interface ImagesType {
  id: number;
  src: string;
  alt: string;
}

export interface ColorsType {
  name: string;
  class: string;
  selectedClass: string;
  imageId: number;
}

export interface AccessoryType {
  name: string;
  inStock: boolean;
}

export interface ProductType {
  id: number;
  name?: string;
  price?: string | number;
  category?: string;
  hot?: boolean;
  breadcrumbs?: BreadcrumbsType[];
  images?: ImagesType[];
  colors?: ColorsType[];
  accessories?: AccessoryType[];
  description?: string;
  highlights?: string[];
  details?: string[];
  new?: boolean;
  like?: boolean;
  rating?: number[] | undefined;
  reviews?: number | undefined;
}

export interface ArrivalsSwiperProps {
    title?: string;
    products: ProductType[];
}

export interface SwiperProductType extends ProductType {
  src?: string;
  alt?: string;
  color?: string;
  accessory?: string;
  quantity?: number;
}