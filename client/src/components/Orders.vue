<template>
    <v-container fluid class="text-center">
        <v-text-field variant="outlined" class="Search"
        v-model="search" label="Search"></v-text-field>
    </v-container>
    
</template>

<script lang="ts">
export default{
    data(){
        return{
            search: ''
        }
    }
}
</script>
