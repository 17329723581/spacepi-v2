<template>
    <div id="animationm"></div>
</template>

<script>
import lottie from "lottie-web";
import animationData from '@/assets/animation/data1.json';

export default {
    name: 'animationm',
    components: {
    },
    data() {
        return {
            defaultOptions: { animationData: animationData },
            animationSpeed: 1,
            anim: {}
        }
    },
    mounted(){
            this.svgFun();
    },
    methods: {
        svgFun(){
            let params = {
                container: document.getElementById("animationm"),
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