import { defineStore } from 'pinia';

import type { CartItem } from '../types/Cart';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    isOpen: false
  }),

  getters: {
    totalItems(state): number {
      return state.items.reduce((total: number, item: CartItem) => total + item.quantity, 0);
    },
    totalPrice(state): number {
      return state.items.reduce(
        (total: number, item: CartItem) => total + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    setOpenFlag(flag: boolean) {
      this.isOpen = flag
    },
    formatCurrency(value: string) {
      return `${parseFloat(value).toFixed(2).replace('.', ',')} PLN`
    },
    addToCart(product: CartItem) {
      const existingProduct = this.items.find((item: CartItem) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      const productIndex = this.items.findIndex((item: CartItem) => item.id === productId);
      if (productIndex !== -1) {
        this.items.splice(productIndex, 1);
      }
    }
  },
});
