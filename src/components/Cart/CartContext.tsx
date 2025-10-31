import { createContext, ReactNode, useContext, useReducer, useState } from "react";
import { CartAction, CartContextType, CartItem, CartState } from "../../types/Cart";

export const initialState: CartState = {
    items: [],
    total: 0
};

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch(action.type) {
        case 'ADD_ITEM': 
            const newItem: CartItem = {
                id: action.payload.id,
                src: action.payload.src,
                alt: action.payload.alt,
                color: action.payload.color,
                accessory: action.payload.accessory,
                name: action.payload.name,
                price: action.payload.price,
                quantity: typeof action.payload.quantity === "number" ? action.payload.quantity : 1
            };
            const existingItem = state.items.find(item => 
                item.id === action.payload.id &&
                item.color === action.payload.color &&
                item.accessory === action.payload.accessory
            );

            if(existingItem) {
                return {
                    ...state,
                    items: state.items.map(item => 
                        item.id === action.payload.id &&
                        item.color === action.payload.color &&
                        item.accessory === action.payload.accessory
                        ? { ...item, quantity: item.quantity + action.payload.quantity } 
                        : item
                    ),
                    total: state.total + (action.payload.price * action.payload.quantity)
                }
            }

            return {
                ...state,
                items: [...state.items, newItem],
                total: state.total + (Number(newItem.price) * newItem.quantity)
            };
        case 'REMOVE_ITEM':
            const filteredItems = state.items.filter(item => 
                !(item.id === action.payload.id &&
                    item.color === action.payload.color &&
                    item.accessory === action.payload.accessory 
                )
            );
            const updatedTotal = filteredItems.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)

            return { items: filteredItems, total: updatedTotal };
        case 'INCREMENT_QUANTITY': {
            const updatedItems = state.items.map(item => 
                item.id === action.payload.id &&
                item.color === action.payload.color &&
                item.accessory === action.payload.accessory
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            const updatedTotal = updatedItems.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

            return { items: updatedItems, total: updatedTotal };
        }
        case 'DECREMENT_QUANTITY': {
            const updatedItems = state.items.map(item => { 
                if(item.id === action.payload.id &&
                    item.color === action.payload.color &&
                    item.accessory === action.payload.accessory) {
                    const newQty = item.quantity - 1;
                    return newQty > 0 ? { ...item, quantity: newQty } : null;
                }
                return item;
            }).filter(item => item !== null) as CartItem[];

            const updatedTotal = updatedItems.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

            return { items: updatedItems, total: updatedTotal };
        }
        default:
            return state;
    }
}

const CartContext = createContext<CartContextType>({ 
    state: initialState, 
    dispatch: () => null,
    isOpen: false,
    setIsOpen: () => null
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [ state, dispatch ] = useReducer(cartReducer, initialState);
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <CartContext.Provider value={{ state, dispatch, isOpen, setIsOpen }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);