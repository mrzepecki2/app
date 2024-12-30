<template>
  <section class="magazine-search">
    <div class="container">
      <h2 class="magazine-search__title">Wyszukaj czasopismo</h2>

      <div v-if="isLoading" class="loading">
        Ładowanie produktów...
      </div>

      <div v-else-if="error" class="error">
        {{ error }}
      </div>
      <template v-else>
        <div class="magazine-search__products">
          <ProductCard v-for="product in products" :key="product.id" :product="product" :add-to-cart="addToCart" />
        </div>
        <Pagination />
      </template>

    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useProductsStore } from '@/store/products';
import { useCartStore } from '@/store/cart';
import { storeToRefs } from 'pinia';
import ProductCard from '@/components/ProductCard.vue';
import Pagination from '@/components/Pagination.vue';

const productsStore = useProductsStore();
const cartStore = useCartStore();
const { error, isLoading, products } = storeToRefs(productsStore);

onMounted(async () => {
  await productsStore.fetchProducts();
});
const addToCart = (product: any) => {
  cartStore.addToCart(product);
};
</script>

<style lang="scss" scoped>
.magazine-search {
  padding: 2rem;
  background-color: white;

  &__title {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left;
    color: #0A655E;
  }

  &__products {
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>