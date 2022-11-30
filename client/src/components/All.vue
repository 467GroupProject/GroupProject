<template>
    <v-container fluid class="text-center">
        <v-card>
            <v-card-title>List of All Orders</v-card-title>
            <v-table>
                <tbody>
                    <tr>
                        <td>Order Number</td>
                        <td>Total Amount</td>
                        <td>Total Weight</td>
                        <td>Purchase Date</td>
                        <td>Order Status</td>
                        <td></td>
                    </tr>
                    <tr v-for="o in orderStore.allOrders" key="o.id">
                        <td>{{ o.id }}</td>
                        <td>${{ o.total_amount }}</td>
                        <td>{{ o.total_weight }} lb(s)</td>
                        <td>{{ o.date }}</td>
                        <td>{{ o.status }}</td>
                        <td><v-btn @click="onClick(o)">Details</v-btn></td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
        <v-dialog v-model="dialog" width="50%">
            <v-card>
                <v-container class="d-flex justify-space-around">
                    <v-card style="padding: 2%" width="90%">
                        <v-card-title class="text-center"><b><u>Order {{currentOrder.id}} Details</u></b></v-card-title>
                        <text style="padding: 25px"><b>Name:</b> {{currentOrder.customer_name}}</text><br>
                        <text style="padding: 25px"><b>Email:</b> {{currentOrder.customer_email}}</text><br>
                        <text style="padding: 25px"><b>Address:</b> {{currentOrder.customer_address}}</text><br>
                        <text style="padding: 25px"><b>Status:</b> {{currentOrder.status}}</text><br>
                        <text style="padding: 25px"><b>Date of purchase:</b> {{currentOrder.date}}</text><br>
                    </v-card>
                </v-container>
                <v-container class="d-flex justify-space-around">
                    <v-card style="padding: 2%" width="90%">
                        <text style="padding: 25px"><b><u>Payment Details</u></b></text><br/><br/>
                        <text style="padding: 25px">Subtotal: ${{(currentOrder.total_amount - curr_shipping_brack.cost).toFixed(2)}}</text><br/>
                        <text style="padding: 25px">Shipping: ${{(curr_shipping_brack.cost * 1).toFixed(2)}}</text><br/>
                        <text style="padding: 25px"><i>Order weight >= {{curr_shipping_brack.weight}}lbs</i></text><br/>
                        <text style="padding: 25px"><b>Total: ${{(currentOrder.total_amount * 1).toFixed(2)}}</b></text><br/>
                    </v-card>
                </v-container>
                <label v-for="orderProduct in orderProd">
                    <label v-for="product in products">
                        <label v-if="orderProduct.order_id == currentOrder.id">
                            <v-container v-if="product.number == orderProduct.product_id" class="d-flex justify-space-around">
                                <v-card style="padding: 2%" width="90%">
                                    <text class="text-left" style="padding: 25px"><b>Product: </b>{{ product.description }}</text><br>
                                    <text class="text-center" style="padding: 25px"><b>Quantity: </b>{{orderProduct.quantity}}</text><br>
                                    <text class="text-center" style="padding: 25px"><b>Weight: </b>{{(orderProduct.quantity * product.weight).toFixed(2)}}lb indv.</text><br>
                                    <text class="text-center" style="padding: 25px"><b>Cost: </b>${{(orderProduct.quantity * product.price).toFixed(2)}}</text>
                                    <v-img class="right" :src="product.pictureURL" max-height="100px"></v-img>
                                </v-card>
                            </v-container>
                        </label>
                    </label>
                </label>

                <v-container class="d-flex justify-space-around">
                    <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false">Close</v-btn>
                    </v-card-actions>
                </v-container>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script lang="ts">
import { useOrderStore } from '@/stores/orderStore'
import authenticationServie from '@/services/authenticationService'


export default{
    setup() {
        const orderStore = useOrderStore();
        orderStore.fill();

        return { orderStore };
    },
    methods: {
        async onClick(order){
            this.dialog = true;
            this.currentOrder = order;
            this.curr_shipping_brack = null;

            //find shipping brack for clicked order
            //cant assume that weight brackets will iterate in increasing order. 
            //Looking for maxiumum cost applicable where order weight > bracket minimum
            for (let brack of this.weights){
                //check every bracket

                if (parseFloat(this.currentOrder.total_weight) >= parseFloat(brack.weight)){
                    //thus, we know that order weight falls within bracket minimum

                    if( this.curr_shipping_brack == null){
                        //if no brack yet, take the first one it qualifies for,
                        this.curr_shipping_brack = brack;

                    }else{ //else, only replace curr_shipping_brack...
                        if( parseFloat(brack.cost) >= parseFloat(this.curr_shipping_brack.cost)){
                            // if brack.cost >= curr_shipping_brack.cost
                            this.curr_shipping_brack = brack;
                        }
                    }
                }
            }
        }
    },
    data() {
        return{
            orderProd: [],
            products: [],
            weights: [],
            curr_shipping_brack: null,

            productsFromOrder: [],

            currentOrder: null,
            dialog: false,
        }
    },
    mounted() {
        authenticationServie.getOrderProduct()
            .then(response => (this.orderProd = response.data))
            .catch(error => console.log(error))

        authenticationServie.product()
            .then(response => (this.products = response.data))
            .catch(error => console.log(error))

        authenticationServie.weights()
            .then(response => (this.weights = response.data))
            .catch(error => console.log(error))
    }
}

</script>

<style scoped>
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05)
}
</style>

