<template>
  <header class="header">
    <div class="container flex">
      <div class="header__logo">
        <img src="@/assets/logo.svg" alt="Logo" class="header__logo-image" />
      </div>
      <nav class="header__nav">
        <nav>
          <ul class="header__menu">
            <li v-for="item in menuItems" :key="item.name" class="header__menu-item">
              <a :href="item.link" class="header__menu-link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>

        <div class="header__actions">
          <button class="header__button header__button-search" @click="searchClick">
            <img src="../assets/icons/magnifying-glass.svg" alt="Search" />
          </button>
          <button class="header__button" @click="userClick">
            <img src="../assets/icons/user.svg" alt="User" />
          </button>
          <button class="header__button" @click="toggleCart">
            <img src="../assets/icons/cart.svg" alt="Cart" />

            <span v-if="totalItems > 0" class="header__cart-indicator">{{ totalItems }}</span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>

import { useCartStore } from '@/store/cart';
import { menuItems } from '@/constants/menuItems';

import { storeToRefs } from 'pinia'
const cartStore = useCartStore();
const { isOpen, totalItems } = storeToRefs(cartStore);

const toggleCart = () => {
  cartStore.setOpenFlag(!isOpen.value)
};

const searchClick = () => {
  console.log('Search clicked');
};

const userClick = () => {
  console.log('User clicked');
};

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
  border: 1px solid #F1F5F5;

  &__logo {
    &-image {
      height: 43px;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
  }

  &__menu {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    margin: 0 30px;
  }

  &__menu-item {
    position: relative;
  }

  &__menu-link {
    font-size: 14px;
    text-decoration: none;
    color: #2e3838;
    line-height: 24px;

    &:hover {
      color: #0a655e;
    }
  }

  &__actions {
    display: flex;
    gap: 10px;
  }

  &__button {
    position: relative;
    background: transparent;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &-search {
      background-color: #0A655E;
    }

    img {
      width: 18px;
      height: 18px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &__cart {
    position: relative;
  }

  &__cart-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: #0056b3;
    }
  }

  &__cart-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 5px;
    width: 200px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    &__button {
      margin-top: 1rem;
      display: block;
      width: 100%;
      background-color: #28a745;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      text-align: center;

      &:hover {
        background-color: #218838;
      }
    }
  }

  &__cart-indicator {
    position: absolute;
    top: 0;
    right: 0;
    background: transparent radial-gradient(closest-side at 50% 50%, #0A655E 0%, #025C55 100%) 0% 0% no-repeat padding-box;
    color: white;
    font-size: 10px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
