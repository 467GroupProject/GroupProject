<template>
    <v-container fluid class="text-center">
        <v-row>
            <v-col>
                <v-card ref="form">
                    <v-card-text></v-card-text>
                    <v-card-title>Contact Information</v-card-title>
                    <v-card-text>
                        <v-text-field ref="cust_name"
                        v-model="cust_name"
                        :rules="[() => !!cust_name || 'This field is required']"
                        label="Full Name"
                        placeholder="Ned Flanders"
                        required
                        ></v-text-field>
                        <v-text-field ref="cust_address"
                        v-model="cust_address"
                        :rules="[() => !!cust_address || 'This field is required']"
                        label="Address"
                        placeholder="744 Evergreen Terrace, Springfield OR, 58008"
                        required
                        ></v-text-field>
                        <v-text-field ref="cust_email"
                        v-model="cust_email"
                        :rules="[() => !!cust_email || 'This field is required']"
                        label="E-mail"
                        placeholder="nedflanders@leftorium.com"
                        required
                        >
                        </v-text-field>
                    </v-card-text>
                    <v-card-title>Payment Information</v-card-title>
                    <v-card-text></v-card-text>
                        <v-text-field
                        label="Credit Card Number"
                        v-model="ccNumber"
                        ></v-text-field> 
                        <v-text-field
                        label="Full Name"
                        v-model="ccName"
                        ></v-text-field>
                        <v-text-field
                        label="MM/YYYY"
                        v-model="ccExpDate"
                        ></v-text-field>
                    <v-card-text></v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-text></v-card-text>
                    <v-card-title>Order Summary</v-card-title>
                    <v-row>
                        <v-col>
                            <v-list class="text-right">Cart Subtotal: </v-list>
                            <v-list class="text-right">Shipping: </v-list>
                            <v-list class="text-right">Total Weight: </v-list>
                            <v-list class="text-right">Cart Total:</v-list>
                        </v-col>
                        <v-col>
                            <v-list class="text-left">${{ cartStore.total }}</v-list>
                            <v-list class="text-left">${{ cartStore.shipping }}</v-list>
                            <v-list class="text-left">{{ cartStore.weight }} lb(s)</v-list>
                            <v-list class="text-left">${{ cartStore.grandTotal }}</v-list>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-dialog v-model="dialog" persistent>
                            <v-card>
                                <v-card-title>
                                    {{ text }}
                                </v-card-title>
                                <v-card-text></v-card-text>
                                <v-card-text>
                                    {{ subtext }}
                                </v-card-text>
                                <v-card-text>
                                    {{ subtitle }}
                                </v-card-text>
                                <v-card-text>Thank You For Shopping With Us</v-card-text>
                                <v-card-text></v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <RouterLink to="/" class="text-decoration-none">
                                        <v-btn @click="dialog = false; clear()">Home</v-btn>
                                    </RouterLink>
                                    <RouterLink to="/products" class="text-decoration-none">
                                        <v-btn @click="dialog = false; clear()">Back to Products</v-btn>
                                    </RouterLink>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                <v-card-text></v-card-text>
                <v-btn variant="outlined"
                @click="submit()"
                >Submit</v-btn>
                <v-card-text></v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';
import authenticationService from '@/services/authenticationService';
import axios from 'axios';

export default{
    setup(){
        const productStore = useProductStore();
        productStore.fill();
        const cartStore = useCartStore();

        return { productStore, cartStore };
    },
    data(){
        return{
            cust_name: '',
            cust_address: '',
            cust_email: '',
            ccNumber: '',
            ccName: '',
            ccExpDate: '',
            dialog: false,
            text: '',
            subtext: '',
            subtitle: ''
        }
    },
    methods: {
        async submit() {
            const transaction = {
                vendor: "Hooli",
                trans: (Math.random() * 1000).toFixed(0) + "-987654321-" + (Math.random() * 1000).toFixed(0),
                cc: this.ccNumber,
                name: this.ccName,
                exp: this.ccExpDate,
                amount: this.cartStore.grandTotal
            }
            const blitz = axios.post('http://blitz.cs.niu.edu/creditcard', transaction)
                .then(async (response) => {
                    if(response.status == 400)
                    {
                        alert('Credit card denied')   
                    }
                    if(response.status == 200)
                    {
                        const orderResponse = await authenticationService.orders({
                            customer_name: this.cust_name,
                            customer_address: this.cust_address,
                            customer_email: this.cust_email,
                            total_amount: this.cartStore.grandTotal,
                            total_weight: this.cartStore.weight,
                            shopping_cart: this.cartStore.cart
                        })
                            .then(async (response) => {
                                this.text = `Confirmation: Order number ${response.data.id} created`

                            })
                    }
                    this.subtext = `Amount: $${response.data.amount}, Auth: ${response.data.authorization}`
                    this.subtitle = `For: ${this.cust_name}, at ${this.cust_email}`
                })
                this.dialog=true;
        },
        clear(){
            this.cartStore.clearCart();
        }
    }
}

</script>
