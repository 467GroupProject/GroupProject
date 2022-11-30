<template>


<!--<v-card>
    <v-card-title>orderProd</v-card-title>
    {{orderProd}}
</v-card>
<br/>
<br/>
<br/>
<v-card>
    <v-card-title>products</v-card-title>
    {{products}}
</v-card>
<br/>
<br/>
<br/>
<v-card>
    <v-card-title>current order</v-card-title>
    {{curr_order}}
</v-card>

<br/>
<br/>
<br/>


<v-card>
    <v-card-title>prods for specific order example</v-card-title>
    <v-div v-for="prod in orderProd">
        <v-card-text v-if="(prod.order_id == 16)">
            {{prod}}
        </v-card-text>
    </v-div>
</v-card>
-->

<!--
<v-card>
    <v-card-title>weights table</v-card-title>
    {{weights}}
</v-card>
-->

    <v-container fluid class="text-center">
        <v-card>
            <v-card-title>List of Open Orders</v-card-title>
            <v-table>
                <tbody>
                    <tr>
                        <td>Order Number</td>
                        <td>Total Amount</td>
                        <td>Total Weight</td>
                        <td></td>
                    </tr>
                    <tr v-for="o in orderStore.openOrders" key="o.id">
                        <td>{{ o.id }}</td>
                        <td>${{ o.total_amount }}</td>
                        <td>{{ o.total_weight }} lb(s)</td>
                        <td><v-btn @click="onClick(o)">Complete Order</v-btn></td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>


        <v-dialog v-model="close_confirmation_popup" width="35%">
                <v-card>
                    <v-container fluid>
                        <h1 class="text-center">
                        Filling Order #{{curr_order.id}}
                        </h1>

                        <br/>

                        <div>

                            <div>
                                    <v-card>
                                        <v-card-title class="text-left"><b><u>Packing List</u></b></v-card-title>

                                            <label v-for="product in orderProd">
                                                <label v-if="product.order_id == curr_order.id">

                                                    <label v-for="item in products">
                                                        <label v-if="(item.number == product.product_id)">

                                                            <v-container class="d-flex my-n3">

                                                                <v-card-text class="mr-n7">
                                                                    #{{product.product_id}} - {{item.description}} x {{product.quantity}}
                                                                </v-card-text>

                                                                <v-img class="ml-n7" :src="item.pictureURL" height="100px"/>

                                                            </v-container>
                                                            

                                                        </label>

                                                    </label>
                                                    
                                                </label>
                                            </label>

                                    </v-card>
                            </div>
                            <br/><br/><br/>
                            <div>

                                    <v-card>
                                        <v-card-title class="text-left"><b><u>Invoice:</u></b> </v-card-title>
                                    
                                            <label v-for="product in orderProd">
                                                    <label v-if="product.order_id == curr_order.id">
                                                        <label v-for="item in products">

                                                            <v-container v-if="(item.number == product.product_id)" class="d-flex justify-space-between align-center mt-n6">

                                                                <text>{{item.description}} -- ({{product.quantity}} x ${{item.price.toFixed(2)}}):</text>
                                                                <text>${{(Math.floor(((item.price * product.quantity) * 100))/100.00).toFixed(2)}}</text>
                                                                
                                                            </v-container>
                                                        </label>
                                                    </label>
                                            </label>

                                    </v-card>
                                    <v-card cass="my-1">
                                                <v-card-text class="mb-n5">Subtotal: ${{(curr_order.total_amount - curr_shipping_brack.cost).toFixed(2)}}</v-card-text>
                                                <v-card-text class="mb-n8">Shipping: ${{(curr_shipping_brack.cost * 1).toFixed(2)}}</v-card-text>
                                                <v-card-text class="mb-n3"><i>Order weight >= {{curr_shipping_brack.weight}}lbs</i></v-card-text>
                                                <v-card-text class="mb-n5"><b>Total: ${{(curr_order.total_amount * 1).toFixed(2)}}</b></v-card-text>
                                                <br/>
                                    </v-card>
                            </div>
                            <br/><br/><br/>
                            <div>
                                        <v-card>
                                            <v-card-title><b><u>Shipping Label:</u></b></v-card-title>

                                            <v-container class="d-flex">
                                                <p class="text-sm-left">
                                                    {{curr_order.customer_name}}<br/>
                                                    {{curr_order.customer_address}}<br/>
                                                    <br/>
                                                    Confirmation email will be sent to: {{curr_order.customer_email}}
                                                </p>
                                            </v-container>
                                        </v-card>
                            </div>
                        </div>

                        <v-card-actions>
                            <v-btn width="50%" color="green"  @click="close_order(curr_order)"> Confirm & Close </v-btn>
                            <v-btn width="50%" color="red"  @click="close_confirmation_popup = false">Cancel</v-btn>
                        </v-card-actions>
                    </v-container>

                    
                </v-card>

        </v-dialog>
        
    </v-container>


    
    
</template>

<script lang="ts">
import { useOrderStore } from '@/stores/orderStore';
import authenticationServie from '@/services/authenticationService';
export default{
    setup() {
        const orderStore = useOrderStore();
        orderStore.fill();

        return { orderStore };
    },
    methods: {
        onClick(order){
            
            this.curr_order = order;
            this.curr_shipping_brack = null;

            //find shipping brack for clicked order
            //cant assume that weight brackets will iterate in increasing order. 
            //Looking for maxiumum cost applicable where order weight > bracket minimum
            for (let brack of this.weights){
                //check every bracket

                if (parseFloat(this.curr_order.total_weight) >= parseFloat(brack.weight)){
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

            this.close_confirmation_popup = true;

        },
        close_order(order){

            for (let prod of this.orderProd){
                if (prod.order_id == order.id ){
                    for (let inv of this.inventory_list){
                        if (inv.id == prod.product_id){
                                authenticationServie.update({ id: prod.product_id, quantity: (inv.quantity - prod.quantity)})
                                    .then()
                                    .catch(error => console.log(error))
                        }
                    }
                }
                    
            }


            authenticationServie.completeOrder({
                    id: order.id,
                    status: 'closed'
                })
            
            this.close_confirmation_popup = false;
            window.location.reload(false);
            
        }
    },
    data() {
        return{
            orderProd: [],
            products: [],
            inventory_list: [],
            weights: [],
            close_confirmation_popup: false,
            test_dialog2: false,
            curr_order: null,
            curr_shipping_brack: null,
        }
    },
    mounted() {
        authenticationServie.getOrderProduct()
            .then(response => (this.orderProd = response.data))
            .catch(error => console.log(error))

        authenticationServie.product()
            .then(response => (this.products = response.data))
            .catch(error => console.log(error))
        
        authenticationServie.inventory()
            .then(response => (this.inventory_list = response.data))
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