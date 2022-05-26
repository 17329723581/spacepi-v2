<template>
    <div>
        <!-- lock-warehouses主体 -->
        <div class="lock-warehouse-subject">
            <!-- task容器 -->
            <v-container class="task-container">
                <div>
                    <!-- task标题主体 -->
                    <div class="task-subject wow spacepi-animation fade-right-in-left-animation">
                        <div class="task-line"></div>
                        <span class="task-title">SPACEPI ARMY DAILY TASKS</span>
                    </div>
                    <!-- task副标题 -->
                    <div class="task-vice wow spacepi-animation fade-right-in-left-animation">
                        OK! Here are some SpacePi Army missions! Let's take a few seconds to do the simple task!
                    </div>
                </div>
                <!-- task-card主体 -->
                <div class="task-card-subject">
                    <div class="task-card task-card-subject-b1 wow spacepi-animation fade-left-in-right-animation">
                        <!-- task-card标题 -->
                        <div class="task-card-title">
                            1.Click on CMC and tap the Good button! Also search for "SpacePi" on CMC as it keeps us hot!
                        </div>
                        <div class="task-line task-card-subject-b1"></div>
                        <!-- task-card主体 -->
                        <div class="task-card-subject">
                            <div class="task-card-icon">
                                <v-img src="@/assets/task/coinmarketcap.svg"></v-img>
                            </div>
                        </div>
                        <div class="task-line task-card-subject-b1"></div>
                        <!-- task链接主体 -->
                        <div class="task-url-subject">
                            <!-- task链接 -->
                            <div class="task-url task-card-subject-b1">
                                <span>https://coinmarketcap.com/currencies/spacepi/</span>
                            </div>
                            <!-- task按钮 -->
                            <div class="task-bnt task-bnt-b1">
                                <div class="task-bnt b03_skewed_slide_in "
                                    @click="spacepiTo('https://coinmarketcap.com/currencies/spacepi/')">
                                    <div>
                                        →
                                    </div>
                                    <div>
                                        →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="task-card task-card-subject-b2 wow spacepi-animation fade-right-in-left-animation">
                        <!-- task-card标题 -->
                        <div class="task-card-title">
                            2. Click on Coingecko and tap the Good button!
                        </div>
                        <div class="task-line task-card-subject-b2"></div>
                        <!-- task-card主体 -->
                        <div class="task-card-subject">
                            <div class="task-card-icon">
                                <v-img src="@/assets/task/coin.png"></v-img>
                            </div>
                        </div>
                        <div class="task-line task-card-subject-b2"></div>
                        <!-- task链接主体 -->
                        <div class="task-url-subject">
                            <!-- task链接 -->
                            <div class="task-url task-card-subject-b2">
                                <span>https://www.coingecko.com/en/coins/spacepi//</span>
                            </div>
                            <!-- task按钮 -->
                            <div class="task-bnt task-bnt-b2">
                                <div class="task-bnt b03_skewed_slide_in "
                                    @click="spacepiTo('https://www.coingecko.com/en/coins/spacepi/')">
                                    <div>
                                        →
                                    </div>
                                    <div>
                                        →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="task-card task-card-subject-b3 wow spacepi-animation fade-left-in-right-animation">
                        <!-- task-card标题 -->
                        <div class="task-card-title">
                            3. Click on Crypto and tap the Good button!
                        </div>
                        <div class="task-line task-card-subject-b3"></div>
                        <!-- task-card主体 -->
                        <div class="task-card-subject">
                            <div class="task-card-icon">
                                <v-img src="@/assets/task/cry.png"></v-img>
                            </div>
                        </div>
                        <div class="task-line task-card-subject-b3"></div>
                        <!-- task链接主体 -->
                        <div class="task-url-subject">
                            <!-- task链接 -->
                            <div class="task-url task-card-subject-b3">
                                <span>https://crypto.com/price/spacepi</span>
                            </div>
                            <!-- task按钮 -->
                            <div class="task-bnt task-bnt-b3">
                                <div class="task-bnt b03_skewed_slide_in"
                                    @click="spacepiTo('https://crypto.com/price/spacepi')">
                                    <div>
                                        →
                                    </div>
                                    <div>
                                        →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="task-card task-card-subject-b4 wow spacepi-animation fade-right-in-left-animation">
                        <!-- task-card标题 -->
                        <div class="task-card-title">
                            4. Click on Digitalcoinprice and tap the Good button!
                        </div>
                        <div class="task-line task-card-subject-b4"></div>
                        <!-- task-card主体 -->
                        <div class="task-card-subject">
                            <div class="task-card-icon">
                                <v-img src="@/assets/task/dig.png"></v-img>
                            </div>
                        </div>
                        <div class="task-line task-card-subject-b4"></div>
                        <!-- task链接主体 -->
                        <div class="task-url-subject">
                            <!-- task链接 -->
                            <div class="task-url task-card-subject-b4">
                                <span>https://digitalcoinprice.com/coins/spacepi/</span>
                            </div>
                            <!-- task按钮 -->
                            <div class="task-bnt task-bnt-b4">
                                <div class="task-bnt b03_skewed_slide_in"
                                    @click="spacepiTo('https://digitalcoinprice.com/coins/spacepi/')">
                                    <div>
                                        →
                                    </div>
                                    <div>
                                        →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="task-card task-card-subject-b5 wow spacepi-animation fade-left-in-right-animation">
                        <!-- task-card标题 -->
                        <div class="task-card-title">
                            5. Click on Dextools and tap on GREEN STAR ️
                        </div>
                        <div class="task-line task-card-subject-b5"></div>
                        <!-- task-card主体 -->
                        <div class="task-card-subject">
                            <div class="task-card-icon">
                                <v-img src="@/assets/task/dextools.png"></v-img>
                            </div>
                        </div>
                        <div class="task-line task-card-subject-b5"></div>
                        <!-- task链接主体 -->
                        <div class="task-url-subject">
                            <!-- task链接 -->
                            <div class="task-url task-card-subject-b5">
                                <span>https://www.dextools.io/app/bsc/pair-explorer/0x7f1b11a798273da438b4b132df1383d8387e73b4</span>
                            </div>
                            <!-- task按钮 -->
                            <div class="task-bnt task-bnt-b5">
                                <div class="task-bnt b03_skewed_slide_in"
                                    @click="spacepiTo('https://www.dextools.io/app/bsc/pair-explorer/0x7f1b11a798273da438b4b132df1383d8387e73b4')">
                                    <div>
                                        →
                                    </div>
                                    <div>
                                        →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="task-card task-card-subject-b6 wow spacepi-animation fade-right-in-left-animation">
                        <!-- task-card标题 -->
                        <div class="task-card-title">
                            6. Click on Certik and tap on Secure button! ️
                        </div>
                        <div class="task-line task-card-subject-b6"></div>
                        <!-- task-card主体 -->
                        <div class="task-card-subject">
                            <div class="task-card-icon">
                                <v-img src="@/assets/task/certik.png"></v-img>
                            </div>
                        </div>
                        <div class="task-line task-card-subject-b6"></div>
                        <!-- task链接主体 -->
                        <div class="task-url-subject">
                            <!-- task链接 -->
                            <div class="task-url task-card-subject-b6">
                                <span>https://www.certik.com/projects/spacepi</span>
                            </div>
                            <!-- task按钮 -->
                            <div class="task-bnt task-bnt-b6">
                                <div class="task-bnt b03_skewed_slide_in"
                                    @click="spacepiTo('https://www.certik.com/projects/spacepi')">
                                    <div>
                                        →
                                    </div>
                                    <div>
                                        →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-container>
            <!-- 底部 -->
            <foot></foot>
        </div>
    </div>
</template>
<script>
// 引入底部组件
import foot from "@/components/foot.vue";
export default {
    data() {
        return {

        };
    },
    components: {
        foot,
    },
    computed: {
    },
    created() {
        
    },
    methods: {
        // spacepi跳转
        spacepiTo(e) {
            window.open(e)
        },
    },
}
</script>
<style scoped lang="scss">
@import "@/scss/adaptation.scss";

// lock-warehouses主体
.lock-warehouse-subject {
    background: url("../../assets/task/bg.png") no-repeat;
    background-size: cover;
}

// task容器
.task-container {
    max-width: 1200px;
    padding-top: 255px;
    display: grid;
    grid-gap: 50px;
    padding-bottom: 150px;

    // task标题主体
    .task-subject {
        display: flex;
        align-items: center;
        grid-gap: 18px;

        .task-line {
            width: 6px;
            height: 48px;
            background: #FDD333;
        }

        .task-title {
            font-size: 60px;
            font-family: Fenton-Black, Fenton;
            font-weight: 900;
            color: #FFFFFF;
        }
    }

    // task副标题
    .task-vice {
        font-size: 20px;
        font-family: Fenton-Medium, Fenton;
        font-weight: 500;
        color: #FDD333;
    }

    .task-card-subject-b1 {
        border: 1px solid #3861FB;
    }

    .task-card-subject-b2 {
        border: 1px solid #8DC647;
    }

    .task-card-subject-b3 {
        border: 1px solid #1798F9;
    }

    .task-card-subject-b4 {
        border: 1px solid #F69A00;
    }

    .task-card-subject-b5 {
        border: 1px solid #02BED9;
    }

    .task-card-subject-b6 {
        border: 1px solid #E5453D;
    }

    // task-card主体
    .task-card-subject {
        display: grid;
        grid-gap: 36px;
        grid-template-columns: 1fr 1fr;

        .task-card {
            width: 582px;
            height: 250px;
            background: rgba(44, 29, 81, 0.5);
            padding: 23px;
            padding-top: 26px;
            padding-bottom: 26px;
            display: grid;
            grid-gap: 15px;

            // task-card标题
            .task-card-title {
                height: 51px;
                font-size: 20px;
                font-family: Fenton-Regular, Fenton;
                font-weight: 400;
                color: #B7C2D4;
            }

            .task-line {
                height: 1px;
                opacity: 0.5;
            }

            .task-card-subject {
                width: 100%;
                display: flex;
                justify-content: center;

                .task-card-icon {

                    .v-image {
                        width: 171px;
                        height: auto;
                    }
                }
            }

            // task链接主体
            .task-url-subject {
                width: 100%;
                display: flex;
                align-items: center;
                grid-gap: 10px;

                .task-url {
                    width: 100%;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    font-family: Fenton-Regular, Fenton;
                    font-weight: 400;
                    color: #B7C2D4;

                    span {
                        width: 260px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }

                .task-bnt-b1 {
                    background: #3861FB;
                }

                .task-bnt-b2 {
                    background: #8DC647;
                }

                .task-bnt-b3 {
                    background: #1798F9;
                }

                .task-bnt-b4 {
                    background: #F69A00;
                }

                .task-bnt-b5 {
                    background: #02BED9;
                }

                .task-bnt-b6 {
                    background: #E5453D;
                }

                .task-bnt {
                    width: 126px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    //transition: 1s;
                    box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -webkit-user-select: none;
                    border:0;
                }
                .task-bnt {
                    margin: 0;
                    border: 0;
                    font-size: 35px;
                    position: relative;
                    width: 126px;
                    height: 42px;
                    text-align: center;
                    box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -webkit-user-select: none;
                    cursor: default;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .task-bnt:hover {
                    cursor: pointer;
                }
                .b03_skewed_slide_in {
                    overflow: hidden;
                }
                .b03_skewed_slide_in div {
                    position: absolute;
                    text-align: center;
                    width: 100%;
                    height: 42px;
                    box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .b03_skewed_slide_in div:nth-child(1) {
                }
                .b03_skewed_slide_in div:nth-child(2) {
                    background-color: #FDD333;
                    width: 100%;
                    height: 42px;
                    transition: all 0.2s ease;
                    -webkit-transition: all 0.2s ease;
                    -moz-transition: all 0.2s ease;
                    transform: translate(-150px, 0px) skewX(0deg);
                    -webkit-transform: translate(-150px, 0px) skewX(0deg);
                    -moz-transform: translate(-150px, 0px) skewX(0deg);
                }
                .b03_skewed_slide_in:hover div:nth-child(2) {
                    transition: all 0.5s ease;
                    -webkit-transition: all 0.5s ease;
                    -moz-transition: all 0.5s ease;
                    transform: translate(0px, 0px) skewX(0deg);
                    -webkit-transform: translate(0px, 0px) skewX(0deg);
                    -moz-transform: translate(0px, 0px) skewX(0deg);
                }
                .b03_skewed_slide_in:hover div:nth-child(3) {
                    left: 0px;
                    transition: left 0.30000000000000004s ease;
                    -webkit-transition: left 0.30000000000000004s ease;
                    -moz-transition: left 0.30000000000000004s ease;
                }
            }
        }
    }
}


// 小型号到大型号的手机
@media screen and (max-width:600px) {

    // lock-warehouses主体
    .lock-warehouse-subject {
        background: url("../../assets/task/bgm.png") no-repeat;
        background-size: cover;
    }

    // task容器
    .task-container {
        padding-top: 150px;
        grid-gap: 25px;

        // task标题主体
        .task-subject {
            grid-gap: 10px;

            .task-line {
                width: 4px;
                height: 19px;
            }

            .task-title {
                font-size: 22px;
            }
        }

        // task副标题
        .task-vice {
            font-size: 18px;
        }

        // task-card主体
        .task-card-subject {
            grid-template-columns: 1fr;

            .task-card {
                width: 100%;
                height: auto;

                .task-card-title {
                    height: auto;
                }

                .task-url-subject {
                    .task-url {
                        width: 100%;
                        height: 42px;

                        span {
                            width: 200px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }

                    .task-bnt {
                        width: vw(160, 600);
                        height: 42px;
                    }
                }
            }
        }
    }
}

// 小型号到中型号的平板
@media screen and (min-width:600px) and (max-width:960px) {

    // lock-warehouses主体
    .lock-warehouse-subject {
        background: url("../../assets/task/bgm.png") no-repeat;
        background-size: cover;
    }

    // task容器
    .task-container {

        // task标题主体
        .task-subject {
            .task-line {
                height: 35px;
            }

            .task-title {
                font-size: 40px;
            }
        }

        // task-card主体
        .task-card-subject {
            grid-template-columns: 1fr;

            .task-card {
                width: 100%;
            }
        }
    }
}

// 小型号到中型号的平板
@media screen and (min-width:960px) and (max-width:1264px) {

    // task容器
    .task-container {

        // task-card主体
        .task-card-subject {
            grid-template-columns: 1fr;

            .task-card {
                width: 100%;
            }
        }
    }
}
</style>