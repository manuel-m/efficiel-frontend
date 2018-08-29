<template>
<div class="date-picker">
    <div class="nav">
        <div class="nav-month">{{ `${monthlabel} ${year}` }}</div>
        <div class="nav-prev">&lt;</div>
        <div class="nav-next">&gt;</div>
    </div>
    <div class="matrix">
        <!-- DLMMJVS -->
        <div class="row">
            <div v-for="(label_weekDay, wd_i) in 'DLMMJVS'" :key="wd_i" class="day">{{label_weekDay}}</div>
        </div>
        <!-- Matrix : 6 x 7 colums (weeks days) -->
        <div class="row" v-for="row_n in 6" :key="row_n">
            <div v-for="n in 7" :key="n" 
                :class="'item '+days[(n - 1)+((row_n - 1)*7)].className">
                    {{days[(n - 1)+((row_n - 1)*7)].label}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { DatePicker, DatePickerProto } from './datem.js';
export default {
    created() {
        Object.assign(this, DatePicker({ month: this.month, year: this.year }));
    },
    props: { month: Number, year: Number },
    data() {
        return DatePickerProto();
    }
};
</script>


<style scoped>
.date-picker {
    font-size: 14px;
    width: 16rem;
    user-select: none;
    border: #aaa 1px solid;
    padding: 0.3rem;
}

.nav {
    display: flex;
    align-items: center;
    height: 40px;
    padding-left: 0.6rem;
}

.nav-month {
    flex-grow: 1;
}

.nav-prev,
.nav-next {
    flex-shrink: 0;
    padding: 0.6rem;
}

.row {
    display: flex;
}

.row > * {
    width: 2rem;
    text-align: center;
    padding: 0.3rem;
}

.item.before,
.item.after {
    opacity: 0.25;
}

.day {
    opacity: 0.25;
}
</style>
