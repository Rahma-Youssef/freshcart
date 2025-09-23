import { ProductCart } from "./cart.type";

export interface CartContextType {
  isloading: boolean;
  numOfCartItems: number;
  totalCartPrice: number;
  products: ProductCart[];
  removeCartItem: (productId: string) => Promise<void> | void;
  updateCart: (productId: string, count: number) => Promise<void> | void;
  clearCart: () => Promise<void> | void;
}