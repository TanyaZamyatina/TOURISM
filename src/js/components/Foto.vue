<template>
    <div class="container">
        <h2>Загляните в природу</h2>
        <div class="foto">
            <img class="box1" src="img/y1.jpg" alt="Nature photography">
            <img class="box2" src="img/x1.jpg" alt="Nature photography">
            <img class="box3" src="img/center1.jpg" alt="Nature photography">
            <img class="box4" src="img/y2.jpg" alt="Nature photography">
            <img class="box5" src="img/x2.jpg" alt="Nature photography">
        </div>
    </div>
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

.container {
    @include container;

    @media(max-height: 650px) {
        position: relative;
        top: 100px;
    }

    h2 {
    color: $secondaryColor;
    text-align: center;
    font-size: 4em;
    margin-bottom: 50px;

        @media(max-width: 590px) {
            font-size: 2.5em;
        }
    }
    .foto {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        margin-bottom: 50px;

        img {
            width: 100%;
            height: 100%;
        }

        .box1 {
            grid-column: 1/2;
            grid-row: 1/3;
        }

        .box2 {
            grid-column: 2/4;
            grid-row: 1/2;
        }

        .box3 {
            grid-column: 2/3;
            grid-row: 2/3;
        }

        .box4 {
            grid-column: 3/3;
            grid-row: 2/4;
        }

        .box5 {
            grid-column: 1/3;
            grid-row: 3/4;
        }

    }
}

</style>
