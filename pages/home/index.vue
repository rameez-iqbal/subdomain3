<template>
    <v-container>
    <h4 class="text-h4">{{ $t('welcome') }}</h4>
    <nuxt-link :to="localePath('about','en')">About</nuxt-link>

    <br />
    <nuxt-link :to="localePath('gift.localhost:3000','en')">visit gift subdomain</nuxt-link>
  </v-container>
</template>
<script setup>
const localePath = useLocalePath()
console.log(localePath)
</script>
<style>

</style>