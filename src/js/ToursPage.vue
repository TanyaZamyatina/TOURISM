<template>
    <div class="head">
        <Head />
    </div>
    <div>
        <Mountains />
        <Forest />
        <Water />
        <Footer />
    </div>
</template>

<script>
import Head from './components/Head.vue'
import Mountains from './components/Mountains.vue'
import Forest from './components/Forest.vue'
import Water from './components/Water.vue'
import Footer from './components/Footer.vue'

export default {
    components: { Head, Mountains, Forest, Water, Footer },
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