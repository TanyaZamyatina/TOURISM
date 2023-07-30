<template>
    <footer>
        <p>Все права защищены</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
           
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../../scss/main.scss";

footer {
    @include container;
    text-align: center;
    padding: 30px 0;
    color: $secondaryColor;
    border-top: 1px solid $secondaryColor;
}

</style>
