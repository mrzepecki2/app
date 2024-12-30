<template>
  <div class="product-card" @click="addToCart(product)">
    <img :src="product.imageUrl" :alt="product.name" class="product-card__image" />
    <div class="product-card__info">
      <h3 class="product-card__name">{{ product.name }}</h3>
      <div class="product-card__price">{{ product.price }} zł</div>
      <div class="product-card__vat">+ VAT 23%</div>
      <div class="product-card__details-button" @click="viewDetails">SZCZEGÓŁY</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
  product: {
    type: Object as () => {
      id: number;
      name: string;
      price: string;
      imageUrl: string
    },
    required: true
  },
  addToCart: {
    type: Function,
    required: true
  }
});

const viewDetails = () => {
  console.log(`${props.product.id}`);
};

</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  flex-direction: column;
  margin: 1rem;
  color: #0A655E;
  font-size: 14px;
  cursor: pointer;

  &:before {
    content: "";
    box-sizing: border-box;
    background-color: inherit;
    display: block;
    position: absolute;
    opacity: 0;
    height: 70%;
    width: 100%;
    bottom: 0;
    border: 1px solid #D1B352;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) all;
    box-shadow: 20px 20px 40px #2E383826;
  }

  &:hover {
    color: #D1B352;

    &::before {
      opacity: 1;

    }
  }

  &__image {
    width: auto;
    height: 190px;
    z-index: 2;
    position: relative;
  }

  &__info {
    padding: 0.5rem 0;
    text-align: center;
    z-index: 2;
    position: relative;
  }

  &__name {
    height: 50px;
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }

  &__price {
    font-weight: bold;
    font-size: 1.75rem;
    padding-bottom: 13px;
  }

  &__vat {
    font-size: 0.875rem;
    padding-bottom: 10px;
  }

  &__details-button {
    font-size: 0.875rem;
  }
}
</style>