const app = Vue.createApp({
    data () {
        return {
            name: 'Ángel',
            age: '24',
            agePlus: ''
        }
    },
    methods: {
        calculateAgePlus() {
            this.agePlus = parseInt(this.age) + 5; 
            return age
        }
    }
});

app.mount('#assignment');