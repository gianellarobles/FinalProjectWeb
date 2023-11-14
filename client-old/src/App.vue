<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
    <header>
        <NavBar />
    </header>

    <div class="container">
        <RouterView />
    </div>

     <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
                <div class ="navbar-brand">
                    <a class = "navbar-item" href="index.html">
                        Healing Fitness &nbsp;
                        <i class="fas fa-hand-holding-heart"></i>
                    </a>
                
                    <a role ="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <!-- This line helps with the app version of the website. Demonstrates the tabs-->
                <div id="navbarBasicExample" class="navbar-menu is-active">
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
                                </a>
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
    
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-danger">
                                    <strong>Sign Up</strong>
                                </a>
                                <a class="button is-light" >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
            <section class="section">
                <div class="container">
                    <div class="columns has-text-white">
                        <div class="column">
                            <p class="title is-1 has-text-white"><strong>Welcome to Healing Fitness </strong></p>
                            <p class="title is-5 has-text-white">&nbsp;Begin your healthy fitness journey today with our website. </p>
                           <!-- Add this icon later, try to make it larger
                        <i class="fas fa-hand-holding-heart icon is-large" ></i>-->
                        </div>
                    </div>
                </div>
            </section>
</template>

<style scoped>
    body{
        background-color:azure;
    }

    .container{
        background-color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 5px;
        min-height: 100vh;
    }
</style>