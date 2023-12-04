<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>
<template>
  <main>
    <TheWelcome />
  </main>
</template>
<style scoped>
@media (min-width: 640px) {
    .home {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
}
</style>