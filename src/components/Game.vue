<template>
    <div class="wrapper">
        <Stats class="stats" />

        <div class="game-panel">

            <div class="displayer">
                <img v-if="!isGameStarted" :src="'/img/' + randomNumber + '.png'" alt="">
                <img class="rotate" v-else-if="loading" src="/img/loading.png" alt="">
                <img v-else :src="'/img/' + rolledNumber + '.png'" alt="">
            </div>

            <button v-if="!isGameStarted" @click="getDiceroll">Start</button>

            <GamePanel v-if="isGameStarted" :clear="clear" @cleared="cleared">
                <button v-if="canRoll" @click="roll">Roll</button>
                <button class="disabled" v-else>Roll</button>
                <div class="quit" @click="stopGame">x</div>
            </GamePanel>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import GamePanel from './GamePanel/GamePanel'
import Stats from './Stats/Stats'

export default {
    data() {
        return {
            isGameStarted: false,
            loading: true,
            randomNumber: null,
            clear: false,
            result: {
                positive: undefined,
                value: null,
            }
        }
    },

    components: {
        GamePanel,
        Stats,
    },

    computed: {
        ...mapState(["rolledNumber", "canRoll", "playerStatement", "priceMultiplier", "previousNumber", "playerBet", "money"]),
    },    

    created() {
        setInterval(() => {
            this.randomNumber = Math.floor(Math.random() * (6 - 1) + 1)
        }, 500)
        
    },

    watch: {
        money() {
            if(this.money <= 0) {
                this.stopGame()
            }
            else if(this.money >= 750) {
                console.log("win")
            }
        }
    },

    methods: {
        getDiceroll() {
            // First roll before game starts 
            if(this.isGameStarted === false) {
                this.loading = false;
                this.$store.commit("changeRolledNumber", Math.floor(Math.random() * (6 - 1) + 1))
                
                this.$store.commit("setMoney", 500)
                this.$store.commit("clearHistory")
                return this.isGameStarted = true;
            }

            this.isGameStarted = true;
            this.loading = true;

            setTimeout(() => {
                this.axios.get("http://roll.diceapi.com/json/d6").then((response) => {

                this.$store.commit("changeRolledNumber", response.data.dice[0].value)

                this.checkResult()

                this.loading = false;
            })}, 1500)
        },

        stopGame() {
            this.isGameStarted = false
            this.loading = true
            this.$store.commit("setMoney", 500)
        },

        roll() {
            this.clear = true,
            this.$store.commit("changePreviousNumber", this.rolledNumber)

            this.getDiceroll()

            this.$store.commit("changeCanRoll", false)
        },

        checkResult() {
            if(this.playerStatement === "higher" && this.rolledNumber > this.previousNumber || 
               this.playerStatement === "lower" && this.rolledNumber < this.previousNumber || 
               this.playerStatement === "same" && this.rolledNumber === this.previousNumber) {  
                
                this.result = {
                    positive: true,
                    value: parseInt(this.playerBet) * this.priceMultiplier,
                }
               }
            else {
                this.result = {
                    positive: false,
                    value: parseInt(-this.playerBet),
                }
            }

            this.$store.commit("addResult", this.result.value)

            this.addMoveToHistory()
        },

        cleared() {
            this.clear = false
        },

        addMoveToHistory() {
            
            const newRecord = {
                moveCounter: 1,
                positive: this.result.positive,
                value: this.result.value,
                moneyBalance: this.money,
            }
            
            this.$store.commit("addGameHistoryRecord", newRecord)
            this.$store.commit("setCanCreateHistory", true)
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .wrapper {
        display: flex;
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

            .stats {
                width: 35%;
                background-color:rgba(255,255,255,0.6);
            }
            .game-panel {
                position: relative;
                width: 65%;

                .displayer {
                    height: 168px;
                    width: 168px;
                    padding: 20px;
                    margin: 70px auto;
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

                button {
                    width: 168px;
                    background: linear-gradient(to right bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.6));
                    border:none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    font-family: 'Lato';
                    display: inline-block;
                    text-align: center;
                    margin: 0 auto;
                    display: block;
                    transition: 0.2s;
                    cursor: pointer;
                    font-size: 22px;
                    font-size: 100;

                        &:hover {
                        box-shadow: 0px 0px 15px 6px rgba(255,255,255,1);
                    }
                }

                button.disabled {
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                }}
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