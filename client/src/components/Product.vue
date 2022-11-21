<template>
    <v-container fluid class="text-center">
        <v-row>
            <v-col v-for="(p, i) in productStore.productList"
            :key="p.number" cols="4">
                <v-card class="mx-auto" height="350px">
                <v-img height="100px" :src="p.pictureURL"/>
                <v-card-text class="text-h6 font-weight-black">{{ p.description }}</v-card-text>
                <v-card-text>${{ p.price }}</v-card-text>
                <v-card-subtitle>{{ p.weight }} lb</v-card-subtitle>
                <section v-if="productStore.iventoryList[i].quantity == 0">
                    <v-badge content="Out of Stock" inline></v-badge>
                </section>
                <section v-else>
                    <v-card-text>{{ productStore.iventoryList[i].quantity }} available</v-card-text>
                    
                    <v-btn variant="outlined" @click="cartStore.addToCart(
                        {id: i, quantity: 1}
                    ) ">
                        <font-awesome-icon icon="fa-sold fa-cart-plus" />
                        &nbsp;Add to Cart</v-btn>
                </section>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
    
</template>

<script lang="ts">
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';

export default{
    setup(){
        // use productStore and cartStore
        const productStore = useProductStore();
        productStore.fill();
        const cartStore = useCartStore();

        return { productStore, cartStore }
    }
}

</script>