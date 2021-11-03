<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Applicant Search</router-link> |
      <router-link to="/dashboard">Employer Dashboard</router-link>
    </div>
    <router-view/>
    <footer class="site-footer">
      <div class="footer-site-block">
        <h3 class="footer-map-title">Copyright 2021</h3>
      </div>
      <div class="footer-site-block">
        <h3 class="footer-map-title">GitHub</h3>
          <p class="github-info">Code for this site is stored at
            <a href="https://github.com/JayyCub/quickhire">https://github.com/JayyCub/quickhire</a>
          </p>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: linear-gradient(0deg, rgba(34,155,195,0.5935050940438871) 0%, rgba(45,76,253,0.5464831504702194) 100%);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #5773ff;
}
.site-footer {
    background: #e0e0e0;
    height: 100px;
    color: #506375;
    margin-top: 40px;
    margin-bottom: -155px;
}
.footer-map-title {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1%;
    margin-bottom: 0%;
    height: auto;
}
.footer-site-block {
    width: 50%;
    height: 98%;
    float: left;
}
.github-info {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    float: left;
    margin-top: 0px;
}
</style>
