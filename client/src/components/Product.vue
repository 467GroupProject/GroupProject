<template>
    <v-container fluid class="text-center">
        <v-text-field variant="outlined" class="Search"
            v-model="search" label="Search"
            ></v-text-field>
        <v-data-table>
        <v-row>
            <v-col v-for="(p, i) in searchProduct"
            :key="i" cols="4">
                <v-card class="mx-auto" height="350px" variant="outlined">
                <v-img height="100px" :src="p.pictureURL"/>
                <v-card-text class="text-h6 font-weight-black">{{ p.description }}</v-card-text>
                <v-card-text>${{ p.price }}</v-card-text>
                <section v-if="productStore.iventoryList[i].quantity == 0">
                    <v-badge content="Out of Stock" inline></v-badge>
                </section>
                <section v-else>
                    <v-card-text>{{ productStore.iventoryList[i].quantity }} available</v-card-text>
                    <span>
                    <td class="text-left">
                        <v-text-field type="number" label="Quantity" min="0" max=""
                        append-outer-icon="add" v-model="added" @click:append-outer="increment"
                        prepend-icon="remove" @click:prepend="decrement" variant="outlined"></v-text-field>
                    </td>
                    &nbsp;
                    <v-btn variant="outlined" @click="cartStore.addToCart(
                        {id: i, quantity: Number(added)}
                    ); snackbar= true; addedToCart(Number(added), productStore.productList[i].description)
                    ; refresh()">
                        <font-awesome-icon icon="fa-sold fa-cart-plus" />
                        &nbsp;Add to Cart</v-btn>
                    </span>    
                </section>
                </v-card>
            </v-col>
        </v-row>
        </v-data-table>
        <v-snackbar v-model="snackbar" :multi-line="multiline" color="green">
            {{ text }}
        </v-snackbar>
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

        const added: number = 0;
        return { productStore, cartStore, added }
    },
    data(){
        return{
            search: '',
            snackbar: false,
            multiline: true,
            text: ''
        }
    },
    methods: {
        increment(){
            this.added += 1;
        },
        decrement(){
            this.added -= 1;
        },
        addedToCart(q: Number, item: any){
            this.text = `${q} ${item} Added to Cart`
        },
        refresh(){
            setTimeout(function() {
                location.reload()
            }, 3000)
        }
    },
    computed: {
        searchProduct(){
            const value = this.search.toLowerCase();
            let searchArray = this.productStore.productList.filter(function(p){
                return p.description.toLowerCase().indexOf(value) > -1;
            })
            if(searchArray.length > 0){
                return searchArray;
            }
            else{
                return this.productStore.productList;
            }
        }
    }
}

</script>

<style scoped>
    .v-text-field{
        width: 125px;
    }
    .Search{
        width:auto;
    }
</style>