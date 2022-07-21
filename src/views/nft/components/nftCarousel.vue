<template>
    <div class="nftCarousel">
        <div class="pc">
            <!-- 轮播图 -->
            <div class="nft-carousel">
                <v-carousel class="nft-carousel-container" hide-delimiters :show-arrows="false" cycle>
                    <v-carousel-item v-for="(item, index) in getNftCarouselData" :key="index" >
                        <div>
                            <v-img :src="item.picture" class="nft-carousel-img" :contain="true"
                                @click="spacepiTo(item.url)"></v-img>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </div>
        <div class="mo">
            <!-- 轮播图 -->
            <div class="nft-carousel-s">
                <v-carousel class="nft-carousel-container" hide-delimiters :show-arrows="false" cycle>
                    <v-carousel-item v-for="(item, index) in getNftCarouselData" :key="index">
                        <div>
                            <v-img :src="item.picture_m" class="nft-carousel-img"
                                @click="spacepiTo(item.url)"></v-img>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </div>
        <!-- NFT顶部按钮 -->
        <div class="nft-top-bnt wow spacepi-animation fade-in-up-animation" v-if="$router.currentRoute.path == '/nft'">
            <v-menu transition="slide-y-transition" open-on-hover offset-y v-for="(item, index) in getNftTopBunttonData"
                :key="index">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn @click="item.staus != 1 ? spacepiTo(item.link) : ''" v-if="index == 0" v-bind="attrs"
                        v-on="on" class="left">
                        <span v-if="locale == 'zh_CN' || locale == 'zh_TW'">
                            {{ item.zh_CN }}
                        </span>
                        <span v-else>
                            {{ item.en_US }}
                        </span>
                    </v-btn>
                    <v-btn @click="item.staus != 1 ? spacepiTo(item.link) : ''"
                        v-if="index != getNftTopBunttonData.length - 1 && index != 0" v-bind="attrs" v-on="on" class="">
                        <span v-if="locale == 'zh_CN' || locale == 'zh_TW'">
                            {{ item.zh_CN }}
                        </span>
                        <span v-else>
                            {{ item.en_US }}
                        </span>
                    </v-btn>
                    <v-btn @click="item.staus != 1 ? spacepiTo(item.link) : ''"
                        v-if="index == getNftTopBunttonData.length - 1" v-bind="attrs" v-on="on" class="right">
                        <span v-if="locale == 'zh_CN' || locale == 'zh_TW'">
                            {{ item.zh_CN }}
                        </span>
                        <span v-else>
                            {{ item.en_US }}
                        </span>
                    </v-btn>
                </template>
                <v-list v-if="item.staus != 0">
                    <div v-for="(i, SpacepiIndex) in getNftTopBunttonListData" :key="SpacepiIndex">
                        <v-list-item @click="spacepiTo(i.link)" v-if="i.b_id == item.id && index == 0" class="right">
                            <v-list-item-title style="text-align: center">
                                <span v-if="locale == 'zh_CN' && locale == 'zh_TW'">
                                    {{ item.zh_CN }}
                                </span>
                                <span v-else>
                                    {{ item.en_US }}
                                </span>
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="spacepiTo(i.link)" v-if="
                            i.b_id == item.id &&
                            index != 0 &&
                            index != getNftTopBunttonData.length - 1
                        ">
                            <v-list-item-title style="text-align: center">
                                <span v-if="locale == 'zh_CN' && locale == 'zh_TW'">
                                    {{ item.zh_CN }}
                                </span>
                                <span v-else>
                                    {{ item.en_US }}
                                </span>
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="spacepiTo(i.link)"
                            v-if="i.b_id == item.id && index == getNftTopBunttonData.length - 1" class="left">
                            <v-list-item-title style="text-align: center">
                                <span v-if="locale == 'zh_CN' && locale == 'zh_TW'">
                                    {{ item.zh_CN }}
                                </span>
                                <span v-else>
                                    {{ item.en_US }}
                                </span>
                            </v-list-item-title>
                        </v-list-item>
                    </div>
                </v-list>
            </v-menu>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
// 引入底部组件
export default {
    data() {
        return {
            getNftCarouselData: [],
            getNftTopBunttonData: [],
            getNftTopBunttonListData: [],
        };
    },
    components: {
    },
    computed: {
        ...mapState(["domainUrl", 'locale']),
    },
    created() {
    },
    mounted() {
        this.getData()
    },
    methods: {
        // spacepi跳转
        spacepiTo(e) {
            window.open(e)
        },
        getData() {
            this.getNftCarousel()
            this.getNftTopBuntton()
            this.getNftTopBunttonList()
        },
        //获取NFT轮播图
        getNftCarousel() {
            var _this = this;
            axios.post(this.domainUrl + "getNftCarousel").then(function (response) {
                _this.getNftCarouselData = response.data.data;
            }).catch(function (error) {
                //     // 请求失败处理
            });
        },
        //获取NFT顶部按钮
        getNftTopBuntton() {
            var _this = this;
            axios.post(this.domainUrl + "getNftTopBuntton").then(function (response) {
                _this.getNftTopBunttonData = response.data.data;
            }).catch(function (error) {
                //     // 请求失败处理
            });
        },
        //获取NFT顶部按列表
        getNftTopBunttonList() {
            var _this = this;
            axios.post(this.domainUrl + "getNftTopBunttonList").then(function (response) {
                _this.getNftTopBunttonListData = response.data.data;
            }).catch(function (error) {
                //     // 请求失败处理
            });
        },
    },
}
</script>
<style scoped lang="scss">
.nftCarousel{
    display: contents;
}
.pc {
    display: block;
}

.mo {
    display: none;
}


//轮播图
.nft-carousel {
    width: 100%;
    background-image: url('../../../assets/banner.png');
    background-size: 100% 100%;
    padding: 30px;

    .nft-carousel-img {
        // width: 50vw;
        cursor: pointer;
    }

    .nft-carousel-container {
        height: 325px !important;
    }
}

//NFT顶部按钮
.nft-top-bnt {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;

    .left {
        clip-path: polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 15%);
    }

    .right {
        clip-path: polygon(95% 0, 100% 15%, 100% 100%, 0 100%, 0 0);
    }

    .v-btn {
        width: 254px;
        height: 60px;
        font-size: 18px;
        font-family: Fenton-Regular;
        font-weight: 400;
        border-radius: 0;
        background: #FDD333;
        transition: 0.4s;
    }

    .v-btn:hover {
        background: rgba(44, 29, 81, 0.5);
        color: #FFFFFF;
        transition: 0.4s;
    }

    .v-btn:active {
        background: rgba(44, 29, 81, 0.5);
        color: #FFFFFF;
    }

    .s {
        color: rgb(255, 0, 0);
    }
}

// 小型号到大型号的手机
@media screen and (max-width:600px) {
    .pc {
        display: none;
    }

    .mo {
        display: block;

        .nft-carousel-s {
            // width: 94vw;

            // width: 430px;
            .nft-carousel-img {
                width: 91.8vw !important;
                @media screen and (min-width:360px){
                    width: 93vw !important;
                }
                @media screen and (min-width:375px){
                    width: 93vw !important;
                }
                @media screen and (min-width:390px){
                    width: 93.9vw !important;
                }
                @media screen and (min-width:414px){
                    width: 94vw !important;
                }
                @media screen and (min-width:540px){
                    width: 95.5vw !important;
                }
                @media screen and (max-width:600px){
                    width: 93vw !important;
                }
            }

            // .nft-carousel-container{
                height: 45vw !important;
            // }
        }

    }

    .nft {
        padding: 12px;
        padding-bottom: 100px;
    }

    //NFT顶部按钮
    .nft-top-bnt {
        width: 100%;
        grid-template-columns: 1fr 1fr;

        .left {
            clip-path: polygon(4% 0, 100% 0, 100% 100%, 0 100%, 0 20%);
        }

        .right {
            clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 75%, 95% 100%, 20% 100%, 0 100%, 0 0);
        }

        .v-btn {
            width: 100%;
            height: 48px;
            ;
            font-size: 14px;
            font-family: Fenton-Regular;
        }
    }
}

// 小型号到中型号的平板
@media screen and (min-width:600px) and (max-width:960px) {
    .pc {
        display: none;
    }
    .mo {
        display: block;

        .nft-carousel-s {
            // width: 94vw;

            // width: 430px;
            .nft-carousel-img {
                width: 81.5vw !important;
            }

            // .nft-carousel-container{
                height: 40vw !important;
            // }
        }

    }
    .nft {
        padding: 50px;
        padding-bottom: 100px;
    }
    //NFT顶部按钮
    .nft-top-bnt {
        width: 100%;
        grid-template-columns: 1fr 1fr;

        .left {
            clip-path: polygon(4% 0, 100% 0, 100% 100%, 0 100%, 0 20%);
        }

        .right {
            clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 75%, 95% 100%, 20% 100%, 0 100%, 0 0);
        }

        .v-btn {
            width: 100%;
            height: 48px;
            ;
            font-size: 14px;
            font-family: Fenton-Regular;
        }
    }
}

// 小型号到中型号的平板
@media screen and (min-width:960px) and (max-width:1264px) {
    //轮播图
    .nft-carousel {
        .nft-carousel-img {
            width: 80vw;
        }
        .nft-carousel-container {
            height: 18vw !important;
        }
    }
    //NFT顶部按钮
    .nft-top-bnt {
        grid-template-columns: 1fr 1fr;
        grid-gap: 25px;
        .v-btn {
            width: 30vw;
        }
    }
}

// 桌面端
@media screen and (min-width:1264px) and (max-width:1904px) {
    //轮播图
    .nft-carousel {
        .nft-carousel-img {
            width: 80vw;
        }
        .nft-carousel-container {
            height: 18vw !important;
        }
    }
}

// 4K 和超宽屏幕
@media screen and (min-width:1904px) {}
</style>