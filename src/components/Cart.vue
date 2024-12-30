<template>
    <div class="cart">
        <div class="cart__block">
            <div class="cart__close" @click="closeOverlay">
                <img src="@/assets/images/cancel.png" alt="Logo" class="header__logo-image" />
            </div>
            <div class="cart__title">
                Twój koszyk
            </div>
            <template v-if="items.length">
                <CartTile v-for="product in items" :product="product" v-key="product.id" />
            </template>
            <div v-else class="cart__annotate">
                Twój koszyk jest pusty
            </div>
        </div>
        <div v-if="items.length" class="cart__block">
            <div class="cart__summary">
                <div class="cart__summary-label">
                    Łączna kwota
                </div>
                <div class="cart__sumary-price">
                    <div class="cart__sumary-price--value">
                        {{ cartStore.formatCurrency(totalPrice) }}
                    </div>
                    <div class="cart__sumary-price--vat">
                        + VAT 23%
                    </div>
                </div>
            </div>
            <div>
                <div class="cart__button">PRZEJDŹ DO KOSZYKA</div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import CartTile from '@/components/CartTile.vue';
import { useCartStore } from '@/store/cart';
const cartStore = useCartStore();
import { storeToRefs } from 'pinia'
const { items, totalPrice } = storeToRefs(cartStore);


const closeOverlay = () => {
    cartStore.setOpenFlag(false)
}
</script>

<style lang="sass" scoped>
.cart
  z-index: 101
  background: #FFFFFF
  width: 381px
  position: relative
  text-align: left

  &__block
    padding: 19px 28px

    &+.cart__block
      border-top: 1px solid #6E8484

  &__close
    cursor: pointer
    display: flex
    height: 41px
    width: 41px
    top: 0
    right: 0
    position: absolute
    background: #0A655E
    align-items: center
    justify-content: center
    transition: filter 0.3s ease

    :hover
      filter: brightness(80%)

  &__title
    color: #2E3838
    font-size: 18px
    font-weight: bold

  &__summary
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 23px

  &__summary-label
    font-size: 16px
    line-height: 19px
    color: #2E3838
    font-weight: bold

  &__sumary-price
    display: flex
    flex-direction: column
    align-items: center
    color: #2E3838

    &--value
      font-size: 22px
      line-height: 27px
      font-weight: 900

    &--vat
      font-size: 14px
      font-weight: 300

  &__button
    cursor: pointer
    color: #FFFFFF
    background-color: #D1B352
    height: 50px
    display: flex
    justify-content: center
    align-items: center
    transition: filter 0.3s ease
    margin-left: 7px

    &:hover
      filter: brightness(80%)

  &__annotate
    color: #2e3838
    margin: 20px 0
    padding: 10px 20px
    font-size: 14px
</style>
