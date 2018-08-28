import home from './components/home.vue';
import customersPage from './components/customers/customers.page.vue';
import customerPage from './components/customers/customer.page.vue';

export default [
    { path: '/home', component: home },
    { path: '/customers', component: customersPage },
    { path: '/customer/:id', component: customerPage, props: true }
];
