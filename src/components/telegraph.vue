<template>
    <!-- telegraph容器 -->
    <v-container class="telegraph-container">
        <!-- telegraph标题主体 -->
        <div class="telegram-title-subject concept-content wow spacepi-animation fade-right-in-left-animation">
            <div class="line"></div>
            <!-- telegraph标题 -->
            <span class="telegraph-title">{{ $t('telegraph') }}</span>
        </div>
        <!-- telegraph宫格 -->
        <div class="telegraph-grid concept-content wow spacepi-animation fade-in-up-animation">
            <div class="telegraph-grid-subject p" v-for="(item, index) in telegraph" :key="index">
                <a @click="to(item.link)">
                    <v-img :src="item.picture"></v-img>
                </a>
            </div>
            <template v-for="(item, index) in telegraph" v-if="telegraphStatus == false">
                <div class="telegraph-grid-subject m" v-if="index < 6">
                    <a @click="to(item.link)">
                        <v-img :src="item.m_picture" @click="to(item.link)"></v-img>
                    </a>
                </div>
            </template>
            <template v-for="(item, index) in telegraph" v-if="telegraphStatus == true">
                <div class="telegraph-grid-subject m">
                    <a @click="to(item.link)">
                        <v-img :src="item.m_picture" @click="to(item.link)"></v-img>
                    </a>
                </div>
            </template>
            <div v-if="telegraphStatus == false" class="m">
                <v-btn @click="telegraphStatus = true" class="more-m" style="background: rgba(22, 15, 38, 0);">
                    <span>{{ $t('telegraph_more') }}</span>
                    <div class="more-telegrams-add">
                        <v-img src="@/assets/more-telegrams-add.png"></v-img>
                    </div>
                </v-btn>
            </div>
        </div>
    </v-container>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            telegraph: [],
            telegraphStatus: false,
        };
    },
    props: {},
    computed: {
        ...mapState([
            "domainUrl",
            "locale"
        ]),
    },
    watch: {},
    components: {},
    created() {
        setTimeout(this.location(), 1)
    },
    mounted() {

    },
    methods: {
        location() {
            this.getspacepiTelegraph();
        },
        to(e) {
            window.open(e)
        },
        //获取电报
        getspacepiTelegraph() {
            var _this = this;
            axios.post(this.domainUrl + "telegraph", {}).then(function (response) {
                _this.telegraph = response.data.data;
            }).catch(function (error) {
                //     // 请求失败处理
            });
        }
    },
};
</script>
<style scoped lang="scss">
@import "@/scss/adaptation.scss";

// telegraph容器
.telegraph-container {
    max-width: 1500px;
    display: grid;
    grid-gap: 100px;

    // telegraph标题主体
    .telegram-title-subject {
        display: flex;
        grid-gap: 25px;
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
        .m {
            display: none;
        }

        .p {
            display: block;
        }

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 25px;

        .telegraph-grid-subject {
            width: 200px;
        }
    }
}

.more-m {
    width: 100%;
    height: 40px;
    border-radius: 0px 0px 0px 0px;
    border: 1px solid rgba(253, 211, 51, 0.8);
    font-size: 16px;
    font-family: Fenton-Regular, Fenton;
    font-weight: 400;
    display: flex;
    align-items: center;

    span {
        color: #FDD333;
    }

    .more-telegrams-add {
        margin-left: 15px;
        width: 8px;
    }
}

// 小型号到大型号的手机
@media screen and (max-width:600px) {
    $width: 600;

    // telegraph容器
    .telegraph-container {

        // telegraph标题主体
        .telegram-title-subject {
            grid-gap: 10px;

            .line {
                width: 3px;
                height: 19px;
            }

            // telegraph标题
            .telegraph-title {
                font-size: 22px;
            }
        }

        // telegraph宫格
        .telegraph-grid {
            .m {
                display: block;
            }

            .p {
                display: none;
            }

            grid-template-columns: 1fr;
            grid-gap: 10px;

            .telegraph-grid-subject {
                width: 100%;
                background: rgba(44, 29, 81, 0.5);
                border: 1px solid #FDD333;
            }
        }
    }
}

// 小型号到中型号的平板
@media screen and (min-width:600px) and (max-width:960px) {
    $width: 960;

    // telegraph容器
    .telegraph-container {

        // telegraph标题主体
        .telegram-title-subject {
            .line {
                height: vw(44, $width);
            }

            // telegraph标题
            .telegraph-title {
                font-size: vw(60, $width);
            }
        }

        // telegraph宫格
        .telegraph-grid {
            grid-template-columns: 1fr 1fr;

            .telegraph-grid-subject {
                width: 100%;

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
            grid-template-columns: 1fr 1fr 1fr 1fr;

            .telegraph-grid-subject {
                //width: 100%;
            }
        }
    }
}

// 桌面端
@media screen and (min-width:1264px) and (max-width:1904px) {

    // telegraph容器
    .telegraph-container {

        // telegraph宫格
        .telegraph-grid {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

            .telegraph-grid-subject {
                //width: 100%;
            }
        }
    }
}

// 4K 和超宽屏幕
@media screen and (min-width:1904px) {}
</style>