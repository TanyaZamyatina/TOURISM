<template>
    <div class="container">
        <h2 id="forest">В лесу</h2>
        <div class="wrapper">
            <div class="forestTours">
                <div class="forestTour" v-for="el in forest" :key="el.title" :style="'left: ' + move + '%'">
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
            forest:[
                {"img":"img/ossetia.jpg", "place":"Северная Осетия", "title":"Реликтовый лес Куртатинского ущелья", "quantitu":"10", "duration":"7 д.", "level":"Средняя сложность", "price":"14000", "date":["01-07.08.2023", "11-17.08.2023", "20-26.08.2023"]},
                {"img":"img/ergaki.jpg", "place":"Сибирь", "title":"Природный парк Ергаки (Западный Саян)", "quantitu":"5", "duration":"9 д.", "level":"Высокая сложность", "price":"19000", "date":["04-12.08.2023", "10-18.08.2023", "21-29.08.2023"]},
                {"img":"img/moscow_region.jpg", "place":"Подмосковье", "title":"Пеший поход «Выживание в лесу»", "quantitu":"7", "duration":"3 д.", "level":"Базовая сложность", "price":"3000", "date":["02-04.08.2023", "12-14.08.2023", "22-24.08.2023"]},
                {"img":"img/ural.jpg", "place":"Урал", "title":"Мультипоход по Южному Уралу", "quantitu":"6", "duration":"10 д.", "level":"Базовая сложность", "price":"30000", "date":["02-11.08.2023", "12-21.08.2023", "22-31.08.2023"]},
                {"img":"img/altai.jpg", "place":"Алтай", "title":"Горные леса на пути Чемальского тракта", "quantitu":"10", "duration":"10 д.", "level":"Средняя сложность", "price":"15000", "date":["01-10.08.2023", "11-20.08.2023", "21-30.08.2023"]},
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

        .forestTours {
            display: flex;
            width: 500%;
            overflow: hidden;
            margin-bottom: 50px;

            .forestTour{
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
                    color: $mainColor;

                    label {
                        margin-right: 10px;
                    }

                    #date {
                        font-size: 1em; 
                        border-radius: 10px;  
                        outline: none;
                        cursor: pointer;

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
