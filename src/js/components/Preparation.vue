<template>
    <div class="container">
        <h2>Как подготовиться</h2>
        <div class="preparation">
            <div class="box1 wow animate__animated animate__fadeInLeft animate__slow">
                <h3>Поход в лесу</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero temporibus enim dolorem numquam vel fugit in eius quia, voluptatum ipsa quae doloremque consectetur alias sit cumque cum eveniet et explicabo doloribus perferendis dolore! Atque labore, tempore mollitia ratione aliquam obcaecati! Quam repellat eveniet dicta quasi praesentium fugiat impedit dolor consequatur pariatur cumque repellendus illo corrupti doloribus voluptates qui eligendi tempora animi maxime recusandae id quod reiciendis, consectetur rerum necessitatibus! Aspernatur, neque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque officia cum eaque sapiente incidunt animi ipsum dolorum natus totam magni ipsa distinctio fugit accusamus asperiores, sint beatae. Ea vitae iure labore exercitationem deleniti nam sapiente voluptates eveniet quos eius modi animi vero fuga repellat quia laboriosam dolore sint suscipit, molestiae amet minus accusamus.</p>
            </div>
            <div class="box2 wow animate__animated animate__fadeInUp animate__slow">
                <h3>Восхождение на гору</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum soluta odit consequatur officia praesentium officiis minus aperiam aliquid at! Minus esse quam provident commodi illo officia architecto id perspiciatis deserunt nostrum, nobis atque expedita dolorum totam dicta at ipsam. Incidunt amet doloremque repellat distinctio sunt sequi maxime beatae placeat quidem necessitatibus soluta ea quos voluptatibus repudiandae ex aliquid, itaque, qui reprehenderit eaque corrupti! Qui est itaque nobis quis incidunt totam dignissimos iusto sed? Porro sunt ipsam ab ad tempora a facilis nobis nisi voluptatibus magnam id unde consequuntur dolores illum quam deleniti obcaecati excepturi fuga itaque at provident, culpa ipsa sed! Quae veritatis ducimus maiores perferendis soluta, omnis velit quidem inventore perspiciatis error ipsa ab illum ipsum. Dolorem officiis ipsam veniam, hic illum iste perspiciatis iure cupiditate deserunt impedit soluta quia voluptatem mollitia amet alias enim aut temporibus, ipsum, placeat nisi ut. Mollitia dignissimos soluta officiis quasi earum quia facilis animi adipisci repellendus! Ipsam atque architecto quasi necessitatibus corporis consequatur? Sunt dolores tenetur dignissimos laborum repudiandae tempore sapiente hic facere libero suscipit nam explicabo veritatis, similique at magnam minima aperiam facilis pariatur quae accusantium quia.</p>
                <img src="img/set.jpg" alt="Набор для кемпинга">
            </div>
            <div class="box3 wow animate__animated animate__fadeInRight animate__slow"> 
                <h3>Сплав по реке</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quos et. Recusandae porro at quos id cumque. Corrupti vel officia esse. Tempora nobis cum voluptas itaque, sit voluptate, aspernatur dolorem nihil quis nam pariatur voluptatibus harum eum, provident nisi distinctio fuga cupiditate necessitatibus. Placeat, iusto, obcaecati consequuntur ullam eum possimus consectetur velit fugiat cum quo aspernatur minus quasi ex. Dolore!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum praesentium, accusamus neque recusandae consequuntur ullam illum placeat reprehenderit incidunt iste reiciendis quia minus temporibus facere voluptas quibusdam architecto quo voluptates tempora corporis sit eaque. Veniam dolore quod, tenetur facilis sequi cupiditate sunt quas assumenda ad quo. Atque ratione, illo vitae laudantium pariatur recusandae voluptatibus! Voluptate unde consequatur inventore fuga adipisci explicabo quidem. Maxime odio earum debitis doloremque, delectus quam maiores cum nisi.</p>
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

    h2 {
    color: $secondaryColor;
    text-align: center;
    font-size: 4em;
    margin: 50px auto;

        @media(max-width: 590px) {
            font-size: 2.5em;
        }
    }

    .preparation {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-gap: 50px;
        color: $secondaryColor;
        margin-bottom: 50px;

        @media(max-width: 1700px) and (min-width: 901px){
            grid-template-columns: repeat(4, 1fr);
            grid-row-gap: 20px;

            .box1 {
                grid-column: 1/3;
            }

            .box2 {
                grid-column: 1/5;
                order: 2;
            }

            .box3 {
                grid-column: 3/5;
                order: 1;
            }
        }

        @media(max-width: 900px) {
            grid-template-columns: 1fr;
            grid-row-gap: 20px;

            .box2 {
                order: 2;
            }

            .box3 {
                order: 1;
            }
        }

        h3 {
            font-size: 2em;
            margin-bottom: 10px;
        }

            p {
                &:last-of-type {
                    margin-top: 10px;
                }
            }

        img {
            width: 97%;
            border: 10px solid $backgroundColor;
            margin-top: 30px;
        }
    }
}

</style>
