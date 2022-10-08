import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type CartItem = {
  id: string;
  name: string;
  image: string;
  amount: number;
  price: number;
};

type CartContextData = {
  cart: CartItem[];
  onAddItemToCart: (item: CartItem) => void;
  onIncrementCartItemAmount: (itemId: string) => void;
  onDecrementCartItemAmount: (itemId: string) => void;
  onRemoveItemFromCart: (itemId: string) => void;
  onResetCart: () => void;
};

const LOCAL_STORAGE_CART_KEY = "@coffee-delivery:cart";

export const CartContext = createContext({} as CartContextData);

type CartContextProviderProps = PropsWithChildren<unknown>;

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const localStorageCart = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const onAddItemToCart = (item: CartItem) => {
    const itemAlreadyExistsOnCart = cart.some(
      (cartItem) => cartItem.id === item.id,
    );

    setCart((state) => {
      if (itemAlreadyExistsOnCart) {
        const cartWithUpdatedAmount = state.map((cartItem) => {
          return cartItem.id === item.id
            ? {
                ...cartItem,
                amount: cartItem.amount + item.amount,
              }
            : cartItem;
        });

        return cartWithUpdatedAmount;
      }

      return [item, ...state];
    });
  };

  const onIncrementCartItemAmount = (itemId: string) => {
    const cartWithUpdateAmount = cart.map((cartItem) => {
      return cartItem.id === itemId
        ? {
            ...cartItem,
            amount: cartItem.amount + 1,
          }
        : cartItem;
    });

    setCart(cartWithUpdateAmount);
  };

  const onDecrementCartItemAmount = (itemId: string) => {
    const cartWithUpdateAmount = cart.map((cartItem) => {
      if (cartItem.id === itemId) {
        const shouldRemoveItem = cartItem.amount - 1 === 0;

        return shouldRemoveItem
          ? undefined
          : { ...cartItem, amount: cartItem.amount - 1 };
      }

      return cartItem;
    });

    setCart(cartWithUpdateAmount.filter((item) => !!item) as CartItem[]);
  };

  const onRemoveItemFromCart = (itemId: string) => {
    setCart((state) => state.filter((item) => item.id !== itemId));
  };

  const onResetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        onAddItemToCart,
        onIncrementCartItemAmount,
        onDecrementCartItemAmount,
        onRemoveItemFromCart,
        onResetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
