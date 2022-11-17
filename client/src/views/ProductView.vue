<template>
    <div class="products">
        <section v-if="errored">
            <p>Sorry, something went wrong.</p>>
        </section>
        <section v-else>
            <v-container fluid>
                <v-row>
                    <v-col v-for="(n,i) in products" :key="n" cols="4"> 
                        <v-card class="mx-auto text-center" height="275">
                            <v-card-title>{{ n.description }}</v-card-title>
                            <v-card-subtitle>${{ n.price }}</v-card-subtitle>
                            <v-img height="100" :src="n.pictureURL" />
                            <section v-if="quantity[i].quantity == 0">
                                <v-badge content="Out of Stock" bottom="true"></v-badge>
                            </section>
                            <section v-else>
                                <v-card-text>{{ quantity[i].quantity }}</v-card-text>
                                <v-card-actions>
                                    <v-btn variant="outlined">Add to Cart</v-btn>
                                </v-card-actions>
                            </section>
                        </v-card> 
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script lang="ts">
import authenticationService
 from '@/services/authenticationService';
 export default{
    data: () => ({
        // array to hold all products
        products: [],
        // array to hold all inventory
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