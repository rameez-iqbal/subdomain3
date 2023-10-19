<template>
  <div class="h-screen bg-[#f8f8f8]">
    <GiftHeader />
    <client-only>
      <slot />
    </client-only>
  </div>
</template>

<script setup>
import GiftHeader from '@/components/GiftHeader'
</script>

<style lang="scss" scoped>
</style>