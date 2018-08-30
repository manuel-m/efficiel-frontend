<template>
<div class="date-picker">
    <div class="nav">
        <div class="nav-month">{{ `${m.monthlabel} ${m.year}` }}</div>
        <div class="nav-prev" @click.prevent="monthPrev">&lt;</div>
        <div class="nav-next" @click.prevent="monthNext">&gt;</div>
    </div>
    <div class="matrix">
        <!-- DLMMJVS -->
        <div class="row">
            <div v-for="(label_weekDay, wd_i) in 'DLMMJVS'" :key="wd_i" class="day">{{label_weekDay}}</div>
        </div>
        <!-- Matrix : 6 x 7 colums (weeks days) -->
        <div class="row" v-for="row_n in 6" :key="row_n">
            <div v-for="n in 7" :key="n" 
                :class="'item '+m.days[(n - 1)+((row_n - 1)*7)].className">
                    {{m.days[(n - 1)+((row_n - 1)*7)].label}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import datePicker from './datePicker';
export default {
    created() {
        this.m = datePicker.sync({ month: this.month, year: this.year });
    },
    data() {
        return { m: datePicker.proto() };
    },
    methods: {
        monthNext() {
            this.m = datePicker.sync(datePicker.monthNext(this.m));
        },
        monthPrev() {
            this.m = datePicker.sync(datePicker.monthPrev(this.m));
        }
    },
    props: { month: Number, year: Number }
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

.day,
.item.before,
.item.after {
    opacity: 0.25;
}
</style>
