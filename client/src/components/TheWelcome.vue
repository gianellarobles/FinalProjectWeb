<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import AdminIcon from './icons/IconAdmin.vue'
import ActivityIcon from './icons/IconActivity.vue'
import StatisticsIcon from './icons/IconStatistics.vue'
import FriendsIcon from './icons/IconFriends.vue'
import SearchIcon from './icons/IconSearch.vue'
</script>

<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <i class="fas fa-hand-holding-heart"></i>
      </a>
      <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="https://bulma.io/">
          Home
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
            Docs
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
              Overview
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
              Modifiers
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Columns
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>
                  Tweet
                </span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip">
                <span class="icon">
                  <i class="fas fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>


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
