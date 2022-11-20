<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <v-app id="vapp">
    <v-app-bar extended>
        <RouterLink to="/">
          <v-btn class="mx-10" 
          elevation="2" x-large rounded 
          color="black darken-1">
          <font-awesome-icon icon="fa-solid fa-home" />
          &nbsp;Home</v-btn>
          </RouterLink>
        <RouterLink to="/products">
          <v-btn class="mx-4" 
          elevation="2" x-large rounded 
          color="black darken-1">
          <font-awesome-icon icon="fa-solid fa-book" />
          &nbsp;Products</v-btn>
        </RouterLink>
        <v-spacer></v-spacer>
        <RouterLink to="/cart">
          <v-btn class="mx-10" 
          elevation="2" x-large rounded 
          color="black darken-1">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          &nbsp;Cart</v-btn>
        </RouterLink>
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
          <font-awesome-icon icon="fa-sold fa-info" />
          &nbsp;About</v-btn>
          </RouterLink>
    </v-col>
  </v-footer>
  </v-app>
</template>