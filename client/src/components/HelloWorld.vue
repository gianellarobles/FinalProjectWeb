<script setup lang="ts">

</script>

<template> 
 
    
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
  
</template>

<style scoped>


</style>
