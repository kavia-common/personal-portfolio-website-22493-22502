<template>
  <div class="logo" aria-label="Ocean Portfolio logo">
    <span class="drop blue"></span>
    <span class="drop amber"></span>
  </div>
</template>

<script setup lang="ts">
/* Decorative logo mark */
</script>

<style scoped>
.logo {
  width: 28px; height: 28px; position: relative;
}
.drop {
  position: absolute;
  width: 16px; height: 16px;
  border-radius: 6px 12px 12px 12px;
  transform: rotate(45deg);
  box-shadow: 0 8px 18px rgba(17,24,39,.12);
}
.drop.blue {
  background: var(--ocean-primary);
  left: 0; top: 0;
}
.drop.amber {
  background: var(--ocean-secondary);
  right: 0; bottom: 0;
}
</style>
