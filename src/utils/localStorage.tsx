import { CartProduct } from 'src/redux/cart/cart.duck';

export const getLocalStorageList = (): CartProduct[] => JSON.parse(localStorage.getItem('cartItems')!) || [];

export const updateList = (data: CartProduct[]) => localStorage.setItem('cartItems', JSON.stringify(data));
