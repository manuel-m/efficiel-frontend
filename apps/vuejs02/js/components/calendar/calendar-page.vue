<template>
    <date-picker :year="year" :month="monthnum"></date-picker>
</template>

<script>
import datePickerVue from './date-picker.vue';
export default {
    components: {
        'date-picker': datePickerVue
    },
    data() {
        const _now = new Date();
        return { monthnum: _now.getMonth(), year: _now.getFullYear() };
    }
};
</script>

