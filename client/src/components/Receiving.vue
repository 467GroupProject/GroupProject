<template>
    <v-container fluid class="text-center">
        <v-text-field variant="outlined" class="Search"
            v-model="search" label="Search"
            ></v-text-field>
        <v-table>
            <tbody>
                <tr>
                    <td class="text-left">Product Number</td>
                    <td class="text-left">Description</td>
                    <td class="text-left">Price</td>
                    <td class="text-left">Weight</td>
                    <td class="text-left">Quantity</td>
                    <td class="text-left">Add to Inventory</td>
                    <td></td>
                </tr>
            </tbody>
            <tbody>
                <tr v-for="(p, i) in searchInventory"
                :key="p.number">
                    <td class="text-left">{{ p.number }}</td>
                    <td class="text-left">{{ p.description }}</td>
                    <td class="text-left">${{ p.price }}</td>
                    <td class="text-left">{{ p.weight }} lb</td>
                    <td class="text-left">{{ productStore.iventoryList[i].quantity }}</td>
                    <td class="text-left">
                        <v-text-field type="number" label="Add" min="0" variant="outlined"
                        append-outer-icon="add" v-model="quantity" @click:append-outer="increment"
                        prepend-icon="remove" @click:prepend="decrement" class="Quantity"></v-text-field>
                    </td>
                    <td class="text-left">
                        <v-btn @click="update(p.number,
                        (productStore.iventoryList[i].quantity + Number(quantity))); snackbar=true;
                        text = `${(productStore.iventoryList[i].quantity + Number(quantity))} ${p.description} added to Inventory`;
                        quantity=0">
                        Add</v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <v-snackbar v-model="snackbar" :multi-line="multiline" color="green">
            {{ text }}
        </v-snackbar>
    </v-container>
</template>

<script lang="ts">
import { useProductStore } from '@/stores/productStore';
import authenticationService from '@/services/authenticationService';

export default{
    setup() {
        const productStore = useProductStore();
        productStore.fill();
        const quantity: number = 0;
        return { productStore, quantity };
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
            this.quantity += 1;
        },
        decrement(){
            this.quantity -= 1;
        },
        async update(i: number, q: number){
            const response = await authenticationService.update({
                id: i,
                quantity: q
            })
        }
    },
    computed: {
        searchInventory(){
            const value = this.search.toLowerCase();
            let searchArray = this.productStore.productList.filter(function(p) {
                return p.description.toLowerCase().indexOf(value) > -1; 
            })
            if(searchArray.length > 0){
                return searchArray;
            }
            else{
                return this.productStore.productList
            }
        }
    }
}
</script>

<style scoped>
.Quantity{
    width: 125px;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05);
}
</style>