Vue.component('create-task', {
    template: `
    <div class="create-task">
        <h1>Добавить карточку:</h1>
        
        <label for="task-name">Название заметки</label>
        <input v-model="title" type="text">
        
        <button type="">Отправить</button>
        
        <div class="tasks-list" v-for="task in tasks">
            <div class="task">
                <input value="{{task.name}}"/>
                <button @click="deleteTask(task.id)">-</button>
            </div>
        </div>
    </div>`,
    data() {
        return {
            title: "",
            tasks: [
                { id: "0", name: "Task 0" },
                { id: "1", name: "Task 1" },
                { id: "2", name: "Task 2" },
            ],
        };
    },
    methods: {
        addTackCard() {
            const title = this.title;
            const description = this.description;
            let notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push({ title, description });
            localStorage.setItem('notes', JSON.stringify(notes));
            window.location.reload();
            this.title = "";
            this.description = "";
            this.notes = notes;
        },
        deleteTask (id) {
            console.log("Delete");
            console.log(this.tasks);
            console.log(id);
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