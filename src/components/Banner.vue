<template>
  <div class="banner">
    <div class="banner__outter">
      <div class="container">
        <div class="content">
          <div class="banner__inner">

            <div class="banner__text">
              <h2 class="banner__title">Czasopisma</h2>
              <h3 class="banner__lead">Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu Podatkowego”, który
                tym razem poświęcony jest w dużej części zmianom w podatkach w roku 2019.</h3>
              <p>Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie rozliczania kosztów używania
                samochodów osobowych, wprowadzenie „exit tax” czy zmiany dotyczące poboru podatku u źródła na gruncie
                podatków dochodowych, poświęcając im odrębne artykuły.</p>
            </div>
            <div class="banner__image-wrap">
              <img class="banner__image" src="@/assets/images/banner.png" alt="Book">
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="sass" scoped>
.banner
  width: 100%
  height: 450px
  display: flex
  position: relative

  &__outter
    background-image: url("@/assets/images/banner-side.png")
    background-color: #0A655E
    width: 100%
    height: 80%
    background-repeat: no-repeat
    background-position: 10% 40%
    background-size: auto 140%

  &__inner
    display: grid
    grid-template-columns: 1fr 1fr

  &__image
    position: absolute
    max-height: 450px

  .container
    height: 100%

  .content
    margin: 2rem
    display: flex
    text-align: left
    color: #F1F5F5

  &__text
    display: flex
    flex-direction: column
    justify-content: center

  &__title
    font-size: 56px
    font-weight: bold
    padding: 0
    margin: 0

  &__lead
    font-size: 14px
    font-weight: bold

  p
    font-size: 14px
</style>
