<script setup lang="ts">

defineProps<{
  msg: string 
}>()
</script>

<template> 
  <div class="greetings"> 
    <h1 class="red">{{ msg }} <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path  d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"/></svg>
</h1>
    
    <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
                      <div class ="navbar-brand">
                          <a class = "navbar-item" href="/">
                        <i class="fas fa-hand-holding-heart" ></i>
                          </a>
                
                          <a role ="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
                              <span aria-hidden="true"></span>
                              <span aria-hidden="true"></span>
                              <span aria-hidden="true"></span>
                          </a>
                      </div>
                      <!-- This line helps with the app version of the website. Demonstrates the tabs-->
                      <div id="navbarBasicExample" class="navbar-menu">
                          <div class="navbar-start">
                                      <div class="navbar-item has-dropdown is-hoverable">
                                          <a class="navbar-link" href="/admin" >
                                            <i class="fas fa-book">&nbsp;</i>
                                           Admin &nbsp;
                                          </a>
                                          <div class="navbar-dropdown">
                                              <a class="navbar-item">
                                                  Purpose
                                              </a>
                                              <a class="navbar-item">
                                                  Plan
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
                                      <a class="button is-danger" href="/signup">
                                          <strong>Sign Up</strong>
                                      </a>
                                      <a class="button is-light" href="/login">
                                         <strong>Log in</strong>
                                      </a>
                                  </div>
                              </div>
                         </div>
                     </div>
                </nav>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 3rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
