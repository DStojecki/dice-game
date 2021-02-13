<template>
    <div class="wrapper">
    <div class="displayer">
        <img v-if="!isGameStarted" :src="'/img/' + randomNumber + '.png'" alt="">
        <img class="rotate" v-else-if="loading" src="/img/loading.png" alt="">
        <img v-else :src="'/img/' + rolledNumber + '.png'" alt="">
    </div>
        
        

    <button @click="getDiceroll">Start</button>
    <button @click="stopGame">Quit</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            isGameStarted: false,
            loading: true,
            randomNumber: null,
        }
    },

    computed: {
            ...mapState(["rolledNumber"]),
            
    },    

    created() {
        setInterval(() => {
            this.randomNumber = Math.floor(Math.random() * (6 - 1) + 1)
        }, 500)
        
    },


    methods: {
        getDiceroll() {
            this.isGameStarted = true;
            this.loading = true;

            setTimeout(() => {
                this.axios.get("http://roll.diceapi.com/json/d6").then((response) => {

                this.$store.commit("changeRolledNumber", response.data.dice[0].value)
                this.loading = false;
            })}, 1000)
        },

        stopGame() {
            this.isGameStarted = false
            this.loading = true
        },
    }
}
</script>
<style lang="scss" scoped>
    .wrapper {
        max-width: 1100px;
        height: 700px;
        margin: 100px auto;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2); 
        border-radius: 5px;
        position: relative;
        z-index: 1;
        background: inherit;
        overflow: hidden; 

            &::before{
                content: "";
                position: absolute;
                background: inherit;
                z-index: -1;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                box-shadow: inset 0 0 2000px rgba(255, 255, 255, .7);
                filter: blur(20px);
                margin: -20px;
            }
        
        .displayer {
            height: 168px;
            width: 168px;
            padding: 20px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 4px;
            img {
                width: 100%;
                height: 100%;
            }

            .rotate {
                animation: rotate 0.8s infinite;
            }
        }
    }   
    


@keyframes rotate {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>