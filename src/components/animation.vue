<template>
    <div id="animation"></div>
</template>

<script>
import lottie from "lottie-web";
import animationData from '@/assets/animation/data.json';

export default {
    name: 'animation',
    components: {
    },
    data() {
        return {
            defaultOptions: { animationData: animationData },
            animationSpeed: 1,
            anim: {}
        }
    },
    mounted() {
        this.svgFun();
    },
    methods: {
        svgFun() {
            let params = {
                container: document.getElementById("animation"),
                renderer: "svg",
                loop: false,
                autoplay: true,
                animationData: animationData
            };
            let anim;
            anim = lottie.loadAnimation(params);
        }
    },
}
</script>