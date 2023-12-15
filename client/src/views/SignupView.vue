<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/models/users';
import { createUser } from '@/models/users';
import router from '@/router';
import { getSession } from '@/models/session';
import { useRoute } from 'vue-router';


const route = useRoute();
const user = ref<User>({} as User);

function signup() {
  if (user.value.id) {
    console.log('update');
  } else {
    createUser(user.value).then((data) => {
      console.log(data);

      if(data === null || data === undefined) {
        console.log('error');
        return;
      } else {
        console.log('Welcome ${user.value.name}','successful');
        router.push('/');
      }


    })
  }
}
</script>

<template>
    <div class="signup">
          <br>
          <br>
          <br>
         <h1 class="red is-size-1 has-text-weight-medium has-text-centered">Welcome to Healing Fitness</h1>
               <br>
          <p class="has-text-centered">
         <span class="icon-text is-size-3">
                 <i class="fas fa-user"></i>
                  </span>
                  <br>
         <span><strong>Sign Up</strong></span>
        </p>
        <br>
        <form class="admin-user-edit" @submit.prevent="signup()">
               <p><strong>Enter name</strong></p>
            <div class="field">
                <p class="control has-icons-left">
                  <input class="input is-danger" type="name" placeholder="Name" v-model.trim="user.name">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </p>
              </div>
           <p><strong>Create username</strong></p>
             <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input is-danger" type="username" placeholder="Username" v-model.trim="user.username">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
            <p><strong>Enter email</strong></p>
         <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Email" v-model.trim="user.email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
            <p><strong>Enter password</strong></p>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input is-danger" type="password" placeholder="Password" v-model.trim="user.password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>     
        <p><strong>Confirm password</strong></p>
           <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="password" placeholder="Confirm password">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <br>
             <div class="buttons is-centered">                          
         <button class="button is-danger" >
           <strong>Create Account</strong>
         </button>
          </div> 
          </form>
    </div>
</template>

<style>

@media (min-width: 640px) {
    .signup {
        min-height: 120vh;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 50%
    }

}
</style>