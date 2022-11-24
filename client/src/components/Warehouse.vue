<template>
    <v-container fluid class="text-center">
        <v-toolbar>
            <v-toolbar-title>Car Parts Warehouse</v-toolbar-title>
            <v-spacer></v-spacer>
            <RouterLink to="/orders" class="text-decoration-none">
            <v-btn variant="outlined">
            <font-awesome-icon icon="fa-solid fa-truck-arrow-right" transform="flip-h" />
            &nbsp;Orders</v-btn>
            </RouterLink>
            <v-spacer></v-spacer>
            <RouterLink to="/receiving" class="text-decoration-none">
            <v-btn variant="outlined">
            <font-awesome-icon icon="fa-solid fa-truck-arrow-right" />
            &nbsp;Receiving
            </v-btn>
            </RouterLink>
            <v-spacer></v-spacer>
        </v-toolbar>
    <section v-if="isWarehouse">
        <v-img :src="`../src/assets/pexels-tiger-lily-4483610.jpg`" />
    </section>
        <RouterView />
    </v-container>
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";

export default{
    computed: {
        isWarehouse(): boolean{
            return this.$route.path==='/warehouse'
        }
    }
}
</script>
