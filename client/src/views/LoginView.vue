<template>
    <div class="login">
      <br>
     <h1 class="red is-size-1 has-text-weight-medium has-text-centered">Welcome Back!</h1>
            <span class="icon">
                <i class="fas fa-user"></i>
            </span>
            <span>Login</span>
            <br /> <br />

   <p><strong>Enter name</strong></p>
    <input class="input is-danger" type="text" placeholder="Danger input">
   <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
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
        min-height: 120vh;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 50%;
    
    }
}
</style>
```