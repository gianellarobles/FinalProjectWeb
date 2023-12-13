<script setup lang="ts">
import { ref, toDisplayString } from 'vue';

const currentLikes = ref(0);


</script>

  
<template>
    <div class="friends">
        <br>
        <br>
        <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img class="is-rounded" src="/src/Cute-PNG-Pic.png" alt="Image">
            <br>
           <p class="control">
            &nbsp;<a class="button is-danger is-size-6 has-text-weight-bold">
            Edit Profile
                </a>
            </p>
          </figure>
        </div>
        <div class="media-content">
          <div class="content is-size-5">
            <p>
              <br>
              <strong>Name: </strong><strong>Angela Oaks</strong> 
              <br>
              <strong>Username: </strong><small>@angieOaks</small> 
              <br><br>
              <strong>Bio: </strong>
              <br>
              Hi, I am Angie and I am looking for a workout buddy!
            </p>
            <strong>Status: <span class="icon has-text-warning">
                      <i class="fas fa-smile-beam"></i>
                   </span> </strong>
    </div>
        </div>
      </article>
    </div>
      <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img src="/src/E2yj-NxXIAE1T3h.png" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br>
            I start my fitness journey today!
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
             &nbsp;&nbsp;
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" @click.once ="currentLikes++" aria-hidden="true"></i>&nbsp;{{ currentLikes }}
              </span>
            </a> 
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            <a class="level-item" aria-label="reply">
                <span class="icon is-small">
      <!--    <i class="fas fa-thumbs-down" @click="addLike" aria-hidden="true"></i> &nbsp;{{ currentLikes }}
      -->      
          
                </span>
              </a>
          </div>
          </nav>
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input class="input is-danger" type="comment" placeholder="Leave a comment">
              </p>
              <p class="control">
                <a class="button is-danger has-text-weight-semibold" @click="">
                  Comment
                  </a>
           <!--      {{ comment }} -->  
              </p>
            </div>
      </div>
    </article>
  </div>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img src="/src/Cute-PNG-Pic.png" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Angela Oaks</strong> <small>@angieOaks</small> <small>31m</small>
            <br>
            Let's see how my exercise will go today!
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            &nbsp;&nbsp;
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
             <!--   <i class="fas fa-heart" @click="addLike" aria-hidden="true"></i>&nbsp;{{ currentLikes }} -->  
              </span>
            </a>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
              <!--  <i class="fas fa-thumbs-down" @click="addLike" aria-hidden="true"></i>&nbsp;{{ currentLikes }} -->
              </span>
            </a>
          </div>
        </nav>
             <div class="field is-grouped">
            <p class="control is-expanded">
              <input class="input is-danger" type="comment" placeholder="Leave a comment">
            </p>
            <p class="control">
              <a class="button is-danger has-text-weight-semibold">
                Comment
                </a>
            </p>
          </div>
      </div>
    </article>
  </div>
    </div>
</template>

<style>
@media (min-width: 640px) {
    .friends {
        min-height: auto;
        display: flex;
        flex-direction: column;
    }
    .card{  
        margin: 0 auto;
        width: 50%;

    }
}
</style>