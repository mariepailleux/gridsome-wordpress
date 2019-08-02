<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/"><img width="190" height="39" src="https://wordpress-4145-0.cloudclusters.net/wp-content/uploads/2019/07/cropped-logo_explorateurs@1x-190x39.png" 
        class="custom-logo" alt="Explorateur du Front End" srcset="https://wordpress-4145-0.cloudclusters.net/wp-content/uploads/2019/07/cropped-logo_explorateurs@1x-190x39.png 190w, https://wordpress-4145-0.cloudclusters.net/wp-content/uploads/2019/07/cropped-logo_explorateurs@1x-300x61.png 300w, https://wordpress-4145-0.cloudclusters.net/wp-content/uploads/2019/07/cropped-logo_explorateurs@1x.png 764w" sizes="(max-width: 190px) 100vw, 190px" /></a></g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/category/apprendre">Apprendre</g-link>
        <g-link class="nav__link" to="/category/utiliser">Utiliser</g-link>
        <g-link class="nav__link" to="/category/sinspirer">S'inspirer</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}

img {
  max-width: 100%;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1.0em 0.75em 2.0em;
}

.layout {
  max-width: 600px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
</style>
