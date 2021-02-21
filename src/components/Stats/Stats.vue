<template>
    <div>
        <Wallet />
        
        <section v-if="this.canCreateHistory" class="stats">
            <div class="label"><span>Move </span> <span>Result</span> <span>Balance</span></div>
            <div class="record" v-for="(item, i) in gameHistory" :key="i">
                <span>{{ i + 1 + "." }}</span> <span :class="{ win: item.positive, lose: !item.positive}">{{ parseInt(item.value) }}</span> <span>{{ item.moneyBalance }}</span>
            </div>
        </section>
    </div>
</template>


<script>
import { mapState } from 'vuex'
import Wallet from "./Wallet.vue"

export default {
    components: {
        Wallet,
    },

    computed: {
        ...mapState(["gameHistory", "canCreateHistory"])
    },
}
</script>


<style lang="scss" scoped>
    section {
        padding: 15px;
        color: #333333;
        width: 90%;
        margin: 0 auto;
        height: 80%;
        overflow-y: scroll;

            .label {
                font-size: 16px;
                display: flex;
                justify-content: space-between;
                line-height: 1.5;
            }

            .record {
                font-size: 16px;
                display: flex;
                justify-content: space-between;
                line-height: 1.5;

                    div {
                        width: 100%
                    }
                    span {
                        min-width: 30px;
                        text-align: right;
                    }

                    .win {
                        color: green;
                    }

                    .lose {
                        color: red;
                    }
            }
    }
</style>