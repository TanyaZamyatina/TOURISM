<template>
    <div class="wrapper">
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style lang="scss">

@import "../scss/main.scss";

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');  

::selection {
    background: $backgroundColor;
}

* {
    margin: 0;
    padding: 0;
}

body {
    background: $mainColor;
    color: $mainColor;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1em;
}

a {
    text-decoration: none;
    color: rgb(27, 27, 27);
    font-weight: 600;
    font-size: 1.2em;
}

.wrapper {
    overflow: hidden;
}

</style>