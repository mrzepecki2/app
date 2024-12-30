import { defineStore } from 'pinia';

export const useProductsStore = defineStore('productsStore', {
  state: () => ({
    products: [] as Array<any>,
    isLoading: false,
    error: null as String | null
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true
      setTimeout(() => {
        try {
          this.products = [
            {
              id: 1,
              name: 'Czasopismo 1',
              price: 39.99,
              imageUrl: '/images/product1.png',
              vat: 23
            },
            {
              id: 2,
              name: 'Czasopismo 2',
              price: 49.99,
              imageUrl: '/images/product2.png',
              vat: 23
            },
            {
              id: 3,
              name: 'Czasopismo 3',
              price: 59.99,
              imageUrl: '/images/product3.png',
              vat: 23
            },
            {
              id: 4,
              name: 'Czasopismo 4',
              price: 29.99,
              imageUrl: '/images/product3.png',
              vat: 23
            },
            {
              id: 5,
              name: 'Czasopismo 1',
              price: 319.99,
              imageUrl: '/images/product1.png',
              vat: 23
            },
            {
              id: 6,
              name: 'Czasopismo 2 jakaś dłuższa nazwa',
              price: 449.99,
              imageUrl: '/images/product2.png',
              vat: 23
            },
            {
              id: 7,
              name: 'Czasopismo 3',
              price: 22.99,
              imageUrl: '/images/product2.png',
              vat: 23
            },
            {
              id: 8,
              name: 'Czasopismo 4',
              price: 129.99,
              imageUrl: '/images/product3.png',
              vat: 23
            }
          ];
        } catch (error) {
          this.error = 'error'
          console.error(error)
        } finally {
          this.isLoading = false;
        }
      }, 2000);
    }
  }
});
