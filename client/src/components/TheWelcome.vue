<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import AdminIcon from './icons/IconAdmin.vue'
import ActivityIcon from './icons/IconActivity.vue'
import StatisticsIcon from './icons/IconStatistics.vue'
import FriendsIcon from './icons/IconFriends.vue'
import SearchIcon from './icons/IconSearch.vue'

</script>

<template>
<br>
<h1 class="red is-size-1 has-text-weight-medium has-text-centered">Welcome to Healing Fitness</h1>

<h2 class="is-size-3 has-text-weight-medium has-text-centered">Here is a quick tour of the website</h2>
<br>
<br>
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
  </WelcomeItem>

</template>


