export interface swiperProductType {
    id: string;
    name: string;
    src: string;
    alt: string;
    category: string;
    price: string | number;
    color: string;
    accessory: string;
    reviews: number;
    new: boolean;
    like: boolean;
    rating: number[];
}

export interface Product {
    title?: string;
    swiperList: swiperProductType[];
}

export interface ArrivalsSwiperProps {
    products: swiperProductType[];
}