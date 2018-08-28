<template>
    <pre>{{JSON.stringify(item, undefined, 1)}} </pre>
</template>

<script>
import customers from './customers';
export default {
    beforeRouteEnter(to, from, next) {
        if (customers.done === false) {
            customers.fetch().then(next);
        } else {
            next();
        }
    },
    data() {
        return { item: customers.get(parseInt(this.id)) };
    },
    props: ['id']
};
</script>

<style>
</style>
