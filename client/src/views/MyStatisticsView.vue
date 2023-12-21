<template>
    <div class="statistics">
      <br>
      <br>
      <h1 class=" is-size-1 has-text-weight-medium has-text-centered">My Progress Statistics</h1>
        <article class="message is-primary">
      <div class="message-header">
        <p>Exercise</p>
      </div>
      <div class="message-body">
        <div class="content">
          <p>
            <strong> Date: 12/3/23 </strong>
            <br>
            <br>
            <strong>Exercise Name : Running</strong>
            <br>
            <br>
            <strong>Time: 30 min</strong>
            <br>
            <br>
            <strong>Message: It was exhausting but I made sure to keep going!</strong>
            <br>
            <br>
            <strong>Would you do this exercise again? Yes</strong> 
            <br>
            <br>
          </p>
        </div>
      </div>
    </article>

       <article class="message is-danger">
        <div class="message-header">
          <p>Exercise</p>
        </div>
        <div class="message-body">
          <div class="content">
            <p>

              <strong> Date: 12/5/23 </strong>
              <br>
              <br>
              <strong>Exercise Name : Swimming</strong>
              <br>
              <br>
              <strong>Time:  More than 1 hour</strong>
              <br>
              <br>
              <strong>Message: I was able to destress and enjoy the swim!</strong>
              <br>
              <br>
              <strong>Would you do this exercise again? Yes</strong> 
              <br>
              <br>
            </p>
          </div>
        </div>
      </article>
    
            <article class="message is-warning">
          <div class="message-header">
            <p>Exercise</p>

          </div>
          <div class="message-body">
            <div class="content">
              <p>
                <strong> Date: 12/7/23 </strong>
                <br>
                <br>
                <strong>Exercise Name : Lifting weights</strong>
                <br>
                <br>
                <strong>Time:  30 min</strong>
                <br>
                <br>
                <strong>Message: I was lifting weights but the weight were too heavy and it hurt my back. Will try again with lighter weights.</strong>
                <br>
                <br>
                <strong>Would you do this exercise again? Yes</strong> 
                <br>
                <br>
              </p>
            </div>
          </div>
        </article>
    </div>
</template>

<style>
center{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
}
@media (min-width: 640px) {
    .statistics {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
}
</style>