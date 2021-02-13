<template>
    <div class="wrap">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .wrap {
        display: flex;
        justify-content: center;

            button {
                margin: 0 20px !important;
            }
    }
</style>