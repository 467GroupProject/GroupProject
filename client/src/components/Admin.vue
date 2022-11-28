<template>
    <v-container fluid class="text-center">
        <v-toolbar>
            <v-toolbar-title>Administrator</v-toolbar-title>
            <v-spacer></v-spacer>
            <RouterLink to="/allOrders" class="text-decoration-none">
            <v-btn variant="outlined">
            <font-awesome-icon icon="fa-solid fa-list-check" />
            &nbsp;All Orders</v-btn>
            </RouterLink>
            <v-spacer></v-spacer>
            <RouterLink to="/weights" class="text-decoration-none">
            <v-btn variant="outlined">
            <font-awesome-icon icon="fa-solid fa-list" />
            &nbsp;Weight Brackets
            </v-btn>
            </RouterLink>
            <v-spacer></v-spacer>
        </v-toolbar>
    <section v-if="isAdmin">
        <v-img :src="`../src/assets/pexels-anna-nekrashevich-6801648.jpg`" />
    </section>
        <RouterView />
    </v-container>
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";

export default{
    computed: {
        isAdmin(): boolean{
            return this.$route.path==='/admin'
        }
    }
}
</script>
