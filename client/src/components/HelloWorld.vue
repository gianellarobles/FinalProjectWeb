<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
</script>

<template> 
 
    
<nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
                      <div class ="navbar-brand">
                      
                       <a class = "navbar-item" href="/">
                         <RouterLink to="/"><i class="fas fa-hand-holding-heart"></i>
                         </RouterLink> </a>
                
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
                                           &nbsp;Admin
                                          </a>
                                          <div class="navbar-dropdown">
                                             <RouterLink to="/purpose"><a class="navbar-item" >
                                                        Purpose
                                                        </a></RouterLink>
                                                <RouterLink to="/plan"><a class="navbar-item" >
                                                        Plan
                                                    </a></RouterLink>
                                          </div>
                                      </div>
                            <a class="navbar-item">
                            <RouterLink to="/activity"> 
                                  <i class="fas fa-running"> </i>
                                     &nbsp; My Activity
                                  </RouterLink> </a>
                                   <a class="navbar-item" >
                            <RouterLink to="/statistics">
                                  <i class="fas fa-chart-line"></i>
                                  &nbsp;Statistics
                              </RouterLink></a>
                              <a class="navbar-item">
                             <RouterLink to="/friends"> 
                                  <i class="fas fa-users"></i>
                                &nbsp;Friends Activity
                              </RouterLink></a>
                            <a class="navbar-item">
                                <RouterLink to="/search"> 
                                  <i class="fas fa-search"></i>
                                  &nbsp;People Search
                             </RouterLink> </a>

                          </div>

                          <div class="navbar-end">
                              <div class="navbar-item">
                                  <div class="buttons">
                                    <RouterLink to="/signup"> <a class="button is-danger" href="/signup">
                                          <strong>Sign Up</strong>
                                      </a></RouterLink>
                                      &nbsp;
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
