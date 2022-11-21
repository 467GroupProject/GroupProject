<template>
    <v-container fluid class="text-center">
        <v-row>
            <v-col>
                <v-card elevation="10">
                    <v-card-title>Shopping Cart</v-card-title>
                    <v-table>
                        <thead>
                            <tr>
                                <td class="text-left"></td>
                                <td class="text-left"
                                >Description</td>
                                <td class="text-left"
                                >Price</td>
                                <td class="text-left"
                                >Quantity</td>
                                <td class="text-left"
                                >Weight</td>
                                <td class="text-left"
                                >Amount</td>
                                <td></td>
                            </tr>
                        </thead>
                        <thead height="300px">
                            <tr v-for="c in cartStore.cart" :key="c.id">
                                <td class="text-left">
                                    <img :src="productStore.productList[c.id].pictureURL" />
                                </td>
                                <td class="text-left">
                                    {{ productStore.productList[c.id].description }}
                                </td>
                                <td class="text-left">
                                    ${{ productStore.productList[c.id].price }}
                                </td>
                                <td class="text-left">
                                    {{ c.quantity }}
                                </td>
                                <td class="text-left">
                                    {{ productStore.productList[c.id].weight }} lb
                                </td>
                                <td class="text-left">
                                    ${{ productStore.productList[c.id].price * c.quantity }}
                                </td>
                                <td>
                                    <v-btn>Remove</v-btn>
                                </td>
                            </tr>
                        </thead>
                    </v-table>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
            <v-col>
                <v-card elevation="10">
                    <v-card-title>Total</v-card-title>
                    <v-row>
                        <v-col>
                            <v-list class="text-right">Cart Subtotal:</v-list>
                            <v-list class="text-right">Shipping: </v-list>
                            <v-list class="text-right">Taxes: </v-list>
                            <v-list class="text-right">Total Weight: </v-list>
                            <v-list class="text-right">Cart Total:</v-list>
                        </v-col>
                        <v-col>
                            <v-list class="text-left">${{ cartStore.total }}</v-list>
                            <v-list class="text-left">To be determined</v-list>
                            <v-list class="text-left">${{ cartStore.taxes }}</v-list>
                            <v-list class="text-left">{{ cartStore.weight }} lb(s)</v-list>
                            <v-list class="text-left">${{ cartStore.grandTotal }}</v-list>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="text-right">
                    <RouterLink to="/checkout" class="text-decoration-none">
                    <v-btn class="mx-10" 
                    elevation="2" x-large rounded>
                    <font-awesome-icon icon="fa-solid fa-cash-register" />
                    &nbsp;Checkout</v-btn>
                    </RouterLink>
                    <v-card-text></v-card-text>
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
        const productStore = useProductStore();
        productStore.fill();
        const cartStore = useCartStore();

        return { productStore, cartStore };
    }
}

</script>