<template>
    <div class="nft">
        <div class="nft-container">
            <nftCarousel></nftCarousel>
            <!-- NFT主体 -->
            <div class="nft-subject wow spacepi-animation fade-in-up-animation" v-for="(item, index) in getNftTypeData" :key="index">
                <div class="nft-title-subject">
                    <div class="nft-title">
                        <div class="nft-line"></div>
                        <span v-if="locale == 'zh_CN' || locale == 'zh_TW'">
                            {{item.zh_CN_title}}
                        </span>
                        <span v-else>
                            {{item.en_US_title}}
                        </span>
                    </div>
                    <v-btn class="nft-more" @click="spacepiTo(item.url)">
                        <span v-if="locale == 'zh_CN' || locale == 'zh_TW'">
                            {{item.zh_CN_bnt}}
                        </span>
                        <span v-else>
                            {{item.en_US_bnt}}
                        </span>
                    </v-btn>
                </div>
                <div class="nft-text">
                    <span v-if="locale == 'zh_CN' || locale == 'zh_TW'">
                        {{item.zh_CN_text}}
                    </span>
                    <span v-else>
                        {{item.en_US_text}}
                    </span>
                </div>
                <div class="nft-img-container">
                    <div class="nft-img" v-for="(i, indexs) in getNftListData" :key="indexs" v-if="i.t_id==item.id" @click="spacepiTo(i.url)">
                        <v-img :src="i.picture" class="img"></v-img>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import nftCarousel from '@/views/nft/components/nftCarousel'
// 引入底部组件
export default {
    data() {
        return {
            getNftTypeData:[],
            getNftListData:[],
        };
    },
    components: {
        nftCarousel
    },
    computed: {
        ...mapState(["domainUrl",'locale']),
    },
    created() {
    },
    mounted(){
        this.getData()
    },
    methods: {
        // spacepi跳转
        spacepiTo(e) {
            window.open(e)
        },
        getData(){
            this.getNftType()
            this.getNftList()
        },
        //获取NFT类型
        getNftType(){
            var _this = this;
            axios.post(this.domainUrl + "getNftType").then(function (response) {
                _this.getNftTypeData = response.data.data;
            }).catch(function (error) {
                //     // 请求失败处理
            });
        },
        //获取NFT列表
        getNftList(){
            var _this = this;
            axios.post(this.domainUrl + "getNftList").then(function (response) {
                _this.getNftListData = response.data.data;
            }).catch(function (error) {
                // 请求失败处理
            });
        }
    },
}
</script>
<style scoped lang="scss">
.pc{
    display: block;
}
.mo{
    display: none;
}
.nft{
    display: grid;
    justify-items: center;
    padding-bottom: 500px;
}
.nft-container{
    max-width: 1500px;
    margin-top: 200px;
    display: grid;
    justify-items: center;
    grid-gap: 84px;
    width: -webkit-fill-available;
    //NFT主体
    .nft-subject{
        width: 100%;
        display: grid;
        .nft-title-subject{
            width: 100%;
            display: flex;
            align-items: center;
            .nft-title{
                width: 100%;
                font-size: 60px;
                font-family: Fenton-Black, Fenton;
                font-weight: 900;
                color: #FFFFFF;
                display: flex;
                align-items: center;
                gap:10px;
                .nft-line{
                    width: 6px;
                    height: 44px;
                    background: #FDD333;
                }
            }
            .nft-more{
                background:#FDD333;
                border-radius: 0;
            }
            .nft-more:hover{
                border: 1px solid #FDD333;
                background:rgba(0,0,0,0);
                color: #FDD333;
            }
        }
        .nft-text{
            width: 100%;
            text-align:left;
            font-size: 26px;
            font-family: Fenton-Medium, Fenton;
            font-weight: 500;
            color: #FDD333;
        }
        .nft-img-container{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            margin-top: 50px;
            gap: 50px;
            .nft-img{
                background:url('../../assets/NFT.png') no-repeat center;
                background-size: cover;
                height: 250px;
                padding: 20px;
                display: flex;
                cursor: pointer;
                .img{
                    border: 1px solid #FDD333;
                    width: 200px;
                }
            }
        }
    }
}

// 小型号到大型号的手机
@media screen and (max-width:600px){
    .pc{
        display: none;
    }
    .mo{
        display: block;
    }
    .nft{
        padding: 12px;
        padding-bottom: 100px;
    }
    .nft-container{
        margin-top: 70px;
        grid-gap: 50px;
        //NFT主体
        .nft-subject{
            .nft-title-subject{
                .nft-title{
                    font-size: 1.6rem;
                    gap:5px;
                    .nft-line{
                        height: 25px;
                    }
                }
                .nft-more{
                    height: 25px;
                    font-size: 14px;
                }
            }
            .nft-text{
                margin-top: 5px;
                font-size: 1rem;
            }
            .nft-img-container{
                display: flex;
                overflow-x:  scroll;
                overflow-y: hidden;
                margin-top: 20px;
                gap: 25px;
                .nft-img{
                    width: 200px;
                    height: 200px;
                }
            }
            .nft-img-container::-webkit-scrollbar{//隐藏滚动条
                display: none;
            }
        }
    }
}
// 小型号到中型号的平板
@media screen and (min-width:600px) and (max-width:960px){
    .nft{
        padding: 64px;
        padding-bottom: 100px;
    }
        .nft-container{
        margin-top: 70px;
        grid-gap: 50px;
        //NFT主体
        .nft-subject{
            .nft-title-subject{
                .nft-title{
                    font-size: 1.6rem;
                    gap:5px;
                    .nft-line{
                        height: 25px;
                    }
                }
                .nft-more{
                    height: 25px;
                    font-size: 14px;
                }
            }
            .nft-text{
                margin-top: 5px;
                font-size: 1rem;
            }
            .nft-img-container{
                display: flex;
                overflow-x:  scroll;
                overflow-y: hidden;
                margin-top: 20px;
                gap: 25px;
                .nft-img{
                    width: 200px;
                    height: 200px;
                }
            }
            .nft-img-container::-webkit-scrollbar{//隐藏滚动条
                display: none;
            }
        }
    }
}
// 小型号到中型号的平板
@media screen and (min-width:960px) and (max-width:1264px){
    .nft-container{
        padding: 0 64px;
        //NFT主体
        .nft-subject{
            .nft-img-container{
                grid-template-columns: 1fr 1fr 1fr;
                .nft-img{
                    height: 25vw;
                    padding: 2vw;
                    .img{
                        width: 20vw;
                    }
                }
            }
        }
    }
}
// 桌面端
@media screen and (min-width:1264px) and (max-width:1904px){
    .nft-container{
        padding: 0 100px;
        //NFT主体
        .nft-subject{
            .nft-img-container{
                grid-template-columns: 1fr 1fr 1fr;
                .nft-img{
                    background-size: 100% 100%;
                    height: 25vw;
                    padding: 2vw;
                    .img{
                        width: 20vw !important;
                    }
                }
            }
        }
    }
}
// 4K 和超宽屏幕
@media screen and (min-width:1904px){
}

</style>