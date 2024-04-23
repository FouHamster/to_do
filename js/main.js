let colum1 = new Vue({
    el: '#colum1',
    data: {
        currentTask: '',
        editValue: '',
        tasks: [
            {
                text: 'Subscribe to channel',
                isCompleted: false,
                isEditing: false
            },
            {
                text: 'Like the video',
                isCompleted: false,
                isEditing: false
            },
            {
                text: 'Learn Vue.js',
                isCompleted: true,
                isEditing: false
            }
        ],
        currentCard: '',
        cards: [
            {
              text: "New card",
            },
        ],
    },
    methods: {
        addTask: function() {
            this.tasks.push({
                text: this.currentTask,
                isCompleted: false,
            });
            this.currentTask = '';
        },
        removeTask: function(taskText) {
            this.tasks = this.tasks.filter(task => {
                return task.text !== taskText;
            })
        },
        changeEditing: function(taskText) {
            this.editValue = taskText;
            this.tasks = this.tasks.map(task => {
                if(task.text === taskText) {
                    task.isEditing = !task.isEditing;
                }
                return task;
            })
        },
        editTask: function(taskText) {
            this.tasks = this.tasks.map(task => {
                if(task.text === taskText) {
                    task.isEditing = !task.isEditing;
                    task.text = this.editValue;
                }
                return task;
            })
        },
        addCard: function() {
            this.cards.push({
                text: this.currentCard,
            });
            this.currentCard = '';
        },
    },
    computed: {

    },
})

let colum2 = new Vue({
    el: '#colum2',
    data: {
    },
    methods: {

    },
    computed: {

    },
})

let colum3 = new Vue({
    el: '#colum3',
    data: {
    },
    methods: {

    },
    computed: {

    },
})