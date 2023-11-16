<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import AdminIcon from './icons/IconAdmin.vue'
import ActivityIcon from './icons/IconActivity.vue'
import StatisticsIcon from './icons/IconStatistics.vue'
import FriendsIcon from './icons/IconFriends.vue'
import SearchIcon from './icons/IconSearch.vue'

</script>

<template>
    
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



