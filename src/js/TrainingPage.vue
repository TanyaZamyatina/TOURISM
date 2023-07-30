<template>
    <div class="head">
        <Head />
    </div>
    <div>   
        <TrainingFoto />
        <Preparation />
        <Footer />
    </div>
</template>

<script>
import Head from './components/Head.vue'
import TrainingFoto from './components/TrainingFoto.vue'
import Preparation from './components/Preparation.vue'
import Footer from './components/Footer.vue'

export default {
    components: { Head, TrainingFoto, Preparation, Footer },
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