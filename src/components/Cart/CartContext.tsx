import { createContext, ReactNode, useContext, useReducer, useState } from "react";

interface CartItem {
    id: string;
    name: string;
    color: string;
    price: string;
    quantity: string;
    src: string;
    alt: string;
};

interface CartState {
    items: CartItem[];
}

type Action = 
    | { type: "ADD_TO_CART"; payload: CartItem }
    | { type: "REMOVE_FROM_CART"; payload: string }
    | { type: "CLEAR_CART" };

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: Action): any {
    switch(action.type) {
        case "ADD_TO_CART":
            return { items: [...state.items, action.payload] };
        case "REMOVE_FROM_CART":
            return { items: state.items.filter(item => item.id !== action.payload) };
        case "CLEAR_CART":
            return { items: [] };
        default:
            return state;
    }
}

type CartContextType = {
  cart: CartState;
  dispatch: React.Dispatch<Action>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartContext = createContext<CartContextType>({
  cart: initialState,
  dispatch: () => null,
  isOpen: false,
  setIsOpen: () => null
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <CartContext.Provider value={{ cart, dispatch, isOpen, setIsOpen }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);