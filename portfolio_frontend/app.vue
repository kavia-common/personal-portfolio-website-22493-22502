<template>
  <div class="min-h-screen bg-ocean-bg text-ocean-text antialiased">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
/**
 * Root app shell sets the base background and text, and renders NuxtPage.
 * The detailed layout is defined in layouts/default.vue
 */
</script>

<style>
/* Global font smoothing */
html, body, #__nuxt {
  height: 100%;
}
</style>
