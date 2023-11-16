<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AdminIcon from './components/icons/IconAdmin.vue'
import ActivityIcon from './components/icons/IconActivity.vue'
import StatisticsIcon from './components/icons/IconStatistics.vue'
import FriendsIcon from './components/icons/IconFriends.vue'
import SearchIcon from './components/icons/IconSearch.vue'
import HomeIcon from './components/icons/IconHome.vue'


</script>

<template>
  <header>
     
    <!-- This is the logo for HealingFitness
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->
    <div class="wrapper">
    
      <HelloWorld msg="Healing Fitness"/>
    <!--  <nav>
        <RouterLink to="/"><HomeIcon/> Home</RouterLink>
        <RouterLink to="/admin"><AdminIcon /> Admin</RouterLink>
        <RouterLink to="/activity"><ActivityIcon /> My Activity</RouterLink>
        <RouterLink to="/statistics"><StatisticsIcon /> My Statistics</RouterLink>
        <RouterLink to="/friends"><FriendsIcon /> My Friends</RouterLink>
        <RouterLink to="/search"><SearchIcon /> People Search</RouterLink>
      </nav>-->
    </div>
  </header>

  <RouterView />

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
