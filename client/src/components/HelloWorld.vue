<!--<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
-->

<!--

<head>
    <!-- The name of the website on the tab -->
    <title>Bulma</title>
    <!-- Need this to display navbar //->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
-->
<template>
<body>
        <!-- This is the navbar-->
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">

        <div class="navbar-brand">
            
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/assets/Bulma%20Logo%20White.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112"
                    height="28" >
            </a>
              
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
font
            </a>
        </div>

    
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Docs
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Overview
                        </a>
                        <a class="navbar-item">
                            Modifiers
                        </a>
                        <a class="navbar-item">
                            Columns
                        </a>
                        <a class="navbar-item">
                            Layout
                        </a>
                        <a class="navbar-item">
                            Form
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Elements
                        </a>
                        <a class="navbar-item is-active">
                            Components
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">

                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-white">
                            <span class ="icon-text">
                                <span class="icon">
                                <i class="fa fa-twitter"></i>
                                </span>
                            </span>
                            &nbsp;&nbsp;Twitter
                        </a>
                    </div>
                </div>
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <span class="icon">
                                <i class="fa fa-download"></i>
                            </span>
                        &nbsp;&nbsp;&nbsp;Download
                        </a>
                    </div>
                      
                </div>
            </div>
        </div>
 
    </nav>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-one-quarter">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component
                                </p>
                                <button class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                                    <br>
                                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Save</a>
                                <a href="#" class="card-footer-item">Edit</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                    <div class="block">
                        
                    </div>
                        <article class="message is-danger">
                            <div class="message-header has-text-white">
                                <p>Message</p>
                                <button class="delete" aria-label="delete"></button>
                            </div>
                            <div class="message-body has-background-danger-light has-text-danger">
                               Here is my Bulma Website!
                            </div>
                        </article>
            </div>
            <div class="column is-half">
                <nav class="panel">
                    <div class="tabs is-boxed">
                        <ul>
                            <li class="is-active">
                                <a>
                                    <span class="icon is-small"><i class="fa fa-list-alt" aria-hidden="true"></i></span>
                                    <span>Current</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon is-small"><i class="fa fa-calendar-times-o" aria-hidden="true"></i></span>
                                    <span>Completed</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon is-small"><i class="fa fa-calendar-minus-o" aria-hidden="true"></i></span>
                                    <span>Upcoming</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span class="icon is-small"><i class="fa fa-calendar-o" aria-hidden="true"></i></span>
                                    <span>All</span>
                                </a>
                            </li>
                        </ul>
        
                    </div>
                    <div class="panel-block">
                        <p class="control has-icons-left">
                            <input class="input is-primary" type="text " placeholder="New Task">
                            <span class="icon is-left">
                                <i class="fa fa-calendar-plus-o"></i>
                            </span>
                        </p>
                    </div>
                   
                  
                    <label class="panel-block">
                        <input type="checkbox">
                        Make Bulma great again
                    </label>
                    <label class="panel-block">
                        <input type="checkbox">
                        Add some more features
                    </label>
                    <label class="panel-block">
                        <input type="checkbox">
                        Make a github account
                    </label>
                    <label class="panel-block">
                        <input type="checkbox">
                        Learn how to use github
                    </label>
                    <label class="panel-block">
                        <input type="checkbox">
                        add a .gitinore file
                    </label>
                
                </nav>
                <article class="message is-primary">
                    <div class="message-header">
                        <p>Make a github account</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        Go to <a href="https://github.com">github.com</a> and create an account. 
                        <p> That's where you'll be able to share your work with the world.. that's where we will be putting all our code for this class.</p>
                        <progress class="progress is-success" value="60" max="100">60%</progress>
                    </div>
                </article>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                </div>
    
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-success" type="text" placeholder="Text input" value="bulma">
                        <span class="icon is-small is-left">
                            <i class="fa fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fa fa-check"></i>
                        </span>
                    </div>
                    <p class="help is-success">This username is available</p>
                </div>
                
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
                        <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fa fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    <p class="help is-danger">This email is invalid</p>
                </div>
                
                <div class="field">
                    <label class="label">Subject</label>
                    <div class="control">
                        <div class="select">
                            <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>
                
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox">
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>
                
                <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question">
                            Yes
                        </label>
                        <label class="radio">
                            <input type="radio" name="question">
                            No
                        </label>
                    </div>
                </div>
                
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="content is-medium">
                <p class="title is-3">Table of contents</p>
                <p class="subtitle is-5 ">Intra-page navigation</p>
                
                <aside class="menu">
                    <p class="menu-label">
                        General
                    </p>
                    <ul class="menu-list" style="list-style-type: none;">
                        <li><a>Dashboard</a></li>
                        <li><a>Customers</a></li>
                    </ul>
                    <p class="menu-label">
                        Administration
                    </p>
                    <ul class="menu-list" style="list-style-type: none;">
                        <li><a>Team Settings</a></li>
                        <li>
                            <a class="is-active">Manage Your Team</a>
                            <ul style="list-style-type: none;">
                                <li><a>Members</a></li>
                                <li><a>Plugins</a></li>
                                <li><a>Add a member</a></li>
                            </ul>
                        </li>
                        <li><a>Invitations</a></li>
                        <li><a>Cloud Storage Environment Settings</a></li>
                        <li><a>Authentication</a></li>
                    </ul>
                    <p class="menu-label">
                        Transactions
                    </p>
                    <ul class="menu-list" style="list-style-type: none;">
                        <li><a>Payments</a></li>
                        <li><a>Transfers</a></li>
                        <li><a>Balance</a></li>
                    </ul>
                </aside>
            </div>
        </div>
     </section>
</body>
</template>
