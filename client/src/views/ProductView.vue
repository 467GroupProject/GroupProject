<template>
    <div class="products">
        <secion v-if="errored">
            <p>Sorry, something went wrong.</p>
        </secion>
        <section v-else>
            <!--
            <div v-for="(product, index) in products" v-bind:key="product">
                <img v-if="product.pictureURL" :src="product.pictureURL">
                <span class="lighten">
                    <span></span> ${{ product.price }} {{ product.weight }}lb quantity {{ quantity[index].quantity }}
                </span>
            </div> 
            -->
            <v-row>
                <v-col v-for="n in products" :key="n" cols="3">
                    <v-card>
                        <img :src="n.pictureURL" />
                        {{ n.description }}
                    </v-card>
                </v-col>
            </v-row>
        </section>
    </div>
</template>

<script lang="ts">
import authenticationService
 from '@/services/authenticationService';
 export default{
    data: () => ({
        products: [],
        quantity: [],
        errored: false,
        width: 150
    }),
    mounted() {
        // get all products from legacy database
        authenticationService.product()
        .then(response => (this.products = response.data))
        .catch(error => {
            console.log(error);
            this.errored = true;
        }),
        // get all inventory from internal database
        authenticationService.inventory()
        .then(rensponse => (this.quantity = rensponse.data))
        .catch(error => {
            console.log(error);
            this.errored = true;
        });
    }
};
</script>