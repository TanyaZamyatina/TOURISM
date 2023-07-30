<template>
    <div class="container">
        <h2 class="wow animate__animated animate__fadeInUp animate__slow">Наши гиды</h2>
        <div class="guides">
            <div class="guide wow animate__animated animate__fadeInUp animate__slow" v-for="el in guides" :key="el.title">
                <img :src="el.img" :alt="el.name">
                <div class="description">
                    <h3>{{ el.name }}</h3>
                    <p>{{ el.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            guides:[
                {"img": "img/guide1.jpg", "name": "Александра Ли", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus perferendis magnam. Aspernatur officia, a ex recusandae officiis culpa voluptas laborum quod, perspiciatis distinctio maiores aperiam, neque sapiente hic in id enim eum totam quis."},
                {"img": "img/guide2.jpg", "name": "Максим Захаров", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus perferendis magnam. Aspernatur officia, a ex recusandae officiis culpa voluptas laborum quod, perspiciatis distinctio maiores aperiam, neque sapiente hic in id enim eum totam quis facere dolores odit vero deleniti."},
                {"img": "img/guide3.jpg", "name": "Анна Петрова", "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, inventore voluptates!Vel officia commodi eaque autem ducimus pariatur, distinctio doloribus."},
                {"img": "img/guide4.jpg", "name": "Владимир Буров", "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus perferendis magnam. Aspernatur officia, a ex recusandae officiis culpa voluptas laborum quod, perspiciatis distinctio maiores aperiam."},
            ] 
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../../scss/main.scss";

.container {
    @include container;    

    h2 {
    color: $secondaryColor;
    text-align: center;
    font-size: 4em;
    margin: 50px auto;

        @media(max-width: 590px) {
            font-size: 2.5em;
        }
    }

    .guides {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .guide {
            width: 23%;
            margin-bottom: 50px;

            @media(max-width: 1500px) and (min-width: 701px){
                width: 48%;
            }

            @media(max-width: 700px){
                width: 98%;
            }

            img {
                width: 92%;
                margin: 4% 4%;
                outline: 10px solid $backgroundColor;
                transition: all 500ms ease;
                cursor: pointer;

                &:hover {
                    border-radius: 50%;
                    transform: rotate(360deg);
                }
            }

            .description {
                color: $secondaryColor;

                h3 {
                    font-size: 2em;
                    margin: 10px auto;
                }
            }
        }
    }
}

</style>
