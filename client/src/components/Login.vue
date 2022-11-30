<template>
    <v-card class="mx-auto px-6 py-8" max-width="344">

            <v-text-field
            v-model="email"
            class="mb-2"
            label="Email"
            ></v-text-field>

            <v-text-field type="password"
            v-model="password"
            label="Password"
            placeholder="Enter your password"
            ></v-text-field>

            <br>

            <v-btn
            block
            color="success"
            size="large"
            variant="elevated"
            @click="onClick()"
            >
            Log In
            </v-btn>
    </v-card>
  </template>
<script lang="ts">
import authenticationServie from '@/services/authenticationService';
export default{
    methods: {
        onClick(){

            this.email = this.email.toLowerCase()
            //console.log("button pressed... email: " + this.email + " password: " + this.password)
            for( let user of this.user_list){
                //console.log("user to check against: " + user.email + " " + user.password + " " + user.status)
                if( this.email === user.email && this.password === user.password){
                    //console.log('match found')
                    if(user.status.replace("\r", "") === "admin"){
                        //console.log("admin detected");
                        this.$router.push("/admin")
                    }else if (user.status.replace("\r", "") === "worker"){
                        //console.log("worker detected");
                        this.$router.push("/warehouse")
                    }
                }
            }

        }
    },
    data(){
        return{
            form: '',
            email: '',
            password: '',
            user_list: [],
        }
    },
    mounted(){
        authenticationServie.users()
            .then(response => (this.user_list = response.data))
            .catch(error => console.log(error))
    }
}
</script>