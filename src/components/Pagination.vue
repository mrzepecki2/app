<template>
    <div class="pagination">
        <div class="pagination__btn pagination__btn--prev" :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.004" height="9.355" viewBox="0 0 5.004 9.355">
                <g transform="translate(5.004) rotate(90)">
                    <path fill="currentColor"
                        d="M9.259.1a.331.331,0,0,0-.467,0L4.682,4.215.564.1A.33.33,0,0,0,.1.564L4.44,4.908a.323.323,0,0,0,.234.1.336.336,0,0,0,.234-.1L9.251.564A.324.324,0,0,0,9.259.1Z" />
                </g>
            </svg>

        </div>

        <div v-for="page in totalPages" :key="page" class="pagination__btn"
            :class="{ 'pagination__btn--active': currentPage === page }" @click="goToPage(page)">
            {{ page }}
        </div>

        <div class="pagination__btn pagination__btn--next" @click="goToPage(currentPage + 1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.004" height="9.355" viewBox="0 0 5.004 9.355">
                <g transform="translate(0 9.355) rotate(-90)">
                    <path fill="currentColor"
                        d="M9.259.1a.331.331,0,0,0-.467,0L4.682,4.215.564.1A.33.33,0,0,0,.1.564L4.44,4.908a.323.323,0,0,0,.234.1.336.336,0,0,0,.234-.1L9.251.564A.324.324,0,0,0,9.259.1Z" />
                </g>
            </svg>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const totalItems = ref(100);
const itemsPerPage = ref(10);
const currentPage = ref(3);

const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));

function goToPage(page: number) {
    if (page >= 1 && page <= totalPages.value)
        currentPage.value = page;

}
</script>

<style lang="sass" scoped>
.pagination
  display: flex
  justify-content: center
  gap: 2px

  &__btn
    display: flex
    align-items: center
    justify-content: center
    height: 33px
    width: 33px
    color: #6E8484
    border: none
    cursor: pointer
    transition-property: color, background-color
    transition-duration: 0.2s
    transition-timing-function: ease-out

    &:hover,
    &--active
      background-color: #6E8484
      color: white

      svg
        fill: currentColor

    svg
      width: 9px
      height: 9px
</style>
