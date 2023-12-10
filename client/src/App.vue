<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { getSession } from './models/session';

const session = getSession();
</script>

<template>
  <header>
     
    <!-- This is the logo for HealingFitness-->
    <div class="wrapper">
  
      <HelloWorld/>
  
    </div>
  </header>

  <RouterView /> 

  <RouterLink to="/login"></RouterLink>

</template>

<style scoped>
@media (min-width: 640px) {
  header {
  line-height: 3.5;
  max-height: 120vh;
}
}

</style>
