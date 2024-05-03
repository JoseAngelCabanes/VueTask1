const app = Vue.createApp({
    data () {
        return {
            name: 'Ángel',
            age: '24',
            agePlus: '',
            vueImage: 'https://statisticsbyjim.com/wp-content/uploads/2019/05/random_dice.png'
        }
    },
    methods: {
        calculateAgePlus() {
            this.agePlus = parseInt(this.age) + 5; 
            return this.agePlus
        },
        randomNumber() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 0;
            }  else{
                return 1
            }
        }
    }
});

app.mount('#assignment');