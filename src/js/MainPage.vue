<template>
    <div class="head">
        <Head />
    </div>
    <div>
        <Tours />
        <Foto />
        <Footer />
    </div>
</template>

<script>
import Head from './components/Head.vue'
import Tours from './components/Tours.vue'
import Foto from './components/Foto.vue'
import Footer from './components/Footer.vue'

export default {
    components: { Head, Tours, Foto, Footer },
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