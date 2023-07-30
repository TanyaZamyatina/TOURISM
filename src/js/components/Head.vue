<template>
    <header>
        <nav class="nav">
            <router-link to="/"><img src="img/logo.jpg" alt="TOURISM"></router-link>
            <ul class="menu" v-if="screenWidth > 1024">
                <li><router-link to="/">Главная</router-link></li>
                <li><router-link to="/about">О нас</router-link></li>
                <li><router-link to="/training">Советы</router-link></li>
                <li><router-link to="/tours">Туры</router-link></li>
            </ul>
            <i v-else :class="menuIcon" v-on:click="showMenu(), addIndent()"></i>

            <ul class="mobileMenu" v-if="screenWidth <= 1024 && mobileMenu">
                <li><router-link to="/">Главная</router-link></li>
                <li><router-link to="/about">О нас</router-link></li>
                <li><router-link to="/training">Советы</router-link></li>
                <li><router-link to="/tours">Туры</router-link></li>
            </ul>
        </nav>
        <h1 :style="'margin-top:' + indent + 'px'">{{ title }}</h1>
    </header>
</template>

<script>
export default {
    data() {
        return {
            screenWidth: screen.width,
            mobileMenu: false,
            menuIcon: "fa-solid fa-bars",
            title: "",
            indent: ""
        }
    },
    mounted() {
        this.onScreenResize();
        this.titleChange();
        this.addIndent ();
    },
    methods: {
        onScreenResize() {
            window.addEventListener("resize", () => {
                this.screenWidth = screen.width
            })
        },
        showMenu() {
            this.mobileMenu = !this.mobileMenu;
            this.menuIcon = this.menuIcon.includes("bars") ? "fa-solid fa-xmark" : "fa-solid fa-bars";
        },
        titleChange() {
            let href = location.href;
            switch(href) {
                case "http://localhost:9000/#/":
                    this.title = "Удивительные места";
                    break;
                case "http://localhost:9000/#/about":
                    this.title = "О нас";
                    break;
                case "http://localhost:9000/#/training":
                    this.title = "Ваш помощник в путешествии";
                    break;
                case "http://localhost:9000/#/tours":
                    this.title = "Приключения ждут";
                    break;
                case "http://localhost:9000/#/tours#mountains":
                    this.title = "Приключения ждут";
                    break;
                case "http://localhost:9000/#/tours#forest":
                    this.title = "Приключения ждут";
                    break;
                case "http://localhost:9000/#/tours#water":
                    this.title = "Приключения ждут";
                    break;
            }
        },
        addIndent () {
            this.indent = this.menuIcon.includes("fa-solid fa-bars") ? "156" : "0";
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../../scss/main.scss";

.nav {
    @include container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    img {
        height: 60px;
        margin-left: 20px;
    }

    .menu {
        list-style: none;
        text-transform: uppercase;

        > li {
            display: inline-block;
            margin-right: 20px;

            a {
                &:hover {
                    color: $backgroundColor;
                }
            }
        }
    }

    i {
        font-size: 1.8em;
        color: $mainColor;
        margin-right: 20px;
    }

    .mobileMenu {
        list-style: none;
        text-transform: uppercase;
        width: 100%;
        text-align: center;

        > li {
            margin-top: 10px;
        }
    }
}

h1 {
    text-align: center;
    font-size: 4.4em;
    opacity: 0;
    animation: color 5s ease forwards;

    @keyframes color {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media(max-width: 921px) and (min-width: 745px){
        font-size: 4em;
    }

    @media(max-width: 744px) and (min-width: 401px){
        font-size: 3em;
    }

    @media(max-width: 400px) {
        font-size: 2.5em;
    }
}

</style>
