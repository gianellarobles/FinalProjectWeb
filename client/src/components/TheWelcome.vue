<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import AdminIcon from './icons/IconAdmin.vue'
import ActivityIcon from './icons/IconActivity.vue'
import StatisticsIcon from './icons/IconStatistics.vue'
import FriendsIcon from './icons/IconFriends.vue'
import SearchIcon from './icons/IconSearch.vue'

</script>

<template>
    <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
                <div class ="navbar-brand">
                    <a class = "navbar-item" href="/">
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
                                    <a class="navbar-link" href= "/admin" >
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
                            
                        <a class="navbar-item" href="/activity">
                        <i class="fas fa-running"> &nbsp;</i>
                            My Activity
                        </a>
                        <a class="navbar-item" href="/statistics">
                            <i class="fas fa-chart-line"> &nbsp;</i>
                            Statistics
                        </a>
                        <a class="navbar-item" href="/friends">
                            <i class="fas fa-users">&nbsp;</i>
                            Friends Activity
                        </a>
                        <a class="navbar-item" href="/search">
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


  <WelcomeItem>
    <template #icon>
      <AdminIcon />
    </template>
    <template #heading>Admin</template>

    Here is to check your status. The drop down will include Plan and Progress tabs
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ActivityIcon />
    </template>
 <template #heading>My Activity</template>
    Here in your activity, you can see your Activity for the day and your plan will be displayed.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <StatisticsIcon />
    </template>
    <template #heading>Statistics</template>
    In your statistics page, your acitivities per week will be displayed. Additionally, the exercise you like to do the most and a breakdown of how your mental health is doing. 

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <FriendsIcon />
    </template>
    <template #heading>Friends Activity</template>
    You will be able to see your friends activities and their progress. You can make suggestions and comment on their progress.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SearchIcon />
    </template>
    <template #heading>People Search</template>
    You can search for people and add them as friends. You can also see their progress and make suggestions.
 
    <!--
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a><div class="--> 

  </WelcomeItem>

</template>



