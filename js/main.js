Vue.component('create-task', {
    template: `
    <div class="create-task">
        <h1>Добавить карточку:</h1>
        
        <label for="task-name">Название заметки</label>
        <input v-model="title" type="text">
        
        <div class="tasks-list" v-for="task in tasks">
            <div class="task">
                <input :value="task.name" @input="event => task.name = event.target.value"/>
                <button @click="deleteTask(task.id)">Удалить</button>
            </div>
        </div>

        <div>
            <button>Добавить задачу</button>
            <button @click="show">Отправить</button>
        </div>
    </div>`,
    data() {
        return {
            title: "",
            tasks: [
                { id: "0", name: "Task 0", done: false },
                { id: "1", name: "Task 1", done: false },
                { id: "2", name: "Task 2", done: false },
            ],
        };
    },
    methods: {
        deleteTask(id) {
            if (this.tasks.length === 3) {
                alert("Нельзя удалить задачу, в листе должно быть 3 задачи");
                return;
            }
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id == id) {
                    this.tasks.splice(i, 1);
                }
            }
        },
        show() {
            console.log(this.tasks);
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        deleteCart() {
            this.cart.pop();
        },
    }
})