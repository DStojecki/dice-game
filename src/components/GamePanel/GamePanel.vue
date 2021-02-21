<template>
    <div class="wrap">
        <slot></slot> <br>
        <h1>
            Next roll will be ...
        </h1>
        <button class="statement" value="higher" @click="setStatement($event)">Higher</button>
        <button class="statement" value="same" @click="setStatement($event)">Same</button>
        <button class="statement" value="lower" @click="setStatement($event)">Lower</button>
        
        <h1>
            Place your bet 
        </h1>

        <div class="bets">
            <button class="bet" :value="this.betValues.lowest" @click="setBet($event)">{{ this.betValues.lowest }}</button>
            <button class="bet" :value="this.betValues.medium" @click="setBet($event)">{{ this.betValues.medium }}</button>
            <button class="bet" :value="this.betValues.highest" @click="setBet($event)">{{ this.betValues.highest }}</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            betValues: {}
        }
    },

    props: ["clear"],

    computed: {

        bets() {
            return [...document.querySelectorAll(".bet")]
        },

        statementButtons() {
            return [...document.querySelectorAll(".statement")]
        },

        money() {
            return this.$store.state.money
        }
    },

    created() {
        this.betValues = {
                lowest: parseInt(this.money * 0.2),
                medium: parseInt(this.money * 0.5),
                highest: parseInt(this.money * 1),
            }
    },

    watch: {
        clear() {
            this.bets.forEach(bet => bet.classList.remove("active"));
            this.statementButtons.forEach( btn => btn.classList.remove("active"));
            this.$emit("cleared")
        },

        money() {   
            this.betValues = {
                lowest: parseInt(this.money * 0.1),
                medium: parseInt(this.money * 0.6),
                highest: parseInt(this.money * 1),
            }
        }
    },

    methods: {
        setBet(e) {
            this.bets.forEach(bet => bet.classList.remove("active"))
            e.target.classList.add("active")
            
            this.$store.commit("changePlayerBet", e.target.value)

            this.checkIfcanRoll()
        },

        setStatement(e) {
            this.statementButtons.forEach( btn => btn.classList.remove("active"));
            e.target.classList.add("active")

            if(e.target.value === "same") {
                this.$store.commit("changePriceMultiplier", 4)
            }
            else {
                this.$store.commit("changePriceMultiplier", 0.5)
            }

            this.$store.commit("changePlayerStatement", e.target.value)

            this.checkIfcanRoll()
        },
    
        checkIfcanRoll() {
            if(this.bets.some( el => el.classList.contains("active")) && this.statementButtons.some( el => el.classList.contains("active"))) {
                this.$store.commit("changeCanRoll", true)
            }
        },
    }
}
</script>


<style lang="scss" scoped>
    .wrap {
        text-align: center;

            button {
                margin: 20px 20px 20px !important;
                display: inline-block !important;
                width: 168px;
                background: linear-gradient(to right bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.6));
                border:none;
                padding: 10px 20px;
                border-radius: 4px;
                font-family: 'Lato';
                text-align: center;
                transition: 0.2s;
                cursor: pointer;
                font-size: 22px;
                font-size: 100;

                        &:hover {
                        box-shadow: 0px 0px 26px 6px rgba(255,255,255,1);
            }}

            .active {
                box-shadow: 0px 0px 26px 6px rgba(255,255,255,1);
            }

            .quit {
                    cursor: pointer;
                    background-color: white;
                    color: black; 
                    font-size: 30px;
                    position: absolute;
                    top: 5%;
                    right: 2%;
                }
    }
    
</style>