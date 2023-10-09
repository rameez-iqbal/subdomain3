<template>
    <v-container>
    <h4 class="text-h4">{{ $t('welcome') }}</h4>
    <nuxt-link :to="localePath('about','en')">About</nuxt-link>

    <br />
    <a href="http://gift.localhost:3000/ar" _target="blank">visit gift subdomain</a>
  </v-container>
</template>
<script setup>
const localePath = useLocalePath()
console.log(localePath)
</script>
<style>

</style>