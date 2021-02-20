<template>
    <h1>Stan konta: <span>{{ this.money }}</span></h1>
</template>

<script>

import { mapState } from 'vuex'

export default {
    data() {
        return {
            
        }
    },

    computed: {
        ...mapState(["money"])
    },

}
</script>

<style lang="scss" scoped>
    h1 {
        padding: 30px;
        color: #333;
    }
</style>