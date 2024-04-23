Vue.component('create-card', {
    template: `
    <div>
        <div class="create-card">
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
                <button @click="addTask">Добавить задачу</button>
                <button @click="addCard">Добавить карточку в таблицу</button>
            </div>
        </div>
        <div class="colums">
                <div class="colum">
                    <p>ffjdhfjkdfjgsdhfdsf</p>
                </div>
                <div class="colum">
                <p>ffjdhfjkdfjgsdhfdsf3</p>
                </div>
                <div class="colum">
                <p>ffjdhfjkdfjgsdhfdsf2</p>
                </div>
        </div>
    </div>
    `,

    data() {
        return {
            title: "",
            tasks: [
                { id: "0", name: "Task 0", done: false },
                { id: "1", name: "Task 1", done: false },
                { id: "2", name: "Task 2", done: false },
            ],
            cards: [],
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
        addTask() {
            if (this.tasks.length > 4) {
                alert("Нельзя добавить больше 5 задач в одну карточку");
                return;
            }

            this.tasks.push({
                id: this.tasks.length + 1,
                name: "Описание задачи",
                done: false
            });
        },
        addCard() {
            let cardItem = {
                id: this.cards.length + 1,
                title: this.title,
                tasks: this.tasks
            };

            this.cards.push(cardItem);
            console.log(this.cards);

            // занулить данные формы
            this.title = "";
            this.tasks = [
                { id: "0", name: "Task 0", done: false },
                { id: "1", name: "Task 1", done: false },
                { id: "2", name: "Task 2", done: false },
            ];
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