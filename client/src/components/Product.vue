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
                    <v-card-text>{{ productStore.iventoryList[i].quantity }}</v-card-text>
                    
                    <v-btn variant="outlined">
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

export default{
    setup(){
        const productStore = useProductStore();
        productStore.fill();

        return { productStore }
    }
}

</script>