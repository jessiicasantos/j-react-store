export interface CartItem {
    id?: string | number;
    src: string;
    alt: string;
    color: string;
    accessory: string;
    name: string;
    price?: string | number;
    quantity: number;
    className?: string;
    product?: {[key: string]: any};
}

export interface BtnCartProps {
    className?: string;
    product: CartItem;
}

export interface CartContextType {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CartState {
    items: CartItem[];
    total?: number | any;
}

export interface CartAction {
    type: string;
    payload?: any;
}