<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
</script>

<template> 
 
    
<nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
                      <div class ="navbar-brand">
                      
                     <RouterLink to="/">   <a class = "navbar-item" href="/">
                           <i class="fas fa-hand-holding-heart" ></i>
                          </a></RouterLink>
                
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
                                            <i class="fas fa-book"></i>
                                           Admin
                                          </a>
                                          <div class="navbar-dropdown">
                                             <RouterLink to="/purpose"><a class="navbar-item">
                                                      Purpose
                                                  </a></RouterLink>
                                                <RouterLink to="/plan"><a class="navbar-item" >
                                                        Plan
                                                    </a></RouterLink>
                                          </div>
                                      </div>
                            
                            <RouterLink to="/activity"> <a class="navbar-item" >
                                  <i class="fas fa-running"> </i>
                                      My Activity
                                  </a></RouterLink>
                            <RouterLink to="/statistics"> <a class="navbar-item" >
                                  <i class="fas fa-chart-line"></i>
                                  Statistics
                              </a></RouterLink>
                             <RouterLink to="/friends"> <a class="navbar-item">
                                  <i class="fas fa-users"></i>
                                  Friends Activity
                              </a></RouterLink>
                             <RouterLink to="/search"> <a class="navbar-item">
                                  <i class="fas fa-search"></i>
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
