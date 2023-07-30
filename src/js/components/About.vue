<template>
    <div class="container">
        <div class="about">
            <div class="bg"></div>
            <div class="text wow animate__animated animate__fadeInLeft animate__slow">
                <h2>TOURISM это</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur quos aliquam minus labore sequi deserunt, adipisci exercitationem consequatur ut porro rem quis magni optio ipsa error ab. Quidem rerum sequi iste enim vel ducimus consequatur vitae officia incidunt fuga neque optio repudiandae quibusdam esse, commodi nisi ad modi impedit dolores cupiditate! Ducimus, assumenda quasi minus sit, fuga, deserunt ratione nisi fugit ullam cum blanditiis reiciendis. Enim, voluptatum repellat eaque commodi dolorem deleniti nam dignissimos voluptate officiis doloribus ullam minus, quibusdam cupiditate. Quia accusantium et voluptatum sed labore, nulla ipsum.</p>
            </div>
            <img class="wow animate__animated animate__fadeInRight animate__slow" src="img/about.jpg" alt="Лагерь на природе">
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

    .about {

        @media(min-width: 1025px) {
            width: 100%;
            position: relative;
            top: 100px; 
        }

        .bg {
            @media(min-width: 1025px) {
                position: relative;
                background: $backgroundColor;
                width: 2000px;
                height: 700px;
                left: 200px;
            }

        @media(max-width: 1024px) {
                display: none;
            }
        }

        .text {
            color: $secondaryColor;
            margin-bottom: 50px;

            @media(min-width: 1025px) {
                position: absolute;
                background: $mainColor;
                width: 50%;
                height: 600px;
                padding-right: 50px;
                bottom: 123px;
            } 

            @media(max-width: 1024px) {
                text-align: center;
            }
            
            h2 {
                font-size: 4em;

                @media(max-width: 590px) {
                    font-size: 2.5em;
                }
            }
        }

        img {
            position: relative;

            @media(min-width: 1025px) {
                position: absolute;
                width: 50%;
                bottom: -70px;
                right: 100px; 
            }

            @media(max-width: 1500px) and (min-width: 1025px){
                bottom: 30px;
            }

            @media(max-width: 1024px) {
                width: 100%;
            }
        }
    }
}

</style>
