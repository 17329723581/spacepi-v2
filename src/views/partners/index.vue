<template>
    <div>
        <!-- partners主体 -->
        <div class="spacepi_bg">
            <div class="partners-subject">
                <!-- partners容器 -->
                <v-container class="partners-container">
                    <!-- partners标题主体 -->
                    <div class="partners-title-subject wow spacepi-animation fade-right-in-left-animation">
                        <div class="line"></div>
                        <!-- partners标题 -->
                        <span class="partners-title">
                            <span>{{$t('partners_title1')}}</span>
                            <span>{{$t('partners_title2')}}</span>
                        </span>
                    </div>
                    <!-- partners内容 -->
                    <div class="partners-content wow spacepi-animation fade-out-min-in-max-animation">
                        {{$t('partners_text')}}
                    </div>
                    <!-- partners按钮主体 -->
                    <div class="partners-bnt-content wow spacepi-animation fade-in-up-animation">
                        <!-- partners按钮1 -->
                        <div class="partners-bnt1 p">{{$t('partners_email_title')}}</div>
                        <div class="partners-bnt1-s m">{{$t('partners_email_title')}}</div>
                        <!-- partners按钮2 -->
                        <div class="partners-bnt2" v-clipboard:copy="$t('partners_email')" v-clipboard:success="onCopy">
                            <span>{{$t('partners_email')}}</span>
                            <div class="partners-copy">
                                <v-img src="@/assets/partners-copy.png"></v-img>
                            </div>
                        </div>
                    </div>
                </v-container>
            </div>
        </div>
        <!-- 电报 -->
        <div class="spacepi_bg">
            <telegraph></telegraph>
        </div>
        <!-- friendship合作商容器 -->
        <div class="spacepi_bg">
            <v-container class="friendship-partner-container">
                <!-- friendship合作商主体 -->
                <div class="friendship-partner-subject" v-for="(item,index) in array" :key="index">
                    <!-- friendship合作商标题主体 -->
                    <div class="friendship-partner-title-subject wow spacepi-animation fade-right-in-left-animation">
                        <div class="line"></div>
                        <!-- friendship合作商标题 -->
                        <div class="friendship-partner-title">
                            {{item[locale]}}
                        </div>
                    </div>
                    <!-- friendship合作商广告位 -->
                    <div class="friendship-partner-adsense wow spacepi-animation fade-in-up-animation">
                        <template v-for="i in data">
                            <v-img :src="i.picture"   v-if="item.id == i.p_id" @click="to(i.link)"></v-img>
                        </template>
                        <!-- <v-img src="@/assets/test-partner-adsense.svg" ></v-img>
                        <v-img src="@/assets/test-partner-adsense.svg" ></v-img>
                        <v-img src="@/assets/test-partner-adsense.svg" ></v-img>
                        <v-img src="@/assets/test-partner-adsense.svg" ></v-img>
                        <v-img src="@/assets/test-partner-adsense.svg" ></v-img>
                        <v-img src="@/assets/test-partner-adsense.svg" ></v-img>
                        <v-img src="@/assets/test-partner-adsense.svg" ></v-img>
                        <v-img src="@/assets/test-partner-adsense.svg" ></v-img>
                        <v-img src="@/assets/test-partner-adsense.svg" ></v-img>
                        <v-img src="@/assets/test-partner-adsense.svg" ></v-img>
                        <v-img src="@/assets/test-partner-adsense.svg" ></v-img> -->
                    </div>
                </div>
            </v-container>
        </div>
        <!-- 底部 -->
        <foot></foot>
    </div>
</template>
<script>
// 引入电报组件
import telegraph from "@/components/telegraph.vue";
// 引入底部组件
import foot from "@/components/foot.vue";
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            array: [],
            data: [],
        };
    },
    components: {
        telegraph,
        foot,
    },
    computed: {
        ...mapState([
            "domainUrl",
            "locale"
        ]),
    },
    created() {
        setTimeout(this.location(),1);
    },
    methods: {
        location() {
            this.partnersC();
            this.partners();
        },
        //获取友情合作商分类数据
        partnersC() {
            var _this = this;
            axios.post(this.domainUrl + "partnersList").then(function (response) {
                _this.array = response.data.data;
            }).catch(function (error) {
                //     // 请求失败处理
            });
        },
        //获取友情合作商链接
        partners() {
            var _this = this;
            axios.post(this.domainUrl + "Partners").then(function (response) {
                _this.data = response.data.data;
            }).catch(function (error) {
                //     // 请求失败处理
            });
        },
        //跳转外部浏览器
        to(e) {
            window.open(e)
        },
        // 复制
		onCopy(e) {
			// alert(e.text);
			//this.$message.success(this.$t("copySuccess"));
            //this.setAlert('alert',true,this.$t("alerts.copy_success"),"success");
            this.$store.commit("setAlert", {status:true,text:this.$t("copySuccess"),type:"success"});
            setTimeout(()=>{
                this.$store.commit("setAlert", {status:false,text:"",type:""});
            },2000)
		},
    },
}
</script>
<style scoped lang="scss">
@import "@/scss/adaptation.scss";

.m {
    display: none;
}

.spacepi_bg {
    background-image: url("../../assets/spacepi_bg.png");
}

// partners主体
.partners-subject {
    background: url("../../assets/partners-bg.png") no-repeat;
    background-size: cover;
    height: 1027px;
    display: flex;
    align-items: center;

    // partners容器
    .partners-container {
        max-width: 1500px;
        display: grid;
        align-items: center;
        grid-gap: 25px;
        position: relative;
        padding-top: 200px;

        // partners标题主体
        .partners-title-subject {
            display: flex;
            align-items: center;
            grid-gap: 20px;

            .line {
                width: 6px;
                height: 102px;
                background: #FDD333;
            }

            // partners标题
            .partners-title {
                font-size: 50px;
                font-family: Fenton-Black, Fenton;
                font-weight: 900;
                color: #FFFFFF;
                display: grid;
            }
        }

        // partners内容
        .partners-content {
            max-width: 926px;
            font-size: 20px;
            font-family: Fenton-Medium, Fenton;
            font-weight: 500;
            color: #FDD333;
        }

        // partners按钮主体
        .partners-bnt-content {
            display: flex;
            grid-gap: 10px;
            font-size: 26px;
            font-family: Fenton-Medium;
            font-weight: 500;

            // partners按钮1
            .partners-bnt1 {
                font-size: 22px;
                background: url("../../assets/partners-bnt-y.png") no-repeat;
                background-size: contain;
                color: #160F26;
                width: 378.65px;
                height: 65px;
                display: flex;
                justify-content: center;
                align-items: center;

            }

            // partners按钮2
            .partners-bnt2 {
                background: rgba(44, 29, 81, 0.5);
                background: url("../../assets/partners-bnt-r.png") no-repeat;
                background-size: 100% 100%;
                color: #FFFFFF;
                height: 65px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 378.65px;
                margin-left: -40px;

                .partners-copy {
                    width: 20px;
                    margin-left: 10px;
                }
            }
        }

        // partnersLine
        .partners-line {
            width: 793px;
            height: 6px;
            background: #FDD333;
            position: absolute;
            bottom: -100px;
            right: 0;
        }
    }
}

// telegraph容器
.telegraph-container {
    max-width: 1500px;
    display: grid;
    grid-gap: 100px;

    // telegraph标题主体
    .telegram-title-subject {
        display: flex;
        grid-gap: 20px;
        align-items: center;

        .line {
            width: 6px;
            height: 44px;
            background: #FDD333;
        }

        // telegraph标题
        .telegraph-title {
            font-size: 60px;
            font-family: Fenton-Black;
            font-weight: 900;
            color: #FFFFFF;
        }
    }

    // telegraph宫格
    .telegraph-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 30px;
    }
}

// friendship合作商容器
.friendship-partner-container {
    max-width: 1500px;
    display: grid;
    margin-bottom: 80px;

    // friendship合作商主体
    .friendship-partner-subject {
        display: grid;
        grid-gap: 80px;

        // friendship合作商标题主体
        .friendship-partner-title-subject {
            margin-top: 150px;
            display: flex;
            grid-gap: 20px;
            align-items: center;

            .line {
                width: 6px;
                height: 44px;
                background: #FDD333;
            }

            // friendship合作商标题
            .friendship-partner-title {
                font-size: 50px;
                font-family: Fenton-Black, Fenton;
                font-weight: 900;
                color: #FFFFFF;
            }
        }

        // friendship合作商广告位
        .friendship-partner-adsense {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 10px;
        }
    }
}

// 小型号到大型号的手机
@media screen and (max-width:600px) {
    .m {
        display: block;
    }

    .pc {
        display: none;
    }

    // telegraph容器
    .telegraph-container {
        grid-gap: 25px;

        // telegraph宫格
        .telegraph-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    // friendship合作商容器
    .friendship-partner-container {

        // friendship合作商主体
        .friendship-partner-subject {
            grid-gap: 20px;

            // friendship合作商标题主体
            .friendship-partner-title-subject {
                grid-gap: 10px;
                margin-top: 50px;

                .line {
                    width: 3px;
                    height: 19px;
                    background: #FDD333;
                }

                // friendship合作商标题
                .friendship-partner-title {
                    font-size: 20px;
                }
            }

            // friendship合作商广告位
            .friendship-partner-adsense {
                grid-template-columns: 1fr 1fr;
            }
        }
    }

    // partners主体
    .partners-subject {
        background: url("../../assets/partners-bg-m.png") no-repeat;
        background-size: contain;
        height: auto;

        // partners容器
        .partners-container {
            padding-top: 235px;

            // partners标题主体
            .partners-title-subject {
                grid-gap: 10px;

                .line {
                    width: 4px;
                    height: 50px;
                    background: #FDD333;
                }

                // partners标题
                .partners-title {
                    font-size: 20px;
                }
            }

            // partners内容
            .partners-content {
                font-size: 14px;
            }

            // partners按钮主体
            .partners-bnt-content {
                display: grid;

                // partners按钮1
                .partners-bnt1 {
                    display: none;
                }

                .partners-bnt1-s {
                    font-size: 16px;
                    display: flex;
                    height: 30px;
                    color: rgba(255, 255, 255, 0.8);
                    justify-content: center;
                    align-items: center;
                }

                // partners按钮2
                .partners-bnt2 {
                    font-size: 16px;
                    background: url("../../assets/partners-bnt-copy.png");
                    background-size: 100% 100%;
                    border-radius: 0;
                    color: #FDD333;
                    font-family: Fenton-Light;
                    margin-left: 0px;
                    width: 100%;

                    .partners-copy {
                        margin-left: 28px;
                    }
                }
            }
        }
    }
}

// 小型号到中型号的平板
@media screen and (min-width:600px) and (max-width:960px) {
    .m {
        display: block;
    }

    .pc {
        display: none;
    }

    // telegraph容器
    .telegraph-container {

        // telegraph宫格
        .telegraph-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    // friendship合作商容器
    .friendship-partner-container {

        // friendship合作商主体
        .friendship-partner-subject {

            // friendship合作商广告位
            .friendship-partner-adsense {
                grid-template-columns: 1fr 1fr;
            }
        }
    }

    // partners主体
    .partners-subject {
        background: url("../../assets/partners-bg-m.png") no-repeat;
        background-size: contain;

        // partners容器
        .partners-container {

            // partners标题主体
            .partners-title-subject {
                .line {
                    width: vw(6, 960);
                    ;
                    height: vw(102, 960);
                }

                // partners标题
                .partners-title {
                    font-size: vw(50, 960);
                }
            }

            // partners按钮主体
            .partners-bnt-content {
                display: grid;

                // partners按钮1
                .partners-bnt1 {
                    display: none;
                }

                .partners-bnt1-s {
                    font-size: 25px;
                    display: flex;
                    height: 50px;
                    color: rgba(255, 255, 255, 0.8);
                    justify-content: left;
                    align-items: center;
                }

                // partners按钮2
                .partners-bnt2 {
                    font-size: 30px;
                    background: url("../../assets/partners-bnt-copy.png");
                    background-size: 100% 100%;
                    border-radius: 0;
                    color: #FDD333;
                    font-family: Fenton-Light;
                    margin-left: 0px;
                    width: 100%;
                    height: 80px;

                    .partners-copy {
                        margin-left: 28px;
                    }
                }
            }
        }
    }
}

// 小型号到中型号的平板
@media screen and (min-width:960px) and (max-width:1264px) {

    // telegraph容器
    .telegraph-container {

        // telegraph宫格
        .telegraph-grid {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
    }

    // friendship合作商主体
    .friendship-partner-container {

        // friendship合作商主体
        .friendship-partner-subject {

            // friendship合作商广告位
            .friendship-partner-adsense {
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
        }
    }

    // partners主体
    .partners-subject {
        background-size: contain;
    }
}

// 桌面端
@media screen and (min-width:1264px) and (max-width:1904px) {

    // partners主体
    .partners-subject {
        background-size: contain;
    }
}

// 4K 和超宽屏幕
@media screen and (min-width:1904px) {}
</style>