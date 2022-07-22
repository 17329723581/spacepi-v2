<template>
    <div>
        <!-- lock-warehouses主体 -->
        <div class="lock-warehouse-subject">
            <!-- spacepi/wbnb容器 -->
            <v-container class="wbnb-container">
                <!-- spacepi/wbnb标题主体 -->
                <div class="wbnb-title-subject wow spacepi-animation fade-right-in-left-animation">
                    <div class="wbnb-line"></div>
                    <span class="wbnb-title">SPACEPI<span class="wbnb-title-line">/</span>WBNB</span>
                </div>
                <!-- lock主体 -->
                <div class="lock-subject wow spacepi-animation fade-in-up-animation">
                    <!-- lock图片 -->
                    <div class="lock-img">
                        <v-img src="@/assets/spacepi-lock/spacepi-lock.png"></v-img>
                    </div>
                    <!-- lock时间 -->
                    <span class="lock-time">{{ lockTime }}</span>
                    <!-- lock时间标题 -->
                    <span class="lock-time-title">Lock Timer</span>
                    <div class="lock-line"></div>
                    <!-- lock通用主体 -->
                    <div class="lock-public-subject">
                        <!-- Total Supply of LP -->
                        <div class="lock-public-s">
                            <span class="lock-public-title">Total Supply of LP</span>
                            <span class="lock-public-text">23780.324316926395</span>
                        </div>
                        <!-- LP in Locker (96%) -->
                        <div class="lock-public-s">
                            <span class="lock-public-title">LP in Locker (96%)</span>
                            <span class="lock-public-text">22836.8</span>
                        </div>
                        <!-- Unlock Date -->
                        <div class="lock-public-s">
                            <span class="lock-public-title">Unlock Date</span>
                            <span class="lock-public-text">14 Mar 2023 at 00:00</span>
                        </div>
                        <!-- # Lockers -->
                        <div class="lock-public-s">
                            <span class="lock-public-title"># Lockers</span>
                            <span class="lock-public-text">1</span>
                        </div>
                    </div>
                </div>
            </v-container>
            <!-- spacepi-address容器 -->
            <v-container class="spacepi-address-container">
                <!-- spacepi-address主体 -->
                <div class="spacepi-address-subject wow spacepi-animation fade-in-up-animation">
                    <span class="spacepi-address pc">0xFCC43c2f154b2286CDDe879Ab7664653D351fC3D</span>
                    <span class="spacepi-address mo">0xFCC...fC3D</span>
                    <span class="spacepi-i">is the Owner</span>
                </div>
            </v-container>
            <!-- spacepi-按钮容器 -->
            <v-container class="spacepi-bnt-container bnt-animation wow spacepi-animation fade-in-up-animation">
                <div class="button_base b05_3d_roll"
                    @click="spacepiTo('https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x7f1b11a798273dA438b4b132dF1383d8387e73b4&type=lplock&chain=BSC')">
                    <div>
                        →
                    </div>
                    <div>
                        →
                    </div>
                </div>
            </v-container>
            <!-- info容器 -->
            <v-container class="info-container">
                <!-- info主体 -->
                <div class="info-subject wow spacepi-animation fade-right-in-left-animation">
                    <!-- info内容 -->
                    <span class="info-text">for PiNetwork & Elon Musk & SpacePi Team</span>
                    <!-- info标题主体 -->
                    <div class="info-title-subject">
                        <div class="info-line"></div>
                        <div class="info-title">SPACEPI LOCKED</div>
                    </div>
                </div>
                <!-- info-contract主体 -->
                <div class="info-contract-subject">
                    <!-- contract-car -->
                    <div class="contract-car wow spacepi-animation fade-in-up-animation" v-for="(item, index) in info"
                        :key="index">
                        <!-- contract头部 -->
                        <div class="contract-head">
                            <div class="contract-head-l">
                                <span class="contract-head1">{{ index + 1 }}</span>
                                <div class="contract-head2">
                                    <v-img src="@/assets/spacepi-lock/contract.png"></v-img>
                                </div>
                                <div class="contract-head3">
                                    <v-img src="@/assets/spacepi-lock/lock.png"></v-img>
                                </div>
                                <span class="contract-head4">{{ item.address }}</span>
                            </div>
                            <div class="contract-head-r">
                                <span class="contract-head5">{{ item.percentage }}</span>
                            </div>
                        </div>
                        <!-- contract内容 -->
                        <div class="contract-content">
                            <span class="contract1">LOCKED DETAILS</span>
                            <span class="contract2">No1: {{ item.spacePi }} SpacePi</span>
                            <div class="contract3">
                                <span class="contract-y">Start<span class="contract-span-w">/</span>Update</span>
                                <div class="contract-time">
                                    <div>Time: <span class="contract-span">{{ item.startTime }}</span> (UTC-8)</div>
                                    <div> End Time: <span class="contract-span">{{ item.endTime }}</span> (UTC-8)</div>
                                </div>
                            </div>
                            <div class="contract4">
                                <div class="contract-bnt" @click="spacepiTo(item.url)">
                                    <div class="contract-img">
                                        <v-img class="icon" src="@/assets/arrow_ right.png"></v-img>
                                        <v-img class="icon-h" src="@/assets/arrow_ right-h.png"></v-img>
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
            lockTime: "",
            info: [{
                address: "0x06...28b7",
                spacePi: "150000000000000.00",
                startTime: "2022-03-18 06:49:22",
                endTime: "2023-06-27 03:14:00",
                percentage: "7.50%",
                url: "https://dxsale.app/app/v3_3/dxlockview?id=0&add=0x69b14e8D3CEBfDD8196Bfe530954A0C226E5008E&type=tokenlock&chain=BSC"
            }, {
                address: "0x43...36df",
                spacePi: "150000000000000.00",
                startTime: "2022-03-18 06:53:49",
                endTime: "2023-06-27 03:14:00",
                percentage: "7.50%",
                url: "https://dxsale.app/app/v3_3/dxlockview?id=1&add=0x69b14e8D3CEBfDD8196Bfe530954A0C226E5008E&type=tokenlock&chain=BSC"
            }, {
                address: "0xcd...b30d",
                spacePi: "20000000000000.00",
                startTime: "2022-04-07 05:40:09",
                endTime: "2023-01-08 03:14:00",
                percentage: "1%",
                url: "https://dxsale.app/app/v3_3/dxlockview?id=4&add=0x69b14e8D3CEBfDD8196Bfe530954A0C226E5008E&type=tokenlock&chain=BSC"
            }, {
                address: "0x33...7c5b",
                spacePi: "20000000000000.00",
                startTime: "2022-04-07 05:45:30",
                endTime: "2023-04-08 03:14:00",
                percentage: "1%",
                url: "https://dxsale.app/app/v3_3/dxlockview?id=5&add=0x69b14e8D3CEBfDD8196Bfe530954A0C226E5008E&type=tokenlock&chain=BSC"
            }, {
                address: "0x2d...540f",
                spacePi: "20000000000000.00",
                startTime: "2022-04-07 05:34:21",
                endTime: "2022-10-08 03:14:00",
                percentage: "1%",
                url: "https://dxsale.app/app/v3_3/dxlockview?id=3&add=0x69b14e8D3CEBfDD8196Bfe530954A0C226E5008E&type=tokenlock&chain=BSC"
            },
            {
                address: "0x7c...a9b5",
                spacePi: "20000000000000.00",
                startTime: "2022-04-07 05:28:57",
                endTime: "2022-07-08 03:14:00",
                percentage: "1%",
                url: "https://dxsale.app/app/v3_3/dxlockview?id=2&add=0x69b14e8D3CEBfDD8196Bfe530954A0C226E5008E&type=tokenlock&chain=BSC"
            }]
        };
    },
    components: {
        foot,
    },
    computed: {
    },
    created() {
        setInterval(() => {
            this.lock_count_down();
        }, 1000)
    },
    methods: {
        // 锁仓倒计时
        lock_count_down() {
            var nowtime = new Date(); //获取当前时间
            var endtime = new Date("2023/03/14");  //定义结束时间
            var lefttime = endtime.getTime() - nowtime.getTime();  //距离结束时间的毫秒数
            var leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24));  //计算天数
            var lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24);  //计算小时数
            var leftm = Math.floor(lefttime / (1000 * 60) % 60);  //计算分钟数
            var lefts = Math.floor(lefttime / 1000 % 60);  //计算秒数
            if (nowtime >= endtime) {
                this.lockTime = "000:00:00:00";
            } else {
                this.lockTime = leftd + ":" + lefth + ":" + leftm + ":" + lefts;
            }
        },
        // spacepi跳转
        spacepiTo(e) {
            window.open(e)
        },
    },
}
</script>
<style scoped lang="scss">
@import "@/scss/adaptation.scss";

.pc {
    display: block;
}

.mo {
    display: none;
}

// lock-warehouses主体
.lock-warehouse-subject {
    background: url("../../assets/spacepi-lock/bg.png") no-repeat;
    background-size: cover;
}

// spacepi/wbnb容器
.wbnb-container {
    max-width: 1200px;
    padding-top: 255px;
    display: grid;
    grid-gap: 84px;

    // spacepi/wbnb标题主体
    .wbnb-title-subject {
        display: flex;
        grid-gap: 18px;
        align-items: center;

        .wbnb-line {
            width: 6px;
            height: 48px;
            background: #FDD333;
        }

        .wbnb-title {
            font-size: 60px;
            font-family: Fenton-Black;
            font-weight: 900;
            color: #FFFFFF;

            .wbnb-title-line {
                color: #FDD333;
            }
        }
    }

    // lock主体
    .lock-subject {
        width: 100%;
        height: auto;
        background: rgba(44, 29, 81, 0.5);
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
        border: 1px solid #FDD333;
        padding: 50px;
        display: grid;
        //grid-gap: 10px;
        justify-items: center;

        // lock图片
        .lock-img {
            width: 125px;
            height: 188px;
        }

        // lock时间
        .lock-time {
            font-size: 40px;
            font-family: Fenton-Bold, Fenton;
            font-weight: bold;
            color: #FFFFFF;
        }

        // lock时间标题
        .lock-time-title {
            font-size: 30px;
            font-family: Fenton-Regular, Fenton;
            font-weight: 400;
            color: #FDD333;
        }

        .lock-line {
            margin-top: 25px;
            width: 100%;
            opacity: 0.5;
            border: 1px solid #FDD333;
        }

        // lock通用主体
        .lock-public-subject {
            margin-top: 25px;
            width: 100%;
            display: grid;
            grid-gap: 25px;

            .lock-public-s {
                font-size: 26px;
                font-family: Fenton-Regular, Fenton;
                font-weight: 400;
                color: #B7C2D4;
                display: grid;
                grid-template-columns: 1fr 1fr;

                .lock-time-title {
                    display: flex;
                    justify-content: flex-start;
                }

                .lock-public-text {
                    display: flex;
                    justify-content: flex-end;
                }
            }
        }
    }
}

// spacepi-address容器
.spacepi-address-container {
    max-width: 1200px;

    //spacepi-address主体
    .spacepi-address-subject {
        width: 100%;
        height: 93px;
        background: rgba(44, 29, 81, 0.5);
        border: 1px solid #FDD333;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 20px;
        font-size: 26px;

        .spacepi-address {
            font-family: Fenton-Bold, Fenton;
            font-weight: bold;
            color: #1BC57C;
        }

        .spacepi-i {
            font-family: Fenton-Regular, Fenton;
            font-weight: 400;
            color: #FDD333;
        }

    }
}

// spacepi-按钮容器
.spacepi-bnt-container {
    max-width: 1200px;
    display: flex;
    justify-content: center;

    .spacepi-bnt {
        width: 210px;
        height: 50px;
        background: rgba(44, 29, 81, 0.5);
        border: 1px solid #FDD333;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;


        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-user-select: none;
    }

    .button_base {
        margin: 0;
        border: 0;
        font-size: 30px;
        font-weight: bold;
        position: relative;
        width: 200px;
        height: 50px;
        text-align: center;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-user-select: none;
        display: flex;
        cursor: default;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button_base:hover {
        cursor: pointer;
    }

    .b05_3d_roll {
        perspective: 500px;
        -webkit-perspective: 500px;
        -moz-perspective: 500px;
    }

    .b05_3d_roll div {
        position: absolute;
        text-align: center;
        width: 200px;
        height: 50px;
        padding: 10px;
        border: #000000 solid 1px;
        pointer-events: none;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        color: #FFFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .b05_3d_roll div:nth-child(1) {
        background-color: #000000;
        transform: rotateX(90deg);
        -webkit-transform: rotateX(90deg);
        -moz-transform: rotateX(90deg);
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transform-origin: 50% 50% -25px;
        -webkit-transform-origin: 50% 50% -25px;
        -moz-transform-origin: 50% 50% -25px;
    }

    .b05_3d_roll div:nth-child(2) {
        background: rgba(44, 29, 81, 0.5);
        border: 1px solid #FDD333;
        transform: rotateX(0deg);
        -webkit-transform: rotateX(0deg);
        -moz-transform: rotateX(0deg);
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transform-origin: 50% 50% -25px;
        -webkit-transform-origin: 50% 50% -25px;
        -moz-transform-origin: 50% 50% -25px;
    }

    .b05_3d_roll:hover div:nth-child(1) {
        background: #FDD333;
        border: 0;
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transform: rotateX(0deg);
        -webkit-transform: rotateX(0deg);
        -moz-transform: rotateX(0deg);
    }

    .b05_3d_roll:hover div:nth-child(2) {
        background: #FDD333;
        border: 0;
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transform: rotateX(-90deg);
        -webkit-transform: rotateX(-90deg);
        -moz-transform: rotateX(-90deg);
    }
}

// info容器
.info-container {
    margin-top: 225px;
    max-width: 1200px;
    padding-bottom: 100px;

    // info主体
    .info-subject {
        display: grid;

        // info内容
        .info-text {
            font-size: 26px;
            font-family: Fenton-Black, Fenton;
            font-weight: 900;
            color: #FDD333;
            padding-left: 28px;
        }

        // info标题主体
        .info-title-subject {
            display: flex;
            grid-gap: 18px;
            align-items: center;

            .info-line {
                width: 6px;
                height: 44px;
                background: #FDD333;
                opacity: 1;
            }

            .info-title {
                font-size: 60px;
                font-family: Fenton-Black, Fenton;
                font-weight: 900;
                color: #FFFFFF;
            }
        }
    }

    // info-contract主体
    .info-contract-subject {
        margin-top: 84px;
        display: grid;
        grid-gap: 44px;

        // contract-car
        .contract-car {
            display: grid;
            grid-gap: 8px;

            // contract头部
            .contract-head {
                width: 100%;
                height: 57px;
                background: #FDD333;
                padding-left: 50px;
                padding-right: 50px;
                align-items: center;
                display: grid;
                grid-template-columns: 1fr 1fr;

                .contract-head-l {
                    display: flex;
                    grid-gap: 20px;
                    align-items: center;

                    .contract-head1 {
                        font-size: 26px;
                        font-family: Fenton-Bold;
                        font-weight: bold;
                        color: #1E0A4D;
                    }

                    .contract-head2 {
                        width: 20px;
                        height: 26px;
                    }

                    .contract-head3 {
                        width: 20px;
                        height: 26px;
                    }

                    .contract-head4 {
                        font-size: 26px;
                        font-family: Fenton-Bold;
                        font-weight: bold;
                        color: #1E0A4D;
                    }
                }

                .contract-head-r {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    .contract-head5 {
                        font-size: 26px;
                        font-family: Fenton-Bold, Fenton;
                        font-weight: bold;
                        color: #1E0A4D;
                        display: flex;
                        justify-content: flex-end;
                    }
                }
            }

            // contract内容
            .contract-content {
                width: 100%;
                background: rgba(44, 29, 81, 0.5);
                border: 1px solid #FDD333;
                padding-top: 40px;
                padding-bottom: 40px;
                padding-left: 50px;
                padding-right: 50px;
                display: grid;
                font-family: Fenton-Regular;
                color: rgba(255, 255, 255, 0.8);
                font-size: 26px;
                grid-gap: 23px;
                font-weight: 400;

                .contract1 {}

                .contract2 {
                    font-size: 34px;
                }

                .contract3 {
                    display: flex;
                    grid-gap: 23px;
                    font-size: 20px;

                    .contract-y {
                        color: #FDD333;
                    }

                    .contract-span-w {
                        color: rgba(255, 255, 255, 0.8);
                    }

                    .contract-span {
                        color: #FDD333;
                    }

                    .contract-time {

                        display: flex;
                        grid-gap: 23px;
                    }
                }

                .contract4 {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;

                    .contract-bnt {
                        cursor: pointer;
                        transition: 0.5s;
                        width: 265px;
                        height: 56px;
                        background: #FDD333;
                        clip-path: polygon(0 0, 100% 0, 100% 75%, 95% 100%, 0 100%);
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .contract-img {
                            width: 33px;
                            height: 20px;

                            .icon {
                                display: block;
                            }

                            .icon-h {
                                display: none;
                            }
                        }
                    }

                    .contract-bnt:hover {
                        transition: 0.5s;
                        background: rgba(44, 29, 81, 0.5);

                        .icon {
                            display: none;
                        }

                        .icon-h {
                            display: block;
                        }
                    }
                }
            }
        }
    }
}

// 小型号到大型号的手机
@media screen and (max-width:600px) {

    // lock-warehouses主体
    .lock-warehouse-subject {
        background: url("../../assets/spacepi-lock/bg.png") no-repeat;
        background-size: contain;
    }

    .pc {
        display: none;
    }

    .mo {
        display: block;
    }

    // spacepi/wbnb容器
    .wbnb-container {
        padding-top: 125px;
        grid-gap: 25px;

        // spacepi/wbnb标题主体
        .wbnb-title-subject {
            grid-gap: 10px;

            .wbnb-line {
                width: 3px;
                height: 19px;
            }

            .wbnb-title {
                font-size: 20px;
            }
        }

        // lock主体
        .lock-subject {
            padding: 25px;

            // lock图片
            .lock-img {
                width: vw(125, 600);
                height: vw(188, 600);
            }

            // lock时间
            .lock-time {
                font-size: vw(50, 600);
            }

            // lock时间标题
            .lock-time-title {
                font-size: vw(40, 600);
            }

            // lock通用主体
            .lock-public-subject {
                .lock-public-s {
                    width: 100%;
                    font-size: 20px;
                    grid-template-columns: 1fr;
                    text-align: center;

                    .lock-public-title {
                        color: #ffffff;
                    }

                    .lock-public-text {
                        display: contents;
                        width: 100%;
                        justify-content: flex-start;
                    }
                }
            }
        }
    }

    // spacepi-address容器
    .spacepi-address-container {

        //spacepi-address主体
        .spacepi-address-subject {
            height: 60px;
            font-size: 18px;
            grid-gap: 15px;
        }
    }

    // info容器
    .info-container {
        margin-top: 125px;

        // info主体
        .info-subject {

            // info内容
            .info-text {
                font-size: 12px;
                padding-left: 14px;
            }

            // info标题主体
            .info-title-subject {
                grid-gap: 10px;

                .info-line {
                    width: 3px;
                    height: 19px;
                }

                .info-title {
                    font-size: 22px;
                }
            }
        }

        // info-contract主体
        .info-contract-subject {
            margin-top: 50px;

            // contract-car
            .contract-car {

                // contract头部
                .contract-head {
                    height: 48px;
                    padding-left: 25px;
                    padding-right: 25px;

                    .contract-head-l {
                        grid-gap: 10px;

                        .contract-head1 {
                            font-size: 20px;
                        }

                        .contract-head2 {
                            width: 16px;
                            height: 22px;
                        }

                        .contract-head3 {
                            width: 16px;
                            height: 22px;
                        }

                        .contract-head4 {
                            font-size: 20px;
                        }
                    }

                    .contract-head-r {
                        .contract-head5 {
                            font-size: 20px;
                        }
                    }
                }

                // contract内容
                .contract-content {
                    padding-top: 20px;
                    padding-bottom: 20px;
                    padding-left: 25px;
                    padding-right: 25px;
                    font-size: 18px;
                    grid-gap: 15px;

                    .contract2 {
                        font-size: 30px;
                    }

                    .contract3 {
                        display: grid;
                        grid-gap: 5px;

                        .contract-time {
                            display: grid;
                            grid-gap: 5px;
                        }
                    }

                    .contract4 {
                        margin-top: 10px;

                        .contract-bnt {
                            width: 132.5px;
                            height: 38px;

                            .contract-img {
                                width: 30px;
                                height: 17px;
                            }
                        }
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
        background: url("../../assets/spacepi-lock/bg.png") no-repeat;
        background-size: contain;
    }

    .pc {
        display: none;
    }

    .mo {
        display: block;
    }

    // info容器
    .info-container {

        // info-contract主体
        .info-contract-subject {

            // contract-car
            .contract-car {

                // contract内容
                .contract-content {
                    .contract3 {
                        display: grid;
                        grid-gap: 10px;

                        .contract-time {
                            display: grid;
                            grid-gap: 10px;
                        }
                    }
                }
            }
        }
    }
}

// 小型号到中型号的平板
@media screen and (min-width:960px) and (max-width:1264px) {

    // info容器
    .info-container {

        // info-contract主体
        .info-contract-subject {

            // contract-car
            .contract-car {

                // contract内容
                .contract-content {
                    .contract3 {}
                }
            }
        }
    }
}
</style>