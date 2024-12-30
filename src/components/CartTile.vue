<template>
    <div class="cart-tile">
        <div class="cart__section">
            <div class="cart-tile__icon">
                <img src="@/assets/icons/book.svg" alt="remove button">
            </div>
            <div class="cart-tile__name"> {{ product.name }} </div>
            <div class="cart-tile__delete">
                <img src="@/assets/icons/rubbish-bin.svg" alt="remove button"
                    @click="cartStore.removeFromCart(product.id)">
            </div>
        </div>
        <div class="cart__section">
            <div class="cart-tile__label">Cena</div>
            <div class="cart-tile__price">{{ cartStore.formatCurrency(product.price * product.quantity) }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useCartStore } from '@/store/cart';
const cartStore = useCartStore();
const props = defineProps({
    product: {
        type: Object as () => {
            id: number;
            name: string;
            price: number;
            imageUrl: string;
            quantity: number;
            vat: number
        },
        required: true
    },
    addToCart: {
        type: Function,
        required: true
    }
});
</script>

<style lang="sass" scoped>
.cart
  &__section
    padding: 9px 11px 20px
    display: flex

    &+.cart__section
      border-top: 1px solid #F1F5F5

  &-tile
    background-color: rgba(241, 245, 245, 0.4)
    margin: 10px 0

    &__icon
      height: 52px
      width: 52px
      background-color: #F1F5F5
      border-radius: 50%
      display: flex
      align-items: center
      justify-content: center

    &__name
      color: #0A655E
      display: flex
      flex-grow: 1
      font-size: 16px
      line-height: 24px
      font-weight: bold
      padding: 0 13px

    &__delete
      width: 30px
      display: flex
      align-items: center

      img
        padding: 5px
        cursor: pointer

    &__label
      color: #2E3838
      padding: 0 8px
      font-size: 14px
      line-height: 22px

    &__price
      font-size: 18px
      line-height: 22px
      font-weight: bold
      color: #2E3838
      display: flex
      align-items: center
      flex-grow: 1
      justify-content: flex-end
</style>
