<template>
    <ul>
        <li v-for="item in items" :key="item.id">{{item.last_name}} 
            <router-link :to="{path:'/customer/'+item.id}">go</router-link> 
        </li>
    </ul>
</template>


<script>
import customers from './customers';
export default {
    data() {
        return {
            items: customers.data
        };
    }
};
</script>


<style scoped>
ul {
    list-style: none;
}
</style>
