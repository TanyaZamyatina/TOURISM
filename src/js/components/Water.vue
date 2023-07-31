<template>
    <div class="container">
        <h2 id="water">На воде</h2>
        <div class="wrapper">
            <div class="waterTours">
                <div class="waterTour" v-for="el in water" :key="el.title" :style="'left: ' + move + '%'">
                    <div>
                        <img :src="el.img" :alt="el.place">
                    </div>
                    <div class="place">
                        <i class="icon fa-solid fa-circle-arrow-left" v-on:click="moveTour ('prev')"></i>
                        <span>{{ el.place }}</span>
                        <i class="icon fa-solid fa-circle-arrow-right" v-on:click="moveTour('next')"></i>
                    </div>
                    <div class="description">   
                        <span><i class="fa-solid fa-people-group"></i> {{ el.quantitu }}</span>
                        <span><i class="fa-solid fa-clock"></i> {{ el.duration }}</span>
                    </div>
                    <div>
                        <h3>{{ el.title }}</h3  >
                    </div>
                    <div>
                        <p class="level">{{ el.level }} 
                            <i title="Три уровня сложности тура:
                            Базовая - подходит не подготовленным людям
                            Средняя - нужен инструктаж
                            Высокая - необходима спецподготовка" 
                            class="fa-regular fa-circle-question">
                            </i>
                        </p>
                    </div>
                    <div class="price">
                        <p>Стоимость:</p>
                        <span>{{ el.price }} 
                            <i class="fa-solid fa-ruble-sign"></i>
                        </span>
                    </div>
                    <div class="date">
                        <label for="date">Ближайшие даты:</label>
                        <select id="date">
                            <option selected>{{ el.date[0] }}</option>
                            <option>{{ el.date[1] }}</option>
                            <option>{{ el.date[2] }}</option>
                        </select>
                    </div>
                    <div>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            move: 0,
            water:[
                {"img":"img/kem.jpg", "place":"Карелия", "title":"Сплав по рекам Чирка-Кемь и Кемь", "quantitu":"5", "duration":"7 д.", "level":"Базовая сложность", "price":"21000", "date":["01-07.08.2023", "11-17.08.2023", "20-26.08.2023"]},
                {"img":"img/tumcha.jpg", "place":"Кольский", "title":"Сплав по реке Тумча", "quantitu":"6", "duration":"6 д.", "level":"Высокая сложность", "price":"25000", "date":["04-09.08.2023", "10-15.08.2023", "21-26.08.2023"]},
                {"img":"img/putorana_plateau.jpg", "place":"Сибирь", "title":"Туры по плато Путорана", "quantitu":"10", "duration":"10 д.", "level":"Средняя сложность", "price":"108000", "date":["01-10.08.2023", "11-20.08.2023", "21-30.08.2023"]},
                {"img":"img/zhombolok.jpg", "place":"Байкал", "title":"Сплав по рекам Жомболок и Ока Саянская", "quantitu":"8", "duration":"10 д.", "level":"Высокая сложность", "price":"66000", "date":["02-11.08.2023", "12-21.08.2023", "22-31.08.2023"]},
                {"img":"img/teletskoye.jpg", "place":"Алтай", "title":"По Чулышману и Телецкому озеру", "quantitu":"10", "duration":"6 д.", "level":"Базовая сложность", "price":"62000", "date":["05-10.08.2023", "13-18.08.2023", "24-29.08.2023"]},
            ]
        }
    },
    methods: {
        moveTour (value) {
            let add = 20;
            if (value == 'prev' && this.move!=0) {
                this.move += add;
            } else if (value == 'next'&& this.move!=-80) {
                this.move -= add;
            }
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
        font-size: 4em;
        text-align: center;
        border-top: 1px solid $secondaryColor;

        @media(max-width: 590px) {
            font-size: 2.5em;
        }
    }

    .wrapper {
        width: 75%;
        margin: 0 auto;

        .waterTours {
            display: flex;
            width: 500%;
            overflow: hidden;
            margin-bottom: 50px;

            .waterTour{
                width: 75%;
                color: $secondaryColor;
                font-size: 1.3em;
                position: relative;
                transition: left 500ms ease;

                @media(max-width: 500px) {
                    font-size: 1.2em;
                }

                > div {
                    margin: 10px 0;

                    @media(min-width: 1500px) {
                        margin: 10px 25%;
                    }
                }

                img {
                    width: 100%;
                }

                .place {
                    display: flex;
                    justify-content: space-between;
                    line-height: 80px;

                    @media(max-width: 500px) {
                        line-height: 40px;
                    }

                    .icon {
                        color: $backgroundColor;
                        font-size: 4em;
                        cursor: pointer;
                        transition: all 500ms ease;

                        @media(max-width: 500px) {
                            font-size: 2em;
                        }

                        &:first-of-type {
                            margin-left: 5px;
                        }

                        &:last-of-type {
                            margin-right: 5px;
                        }

                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                }
                
                .description {
                    text-align: center;

                    i {
                        color: $backgroundColor;

                        &:last-of-type {
                            margin-left: 20px;
                        }
                    }
                }

                .level > i {
                    color: $backgroundColor;
                    margin-left: 5px;
                    cursor: pointer;
                }

                .price {
                    display: flex;
                    justify-content: space-between;
                }

                .date {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    label {
                        margin-right: 10px;
                    }

                    #date {
                        font-size: 1em; 
                        border-radius: 10px;  
                        outline: none;
                        cursor: pointer;
                        color: $mainColor;

                        @media(max-width: 469px) {
                            margin: 20px auto;
                        }
                    }
                }

                button {
                    background: $backgroundColor;   
                    color: $secondaryColor;
                    border: none;
                    font-size: 1.3em;
                    font-weight: 600;
                    margin: 0 auto;
                    display: block;
                    padding: 5px 10px;
                    margin-top: 20px;
                    cursor: pointer;
                    transition: all 500ms ease;
                    height: 50px;

                    &:hover {
                        transform: scale(1.1);
                        background: $mainColor;
                        border-top: 1px solid $secondaryColor;
                        border-bottom: 1px solid $secondaryColor;
                    }
                }
            }
        }
    }
}

</style>
