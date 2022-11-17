<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app id="vapp">
    <v-app-bar extended>
      <nav>
        <RouterLink to="/">
          <v-btn class="mx-4 white--text" 
          elevation="2" x-large rounded 
          color="black darken-1">
          Home</v-btn>
          </RouterLink>
        <RouterLink to="/products">
          <v-btn class="mx-4 white--text" 
          elevation="2" x-large rounded 
          color="black darken-1">
          Products</v-btn>
        </RouterLink>
      </nav>
       
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>   
    </v-main>
    <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().toLocaleDateString() }}
      <RouterLink to="/about">
          <v-btn class="mx-4 white--text" 
          elevation="2" x-large rounded 
          color="black darken-1">
          About</v-btn>
          </RouterLink>
    </v-col>
  </v-footer>
  </v-app>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: 2rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

