<template>
    <v-container fluid class="text-center">
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Getting Your Order</v-card-title>
                    <v-card-text>
                        <v-text-field
                        label="First Name"
                        outlined></v-text-field>
                        <v-text-field
                        label="Last Name"
                        outlined></v-text-field>
                        <v-text-field
                        label="Address"
                        outlined></v-text-field>
                        <v-text-field
                        label="City"
                        outlined></v-text-field>
                    </v-card-text>
                    <v-card-title>Contact Information</v-card-title>   
                    <v-card-text>
                        <v-text-field
                        label="email"
                        outlined></v-text-field>
                    </v-card-text>             
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title>Payment</v-card-title>
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