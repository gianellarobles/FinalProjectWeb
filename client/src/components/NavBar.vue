<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';

//update: add new features to our NavBar
    //might have to import this file when using it for the other pages
const isActive = ref(false);
const isShoppingCartOpen = ref(false);

</script>

<template>

<!-- This is the name of the website, "Healing Fitness" -->
   <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
                <div class ="navbar-brand">
                    <a class = "navbar-item" href="index.html">
                        Healing Fitness &nbsp;
                        <i class="fas fa-hand-holding-heart"></i>
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
    
           <!--      
                <RouterLink class="navbar-item" to="/">home</RouterLink>
                <RouterLink class="navbar-item" to="/about">About</RouterLink>
                <RouterLink class="navbar-item" to="/products">Products</RouterLink>

                These are just in case I actually need them in the future. I hope not, we shall see.
            -->
            </div>

             <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <!-- creating two different functions to create a SignUp account and LogIn -->
                                <a class="button is-danger":class="{ 'is-active': SignUp }"
                                    @click.prevent="SignUp =! SignUp ">
                                    <strong>Sign Up</strong>
                                </a>
                                <a class="button is-light" :class="{ 'is-active': LogIn }"
                                    @click.prevent="LogIn =! LogIn">
                                    Log in
                                </a>
                            </div>
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