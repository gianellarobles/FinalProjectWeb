<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
i

const isActive = ref(false);
const isShoppingCartOpen = ref(false);

</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="28" height="28" />

            </a>

            <a role="button" class="navbar-burger" :class="{ 'is-active': isActive }" @click="isActive = !isActive"
                aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
            <div class="navbar-start">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                              Admin
                        </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                                Purpose
                         </a>
                        <a class="navbar-item">
                             Plan
                        </a>
                         <a class="navbar-item">
                            Progress
                         </a>
                             </div>
                         </div>
                        
                        <a class="navbar-item">
                        <i class="fas fa-running"> &nbsp;</i>
                            My Activity
                        </a>
                        <a class="navbar-item">
                            <i class="fas fa-chart-line"> &nbsp;</i>
                            Statistics
                        </a>
                        <a class="navbar-item">
                            <i class="fas fa-users">&nbsp;</i>
                            Friends Activity
                        </a>
                        <a class="navbar-item">
                            <i class="fas fa-search"> &nbsp;</i>
                            People Search
                        </a>
    
                    
                <RouterLink class="navbar-item" to="/">home</RouterLink>
                <RouterLink class="navbar-item" to="/about">About</RouterLink>
                <RouterLink class="navbar-item" to="/products">Products</RouterLink>

            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <a class="button" :class="{ 'is-active': isShoppingCartOpen }"
                        @click.prevent="isShoppingCartOpen = !isShoppingCartOpen">
                        <span class="icon">
                            <i class="fas fa-shopping-cart"></i>
                        </span>
                    </a>
                </div>
                <div class="navbar-item">
                    <LoginBadge />
                </div>
            </div>
        </div>
    </nav>
 
</template>


<style scoped>
.router-link-active {
    font-weight: bold;
    border-bottom: 2px solid #00d1b2;
}
</style>