<template>
    <div class="friends">
        <br>
        <br>
      <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
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
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a> 
            <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-thumbs-up" aria-hidden="true"></i>
                </span>
              </a>
          </div>
        </nav>
        <input class="input is-danger" type="text" placeholder="Danger input">
      </div>
    </article>
  </div>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
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
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-thumbs-up" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
        <input class="input is-danger" type="text" placeholder="Danger input">
      </div>
    </article>
  </div>

    </div>
</template>

<style>
@media (min-width: 640px) {
    .friends {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .card{  
        margin: 0 auto;
        width: 50%;

    }
}
</style>