<template>
    <div class="container">
        <h2 class="wow animate__animated animate__fadeInLeft animate__slow">Что мы можем предложить вам</h2>
        <div class="offers">
            <div class="offer wow animate__animated animate__fadeInRight animate__slow">
                <i class="fa-solid fa-circle-check"></i>
                <h3>Различные направления</h3>
            </div>
            <div class="offer wow animate__animated animate__fadeInRight animate__slow">
                <i class="fa-solid fa-circle-check"></i>
                <h3>Доступные цены</h3>
            </div>
            <div class="offer wow animate__animated animate__fadeInRight animate__slow">
                <i class="fa-solid fa-circle-check"></i>
                <h3>Лучшие гиды</h3>
            </div>
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
    position: relative;
    top: 100px;
    
    h2 {
    position: relative;
    color: $secondaryColor;
    font-size: 4em;
    width: 50%;
    margin-bottom: 60px;

        @media(max-width: 1320px) and (min-width: 1025px){
            width: 70%;
        }

        @media(max-width: 1024px) {
            width: 100%;
            text-align: center;
            bottom: 50px;
        }

        @media(max-width: 590px) {
            font-size: 2.5em;
        }
    }

    .offers {
        overflow: hidden;
        margin-bottom: 100px;

        @media(max-width: 1024px) {
            position: relative;
            bottom: 50px;
        }

        .offer {
            display: flex;
            width: 70%;
            float: right;
            margin-bottom: 50px;

            @media(max-width: 1024px) {
                width: 100%;
                bottom: 50px;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }

            i {
                color: $backgroundColor;
                font-size: 5em;

                @media(max-width: 590px) {
                    font-size: 3.9em;
                }
            }

            h3 {
                color: $secondaryColor;
                font-size: 3em;
                margin-left: 30px;

                @media(max-width: 590px) {
                    font-size: 2em;
                    margin-left: 20px;
                }
            }
        }
    }
}

</style>
