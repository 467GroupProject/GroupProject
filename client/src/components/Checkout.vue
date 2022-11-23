<template>
    <v-container fluid class="text-center">
        <v-row>
            <v-col>
                <v-card>
                    <v-card-text></v-card-text>
                    <v-card-title>Contact Information</v-card-title>
                    <v-card-text>
                        <v-text-field
                        label="First Name"
                        ></v-text-field>
                        <v-text-field
                        label="Last Name"
                        ></v-text-field>
                        <v-text-field
                        label="Address"
                        ></v-text-field>
                        <v-text-field
                        label="City"
                        outlined></v-text-field>
                        <v-text-field
                        label="email"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-title>Payment Information</v-card-title>
                    <v-card-text></v-card-text>
                        <v-text-field
                        label="Credit Card Number"
                        ></v-text-field> 
                        <v-text-field
                        label="Full Name"
                        ></v-text-field>
                        <v-text-field
                        label="MM/YY"
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
                            <v-list class="text-left">{{ cartStore.weight }}</v-list>
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
            states: [
            'Alabama', 'Alaska', 'American Samoa', 'Arizona',
            'Arkansas', 'California', 'Colorado', 'Connecticut',
            'Delaware', 'District of Columbia', 'Federated States of Micronesia',
            'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
            'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada',
            'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
            'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
            'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
            'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
            'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
            ]
        }
    }
}

</script>