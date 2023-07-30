<template>
    <div class="container">
        <div class="tours">
            <div class="tour" v-for="el in tours" :key="el.title">
                <router-link :to="el.id">
                    <img :src="el.img" :alt="el.title">
                    <h2>{{ el.title }}</h2>
                    <p>{{ el.description }}</p>
                    <p class="pulse">Подробнее</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tours:[
                {"id":"/tours#forest", "img": "img/forest.jpg", "title": "Лесной туризм", "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, inventore voluptates!"},
                {"id":"/tours#mountains", "img": "img/mountains.jpg", "title": "Горный туризм", "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, inventore voluptates!"},
                {"id":"/tours#water", "img": "img/water.jpg", "title": "Водный туризм", "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, inventore voluptates!"},
            ] 
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../../scss/main.scss";

.container {
    @include container;

    .tours {
        display: flex;
        justify-content: space-around;
        position: relative;
        bottom: 100px;  
        margin-bottom: -50px;

        @media(max-height: 650px) {
            bottom: 0;
        }

        @media(max-width: 1024px){
            display: block;
            margin-bottom: -100px;
        }

        .tour {
            width: 30%;
            background: $secondaryColor;
            text-align: center;
            padding-bottom: 20px;

            @media(min-width: 1025px) {
                transition: all 1s ease;

                &:hover {
                    transform: translateY(-40px) scale(1.1);
                    cursor: pointer;
                }
            }

            @media(max-width: 1024px) and (min-width: 501px){
                width: 80%;
                margin: 0 auto;
                margin-bottom: 50px;
            }

            @media(max-width: 500px) {
                width: 90%;
                margin: 0 auto;
                margin-bottom: 50px;
            }

            img,p {
                width: 90%;
                margin: 5% 5%;
            }

            h2 {
                text-transform: uppercase;

                @media(max-width: 1200px) and  (min-width: 1025px){
                    font-size: 1.3em;
                }

                @media(max-width: 400px) {
                    font-size: 1.2em;
                }
            }

            @media(max-width: 1024px) {
                .pulse {
                    animation: pulse infinite ease-in-out 1.5s alternate;
                }

                @keyframes pulse {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1.2);
                    }
                }
            }
        }
    }
}

</style>
