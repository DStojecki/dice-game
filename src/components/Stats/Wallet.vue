<template>
    <h1>Account balance: <span>{{ this.money }}</span></h1>
</template>

<script>

import { mapState } from 'vuex'

export default {

    computed: {
        ...mapState(["money"])
    },

}
</script>

<style lang="scss" scoped>
    h1 {
        padding: 30px;
        color: #444;
    }
</style>