<template>
    <div class="container">
        <div class="wrapper">
            <div class="bg"></div>
            <img class="foto1  wow animate__animated animate__fadeInLeft animate__slow" src="img/training1.jpg" alt="Горы">
            <img class="foto3  wow animate__animated animate__fadeInRight animate__slow" src="img/training3.jpg" alt="Река">
            <img class="foto2  wow animate__animated animate__fadeInUp animate__slow" src="img/training2.jpg" alt="Лес">
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

    .wrapper {
        position: relative; 
        height: 800px;

        @media(max-width: 1700px) and (min-width: 1551px){
            height: 730px;
        }

        @media(max-width: 1550px) and (min-width: 1301px){
            height: 680px;
        }

        @media(max-width: 1300px) and (min-width: 1211px){
            height: 640px;
        }

        @media(max-width: 1210px) and (min-width: 1131px){
            height: 610px;
        }

        @media(max-width: 1130px) and (min-width: 1024px){
            height: 580px;
        }

        @media(max-width: 1023px) {
            display: none;
        }

        .bg {
            position: absolute;
            background: #42553e;
            width: 60%;
            height: 90%;
            left: 20%;
        }

        .foto1 {
            position: absolute;
            width: 30%;
            left: 10%;
            top: 120px;

            @media(max-width: 1400px) {
                width: 33%;
            }
        }

        .foto2 {
            position: absolute;
            width: 30%;
            border: 10px solid #42553e;
            left: 35%; 
            bottom: 0;

            @media(max-width: 1400px) {
                width: 33%;
            }
        }

        .foto3 {
            position: absolute;
            width: 40%;
            right: 5%;
            top: 70px;

            @media(max-width: 1400px) {
                width: 43%;
                right: 3%;
            }
        }
    }
}

</style>
