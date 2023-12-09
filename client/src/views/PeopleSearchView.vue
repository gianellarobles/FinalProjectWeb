<template>

 <div class="search">
      <br>
      <br>
    <p><strong>Search for Friends</strong></p>
     <div class="field is-grouped">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input class="input is-danger" type="Username" placeholder="Enter Username">
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </p>
          <p class="control">
            <a class="button is-danger has-text-weight-semibold">
              Search
              </a>
          </p>
        </div>
        <br>
         <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img class="is-rounded" src="/Users/gianellarobles/Documents/GitHub/FinalProjectWeb/client/Cute-PNG-Pic.png" alt="Image">
              <br>
              <p class="control">
              &nbsp;&nbsp;&nbsp;<a class="button is-danger is-size-7 has-text-weight-bold">
              Request
                  </a>
                  <br>
              </p>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Angela Oaks</strong> <small>@angieOaks</small>
                <br>     
               Hi, I am Angie and I am looking for a workout buddy!
        
               <h4 class="is-size-6 has-text-weight-semibold">Status: 
                <span class="icon has-text-warning">
                    <i class="fas fa-smile-beam"></i>
                 </span> 
                 
                </h4> 
           </p>
           
        </div>
        <br>
        <br>
        <br>
          </div>
        </article>
      </div>
        <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img class="is-rounded" src="/Users/gianellarobles/Documents/GitHub/FinalProjectWeb/client/E2yj-NxXIAE1T3h.png" alt="Image">
                  <br>
                <p class="control">
                &nbsp;&nbsp;&nbsp;<a class="button is-danger is-size-7 has-text-weight-bold">
                Request
                    </a>
                    <br>
                </p>
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                     <strong>John Smith</strong> <small>@johnsmith</small> 
                    <br>
                    Hi, I am John and I love hikes.
        
                   <h4 class="is-size-6 has-text-weight-semibold">Status: 
                    <span class="icon has-text-warning">
                      <i class="fas fa-meh-rolling-eyes"></i>
                     </span> 
                    </h4> 
               </p>
            </div>
            <br>
            <br>
              </div>
            </article>
        </div>
   </div>
</template>

<style>
@media (min-width: 640px) {
    .search {
        min-height: auto;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 75%;
    }
}
</style>
