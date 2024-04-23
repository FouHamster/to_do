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
                    <div class="card" v-for="card in cards" v-if="card.column == 0">
                        <p>Название: {{card.title}}</p>
                        <div class="tasks-list" v-for="task in card.tasks">
                            <div class="task" @click="finishTask(card.id, task.id, task)">
                                <p :class="{'strike': task.done }">{{task.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="colum">
                    <div class="card" v-for="card in cards" v-if="card.column == 1">
                        <p>Название: {{card.title}}</p>
                        <div class="tasks-list" v-for="task in card.tasks">
                            <div class="task" @click="finishTask(card.id, task.id, task)">
                                <p :class="{'strike': task.done }">{{task.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="colum">
                    <div class="card" v-for="card in cards" v-if="card.column == 2">
                        <p>Название: {{card.title}}</p>
                        <div class="tasks-list" v-for="task in card.tasks">
                            <div class="task" @click="finishTask(card.id, task.id, task)">
                                <p :class="{'strike': task.done }">{{task.name}}</p>
                            </div>
                        </div>
                    </div>
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
                tasks: this.tasks,
                column: 0
            };

            let firstColumnCards = 0;
            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i].column == 0) {
                    firstColumnCards++;
                }
            }

            if (firstColumnCards == 3) {
                alert("В первой колонке максимальное количество карточек");
                return;
            }

            // if (firstColumnCards == 3 && secondColumnCards == 5) {
            //     alert("5 во второй 3 в первой")
            //     for (let i = 0; i < this.cards.length; i++) {
            //         if (this.cards[i].column == 0) {
            //             // блок
            //         }
            //     }
            // }

            this.cards.push(cardItem);

            // занулить данные формы
            this.title = "";
            this.tasks = [
                { id: "0", name: "Task 0", done: false },
                { id: "1", name: "Task 1", done: false },
                { id: "2", name: "Task 2", done: false },
            ];
        },
        finishTask(cardId, taskId, task) {
            let doneTasks = 0;
            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i].id == cardId) {
                    for (let j = 0; j < this.cards[i].tasks.length; j++) {
                        if (this.cards[i].tasks[j].id == taskId) {
                            this.cards[i].tasks[j].done = true;
                            task.done = true;
                        }
                        if (this.cards[i].tasks[j].done) {
                            doneTasks++;
                        }
                    }

                    // блокируем количество карточек во второй колонке
                    // let halfDoneTasks = doneTasks / this.cards[i].tasks.length;
                    // if (halfDoneTasks >= 0.5) {
                    //     this.cards[i].column = 1;
                        
                    //     let secondColumnCards = 0;
                    //     for (let i = 0; i < this.cards.length; i++) {
                    //         if (this.cards[i].column == 1) {
                    //             secondColumnCards++;
                    //         }
                    //     }
                    // }
                }
            }
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