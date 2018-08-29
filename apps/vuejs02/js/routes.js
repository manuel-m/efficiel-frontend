import calendar from './components/calendar/calendar-page.vue';
import home from './components/home.vue';
import customersPage from './components/customers/customers.page.vue';
import customerPage from './components/customers/customer.page.vue';

export default [
    { path: '/home', component: home },
    { path: '/calendar', component: calendar },
    { path: '/customers', component: customersPage },
    { path: '/customer/:id', component: customerPage, props: true }
];
