<template>
    <v-container fluid class="text-center">
        <v-text-field variant="outlined" class="Search"
            v-model="search" label="Search"
            ></v-text-field>
        <v-table>
        <v-row>
            <v-col v-for="(p, i) in searchProduct"
            :key="i" cols="4">
                <v-card class="mx-auto" height="400px" variant="outlined">
                <v-img height="100px" :src="p.pictureURL"/>
                <v-card-text class="text-h6 font-weight-black">{{ p.description }}</v-card-text>
                <v-card-text>{{ productStore.iventoryList[i].quantity }} available</v-card-text>
                <v-card-text> <b>Price:</b> ${{ p.price }}</v-card-text>
                <v-card-text><b>Running total: </b>${{ p.price * data[i]}}</v-card-text>
                <section v-if="productStore.iventoryList[i].quantity == 0">
                    <v-badge content="Out of Stock" inline></v-badge>
                </section>
                <section v-else>
                    <span>
                    <td>
                        <v-container class="d-flex justify-space-around">
                            <v-text-field 
                                label="Quantity"
                                v-model = "data[i]"
                                append-inner-icon="mdi-minus"
                                prepend-inner-icon="mdi-plus"
                                @click:append-inner="decrement(i)" 
                                @click:prepend-inner="increment(i)"
                                @change="checkValue(i)"
                                variant="outlined">
                            </v-text-field>
                        <v-btn 
                            variant="outlined" 
                            @click="addToCart(i)"><font-awesome-icon icon="fa-sold fa-cart-plus" />
                            &nbsp;&nbsp;Add to Cart</v-btn>
                        </v-container>
                    </td>
                    </span>    
                </section>
                </v-card>
            </v-col>
        </v-row>
        </v-table>
        <v-snackbar v-model="snackbar" :multi-line="multiline" color="green">
            {{ text }}
        </v-snackbar>
        <v-snackbar v-model="errorbar" color="red">
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
        return { productStore, cartStore, added}
    },
    data(){
        return{
            search: '',
            snackbar: false,
            errorbar: false,
            multiline: true,
            text: '',
            //data: [this.productStore().iventoryList.length],
            data: [],
        }
    },
    methods: {
        initData(){
            for (let i = 0; i < this.productStore.iventoryList.length; i++)
            {
                this.data[i] = 0;
            }
        },
        checkValue(i){
            if (this.data[i] > this.productStore.iventoryList[i].quantity || this.data[i] < 0)
            {
                this.data[i] = 0;
            }
        },
        increment(i){
            if (this.data[i] < this.productStore.iventoryList[i].quantity)
            {
                console.log("Incrementing old(" + this.data[i] + ") to -> (" + (this.data[i] + 1) + ")");
                this.data[i] += 1;
            }
        },
        decrement(i){
            if (this.data[i] != 0)
            {
                console.log("Decrementing old(" + this.data[i] + ") to -> (" + (this.data[i] - 1) +")");
                this.data[i] -= 1;
            }
        },
        addToCart(i){
            if (this.data[i] != 0 && this.data[i] <= this.productStore.iventoryList[i].quantity)
            {
                this.cartStore.addToCart(
                    {id: i, quantity: this.data[i]},
                );
                this.snackbar= true;
                this.addedToCart(Number(this.data[i]), this.productStore.productList[i].description); 
            }
            else
            {
                this.text = 'ERROR: cannot add invalid quantity to cart!'
                this.errorbar = true;
            }
        },
        addedToCart(q: Number, item: any){
            this.text = `${q} ${item} Added to Cart`
        }
    },
    beforeMount(){
        this.initData();
    },
    computed: {
        getCart(i = 0){
            if (typeof this.cartStore.cart[i] == 'undefined') {
                this.cartStore.addToCart({id: i, quantity: 0 });
            }
            return this.cartStore.cart[i];
        },
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
