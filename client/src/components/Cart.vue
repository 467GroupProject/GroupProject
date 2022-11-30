<template>
    <v-container fluid class="text-center">
        <v-row>
            <v-col>
                <v-card elevation="10">
                    <v-card-text></v-card-text>
                    <v-card-title>Shopping Cart</v-card-title>
                    <v-table>
                        <tbody>
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
                            <tr></tr>
                        </tbody>
                        <tbody height="300px">
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
                                    <v-text-field type="number" label="Update" min="0" variant="outlined"
                                    append-outer-icon="add" v-model="updated" @click:append-outer="increment"
                                    prepend-icon="remove" @click:prepend="decrement" class="Quantity"></v-text-field>
                                </td>
                                <td>
                                    <v-btn variant="outlined" @click="cartStore.updateCart(
                                        {id: c.id, quantity: Number(updated)}
                                    );snackbar=true; text=`Updated ${updated} ${productStore.productList[c.id].description}`
                                    ; refresh()"
                                    >Update</v-btn>
                                </td>
                                <td></td>
                            </tr>
                            <v-card-text></v-card-text>
                        </tbody>
                    </v-table>
                    <v-spacer></v-spacer>
                    <h2 v-if="cartStore.cart.length == 0">Cart is empty, check out our Products page!</h2>
                    <v-spacer></v-spacer>
                    <v-btn v-if="cartStore.cart.length > 0" variant="outlined" @click="cartStore.clearCart(); snackbar=true; text=`Cart Cleared`">
                    <font-awesome-icon icon="fa-solid fa-trash" />&nbsp;Clear Cart</v-btn>
                    <v-card-text></v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
            <v-col>
                <v-card elevation="10" v-if="cartStore.cart.length > 0">
                    <v-card-text></v-card-text>
                    <v-card-title>Total</v-card-title>
                    <v-row>
                        <v-col>
                            <v-list class="text-right">Cart Subtotal:</v-list>
                            <v-list class="text-right">Shipping: </v-list>
                            <v-list class="text-right">Total Weight: </v-list>
                            <v-list class="text-right">Cart Total:</v-list>
                        </v-col>
                        <v-col>
                            <v-list class="text-left">${{ cartStore.total }}</v-list>
                            <v-list class="text-left">${{ cartStore.shipping }} </v-list>
                            <v-list class="text-left">{{ cartStore.weight }} lb(s)</v-list>
                            <v-list class="text-left">${{ cartStore.grandTotal }}</v-list>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="text-right" v-if="cartStore.cart.length > 0">
                    <RouterLink to="/checkout" class="text-decoration-none">
                    <v-btn class="mx-10" 
                    elevation="2" x-large rounded>
                    <font-awesome-icon icon="fa-solid fa-cash-register" />
                    &nbsp;Checkout</v-btn>
                    </RouterLink>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar v-model="snackbar" color="green">
            {{ text }}
        </v-snackbar>
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

        const updated: number = 0;

        return { productStore, cartStore, updated };
    },
    data() {
        return{
            snackbar: false,
            text: ''
        }
    },
    methods: {
        increment(){
            this.updated += 1;
        },
        decrement(){
            this.updated -= 1;
        },
        refresh(){
            setTimeout(function(){
                location.reload()
            }, 3000)
        }
    }
}

</script>

<style scoped>
.Quantity{
    width: 125px;
}
</style>
