<template>
  <div class="page-wrapper">
    <div v-if="isOpen" class="page-wrapper__overlay" @click.self="closeOverlay">
      <div class="container">
        <Cart />
      </div>
    </div>
    <slot />
  </div>

</template>

<script lang="ts" setup>
import { useCartStore } from '@/store/cart';
const cartStore = useCartStore();
import { storeToRefs } from 'pinia'
const { isOpen } = storeToRefs(cartStore);
import Cart from '@/components/Cart.vue';
const closeOverlay = () => {
  cartStore.setOpenFlag(false)
}
</script>

<style lang="sass" scoped>
.page-wrapper
  position: relative

  &__overlay
    position: absolute
    top: 0
    left: 0
    background-color: rgba(62, 62, 62, 0.6)
    width: 100%
    height: 100%
    z-index: 100

  .container
    position: relative
    display: flex
    justify-content: flex-end
</style>

