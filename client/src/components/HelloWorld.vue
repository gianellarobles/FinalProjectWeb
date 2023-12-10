<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
</script>

<template> 
 
    
<nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
                      <div class ="navbar-brand">
                      
                          <a class = "navbar-item" href="/">
                           <RouterLink to="/"><i class="fas fa-hand-holding-heart" ></i></RouterLink>
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
                                          <a class="navbar-link" >
                                            <i class="fas fa-book">&nbsp;</i>
                                           Admin &nbsp;
                                          </a>
                                          <div class="navbar-dropdown">
                                             <RouterLink to="/purpose"><a class="navbar-item" href="/purpose">
                                                      Purpose
                                                  </a></RouterLink>
                                                <RouterLink to="/plan"><a class="navbar-item" href="/plan">
                                                        Plan
                                                    </a></RouterLink>
                                          </div>
                                      </div>
                            
                            <RouterLink to="/activity"> <a class="navbar-item" href="/activity">
                                  <i class="fas fa-running"> &nbsp;</i>
                                      My Activity
                                  </a></RouterLink>
                            <RouterLink to="/statistics"> <a class="navbar-item" href="/statistics">
                                  <i class="fas fa-chart-line"> &nbsp;</i>
                                  Statistics
                              </a></RouterLink>
                             <RouterLink to="/friends"> <a class="navbar-item" href="/friends">
                                  <i class="fas fa-users">&nbsp;</i>
                                  Friends Activity
                              </a></RouterLink>
                             <RouterLink to="/search"> <a class="navbar-item" href="/search">
                                  <i class="fas fa-search"> &nbsp;</i>
                                  People Search
                              </a></RouterLink>

                          </div>

                          <div class="navbar-end">
                              <div class="navbar-item">
                                  <div class="buttons">
                                    <RouterLink to="/signup"> <a class="button is-danger" href="/signup">
                                          <strong>Sign Up</strong>
                                      </a></RouterLink>
                                     <RouterLink to="/login"><a class="button is-light" href="/login">
                                         <strong>Log in</strong>
                                      </a></RouterLink>
                                      
                                  </div>
                              </div>
                         </div>
                     </div>
                </nav>
  
</template>

<style scoped>

</style>
