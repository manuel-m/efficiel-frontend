<template>
<div>
    <div>Customers</div>
    <customers-list></customers-list>
</div>
</template>

<script>
import customers from './customers';
import customersList from './customers-list.vue';

export default {
    components: {
        'customers-list': customersList
    },
    beforeRouteEnter(to, from, next) {
        customers.fetch().then(next);
    }
};
</script>

