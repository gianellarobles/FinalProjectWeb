<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useLogin } from "../models/session";
import { getSession } from "../models/session";


const session = getSession();
const { logout } = useLogin();

const doLogout = () => {
  logout();
};


</script>

<template> 
 
    
<nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
                      <div class ="navbar-brand">
                      
                    <a class ="navbar-item">
                            <i class="fas fa-hand-holding-heart"></i>
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
                            
                            <RouterLink class ="navbar-item" to="/activity">
                                  <i class="fas fa-running"> </i>
                                     &nbsp; My Activity
                                 </RouterLink> 
                                   
                            <RouterLink class= "navbar-item" to="/statistics">
                                  <i class="fas fa-chart-line"></i>
                                  &nbsp;Statistics
                           </RouterLink>
                              
                             <RouterLink class = "navbar-item" to="/friends"> 
                                  <i class="fas fa-users"></i>
                                &nbsp;Friends Activity
                              </RouterLink>
                            
                                <RouterLink class ="navbar-item" to="/search"> 
                                  <i class="fas fa-search"></i>
                                  &nbsp;People Search
                           </RouterLink> 

                          </div>

                          <div class="navbar-end">
                              <div class="navbar-item">
                                  <div class="buttons">
                                   <RouterLink class ="button is-danger" to="/signup"> 
                                          <strong>Sign Up</strong>
                                    </RouterLink>
                                      &nbsp;
                                     <RouterLink class="button is-light" to="/login">
                                         <strong>Log in</strong>
                                    </RouterLink>
                                  </div>
                    
                              </div>
                         </div>
                     </div>
                </nav>
  
</template>

<style scoped>

</style>
