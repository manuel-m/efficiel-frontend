const store = {
    tasks: []
};

Vue.component('task-item', {
    template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
    template:
        '<ul><task-item v-for="task in tasks">{{task.desc}}</task-item></ul>',
    data() {
        return {
            tasks: store.tasks
        };
    }
});

const app = new Vue({
    el: '#root',
    computed: {
        incompletedTasks() {
            return this.tasks.filter(t_ => t_.completed === false);
        }
    },
    data: {
        buttonTitle: 'Js title',
        colorClass: 'color-red',
        newTask: '',
        tasks: store.tasks
    },
    methods: {
        addTask() {
            this.tasks.push({ completed: false, desc: this.newTask });
            this.newTask = '';
        },
        completeTask(index_) {
            this.tasks[index_].completed = true;
        }
    }
});
