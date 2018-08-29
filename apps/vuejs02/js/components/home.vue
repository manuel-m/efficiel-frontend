<template>
<div>
    <div>home</div>
    <func-compo></func-compo>
    <ul>
        <li>lala</li>
    </ul>
</div>
</template>


<script>
import funcCompo from './func-compo.vue';
export default {
    components: {
        'func-compo': funcCompo
    }
};
</script>
