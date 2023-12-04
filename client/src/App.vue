<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
     
    <!-- This is the logo for HealingFitness-->
    <div class="wrapper">
  
      <HelloWorld/>
  
    </div>
  </header>

  <RouterView />

</template>

<style scoped>
header {
  line-height: 3.5;
  max-height: 120vh;
}

</style>
