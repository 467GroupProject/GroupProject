<template>
    <v-container fluid class="text-center">
        <v-table>
            <tbody>
                <tr>
                    <td class="text-left">Product Number</td>
                    <td class="text-left">Description</td>
                    <td class="text-left">Price</td>
                    <td class="text-left">Weight</td>
                    <td class="text-left">Quantity</td>
                    <td class="text-left">Update Quantity</td>
                </tr>
            </tbody>
            <tbody>
                <tr v-for="(p, i) in productStore.productList"
                :key="p.number">
                    <td class="text-left">{{ p.number }}</td>
                    <td class="text-left">{{ p.description }}</td>
                    <td class="text-left">${{ p.price }}</td>
                    <td class="text-left">{{ p.weight }} lb</td>
                    <td class="text-left">{{ productStore.iventoryList[i].quantity }}</td>
                    <td class="text-left">
                        <v-text-field type="number" label="Quantity" min="0"
                        append-outer-icon="add" v-model="quantity" @click:append-outer="increment"
                        prepend-icon="remove" @click:prepend="decrement"></v-text-field>
                    </td>
                    <td class="text-left">
                        <v-btn>Update</v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
</template>

<script lang="ts">
import { useProductStore } from '@/stores/productStore';

export default{
    setup() {
        const productStore = useProductStore();
        productStore.fill();
        const quantity: number = 0;
        return { productStore, quantity };
    },
    methods: {
        increment(){
            this.quantity += 1;
        },
        decrement(){
            this.quantity -= 1;
        }
    }
}
</script>

<style scoped>
    .v-text-field{
        width: 125px
    }
</style>