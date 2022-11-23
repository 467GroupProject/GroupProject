<template>
    <v-container fluid class="text-center">
        <v-row>
            <v-col>
                <v-card ref="form">
                    <v-card-text></v-card-text>
                    <v-card-title>Contact Information</v-card-title>
                    <v-card-text>
                        <v-text-field ref="name"
                        v-model="name"
                        :rules="[() => !!name || 'This field is required']"
                        :error-messages="errorMessages"
                        label="Full Name"
                        placeholder="Ned Flanders"
                        required
                        ></v-text-field>
                        <v-text-field ref="address"
                        v-model="address"
                        :rules="[() => !!address || 'This field is required']"
                        label="Address"
                        placeholder="744 Evergreen Terrace"
                        required
                        ></v-text-field>
                        <v-text-field ref="city"
                        v-model="city"
                        :rules="[() => !!city || 'This field is required']"
                        label="City"
                        placeholder="Springfield"
                        required
                        ></v-text-field>
                        <v-text-field ref="state"
                        v-model="state"
                        :rules="[() => !!state || 'This field is reuqired']"
                        label="State/Province/Region"
                        placeholder="OR"
                        required
                        ></v-text-field>
                        <v-text-field ref="zip"
                        v-model="zip"
                        :rules="[() => !!zip || 'This field is required']"
                        label="ZIP/Postal Code"
                        placeholder="80085"
                        ></v-text-field>
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
                        label="MM/YY"
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
    },
    data(){
        return{
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            errorMessages: '',
            ccNumber: '',
            ccName: '',
            ccExpDate: ''
        }
    }
}

</script>