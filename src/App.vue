<script setup lang="ts">
import Banner from './components/Banner.vue';
import Header from './components/Header.vue';
import MagazineSearch from './components/MagazineSearch.vue';
import Page from './components/PageWrap.vue';
</script>

<template>
  <div>
    <Header />
    <Page>
      <Banner />
      <MagazineSearch />
    </Page> 
  </div>
</template>
