<template>
    <div class="head">
        <Head />
    </div>
    <div>
        <About />
        <Offers />
        <Instructors />
        <Footer />
    </div>
</template>

<script>
import Head from './components/Head.vue'
import About from './components/About.vue'
import Offers from './components/Offers.vue'
import Instructors from './components/Instructors.vue'
import Footer from './components/Footer.vue'

export default {
    components: { Head, About, Offers, Instructors, Footer },
    data() {
        return {
           
        }
    }
}

</script>

<style lang="scss">

@import "../scss/main.scss";

.head {
    @include head; 
}

</style>