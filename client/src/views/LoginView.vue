<script setup lang="ts">
import { getSession, useLogin } from '../models/session';
import { signIn } from '@/models/users';
import { ref } from 'vue';
import value from 'vue';
import type { User } from "../models/users";

const username = ref('');
const password = ref('');

const session = getSession()
const { login, logout } = useLogin()

const doLogin = () => {
  login(username.value, password.value).then((user:User | null) => {
    username.value = '';
    password.value = '';
  })
}

const doLogout = () => {
  logout();
}


</script>

<template>
  
    <div class="login">
      <br>
      <br>
      <br>
      <div class="form">
     <h1 class="red is-size-1 has-text-weight-medium has-text-centered">Welcome Back!</h1>
           <br>
      <p class="has-text-centered">
     <span class="icon-text is-size-3">
             <i class="fas fa-user"></i>
              </span>
              <br>
     <span><strong>Log in</strong></span>
    </p>
    <br>
     <p><strong>Username</strong></p>
             <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input is-danger" type="Username" placeholder="Username" v-model.trim="username">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </p>
              </div>
      <p><strong>Password</strong></p>
             <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input is-danger" type="password" placeholder="Password" v-model.trim="password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
              </p>
         </div>  
       <br> 
     <div class="buttons is-centered" >                          
       <a class="button is-danger" @click="doLogin"><!--@click="doLogin"-->
         <strong>Sign in</strong> 
        </a>
         
        </div>  
        </div>
   </div>
</template>

<style>
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (min-width: 640px) {
    .login {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 50%;
    
    }

}
</style>
