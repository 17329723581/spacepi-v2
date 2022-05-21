<template>
    <!-- spacePi容器 -->
    <v-container class="spacepi-container">
        <!-- spacepi标题 -->
        <div class="spacepi-title">SPACE<span>PI</span></div>
        <!-- spacepi副标题 -->
        <span class="spacepi-vice-title">
            {{$t('only')}}
        </span>
        <!-- spacepi内容 -->
        <span class="spacepi-content">
            {{$t('introduce')}}
        </span>
        <!-- spacepi按钮 -->
        <div class="spacepi-button">
            <!-- spacepi菜单 -->
            <v-menu transition="slide-y-transition" open-on-hover offset-y v-for="(item, index) in spacepiBuntton"
                :key="index">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn @click="item.staus != 1 ? spacepiTo(item.link) : ''" v-bind="attrs" v-on="on"
                        v-if="index == 0" class="left">
                        {{ item[locale] }}
                    </v-btn>
                    <v-btn @click="item.staus != 1 ? spacepiTo(item.link) : ''" v-bind="attrs" v-on="on"
                        v-if="index != spacepiBuntton.length - 1 && index != 0">
                        {{ item[locale] }}
                    </v-btn>
                    <v-btn @click="item.staus != 1 ? spacepiTo(item.link) : ''" v-bind="attrs" v-on="on"
                        v-if="index == spacepiBuntton.length - 1" class="right">
                        {{ item[locale] }}
                    </v-btn>
                </template>
                <v-list v-if="item.staus != 0" class="spacepi-list">
                    <div v-for="(i, SpacepiIndex) in spacepiBunttonList" :key="SpacepiIndex">
                        <v-list-item @click="spacepiTo(i.link)" v-if="i.b_id == item.id && index == 0" class="right">
                            <v-list-item-title style="text-align: center">{{i[locale]}}</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="spacepiTo(i.link)" v-if="
                            i.b_id == item.id &&
                            index != 0 &&
                            index != spacepiBuntton.length - 1
                        ">
                            <v-list-item-title style="text-align: center">{{i[locale]}}</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="spacepiTo(i.link)"
                            v-if="i.b_id == item.id && index == spacepiBuntton.length - 1" class="left">
                            <v-list-item-title style="text-align: center">{{i[locale]}}</v-list-item-title>
                        </v-list-item>
                    </div>
                </v-list>
            </v-menu>
        </div>
        <!-- spacepi说明 -->
        <span class="spacepi-illustrate">
            {{$t('happy_text')}}
        </span>
        <!-- spacepi地址 -->
        <div class="spacepi-address">
            <!-- 地址 -->
            <div class="address">
                <svg class="address-svg" viewBox="0 0 903.09 83">
                    <g transform="translate(1990 -540.573)" fill="rgba(44,29,81,0.5)">
                        <path
                            d="M -1087.709838867188 623.0731201171875 L -1989.5 623.0731201171875 L -1989.499877929688 541.0733642578125 L -1127.703979492188 541.0733642578125 L -1087.709838867188 623.0731201171875 Z"
                            stroke="none" />
                        <path
                            d="M -1088.509887695312 622.5731201171875 L -1128.016357421875 541.5733642578125 L -1988.999877929688 541.5733642578125 L -1989 622.5731201171875 L -1088.509887695312 622.5731201171875 M -1086.90966796875 623.5731201171875 L -1086.910400390625 623.5715942382812 L -1086.90966796875 623.5731201171875 L -1990 623.5731201171875 L -1989.999877929688 540.5733642578125 L -1127.391479492188 540.5733642578125 L -1086.90966796875 623.5731201171875 Z"
                            stroke="none" fill="#fdd333" />
                    </g>
                </svg>
                <span>{{address}}</span>
            </div>
            <!-- 复制 -->
            <div class="copy" v-clipboard:copy="address" v-clipboard:success="onCopy" style="cursor: pointer;">
                <svg class="copy-svg" viewBox="0 0 311.683 83.001">
                    <path d="M-1678.317,115h-271.2L-1990,32h296.9l14.782,16.417V115h0Z" transform="translate(1990 -32)"
                        fill="#fdd333" />
                </svg>
                <div class="copy-img">
                    <v-img class="v-img" src="@/assets/copy.png"></v-img>
                </div>

                <!-- <div class="copy-svg"></div>
                <div class="copy-img">
                    <v-img class="v-img x" src="@/assets/copy.png"></v-img>
                    <v-img class="v-img y" src="@/assets/copy-w.png"></v-img>
                </div> -->
            </div>
        </div>
        <!-- spacepi地址移动端 -->
        <div class="spacepi-address-m">
            <!-- 地址 -->
            <div class="address">
                {{address}}
            </div>
            <!-- 复制 -->
            <div class="copy-img" v-clipboard:copy="address" v-clipboard:success="onCopy">
                <v-img class="v-img" src="@/assets/copy.png"></v-img>
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
            address:this.$t("bsc_token"),
            // spacepi菜单
            spacepiBuntton:[],
            // spacepi菜单列表
			spacepiBunttonList:[]
        }
    },
    computed: {
		...mapState(["domainUrl","locale","alert"]),
	},
    components: {},
    mounted() {
        setTimeout(()=>{
            this.location();
        },1)
    },
    methods: {
        ...mapMutations(["setAlert"]),
        location(){
            this.getspacepiBuntton();
            this.getspacepiBunttonList();
        },
        // spacepi跳转
        spacepiTo(e) {
            window.open(e)
        },
        //获取TOP按钮
        getspacepiBuntton()
        {
            var _this = this;
            axios.post(this.domainUrl+"spacepiBuntton",{}).then(function(response){
                _this.spacepiBuntton = response.data.data;
            }).catch(function(error) {
                // 请求失败处理
            });
        },
        //获取TOP按钮列表
        getspacepiBunttonList()
        {
            var _this = this;
            axios.post(this.domainUrl+"spacepiBunttonList",{}).then(function(response){
                _this.spacepiBunttonList = response.data.data;
				var array = [];
				var array1 = [];
				for (var i =0;i<_this.spacepiBunttonList.length;i++){
					array[i] = 'width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;background:rgb(253, 211, 51);color:rgb(51, 51, 51);line-height:0;font-size: 1rem;font-family: DIN;font-weight: bold;border: 0;';
					array1[i] = false;
				}
				_this.tabarray = array;
				_this.array1 = array1;
            }).catch(function(error) {
                // 请求失败处理
            });
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
    }
}

</script>
<style scoped lang="scss">
@import "@/scss/adaptation.scss";
$width:1200;

// spacePi容器
.spacepi-container {
    max-width: 1200px;
    z-index: 2;
    padding-top: vw(300, $width);
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    justify-items: center;

    // spacepi标题
    .spacepi-title {
        font-size: rem(50, $width);
        color: #ffffff;
        font-family: EDIX;
        text-shadow: 1px 1px 1px #000000;

        span {
            color: #FDD333;
        }
    }

    // spacepi副标题
    .spacepi-vice-title {
        font-size: 26px;
        font-family: Fenton-Medium;
        font-weight: 500;
        color: #FFFFFF;
        text-align: center;
    }

    // spacepi内容
    .spacepi-content {
        font-size: 16px;
        font-family: Fenton-Light;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
    }

    //spacepi按钮
    .spacepi-button {
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
        }

        .v-btn:hover {
            background: rgba(44, 29, 81, 0.5);
            color: #FFFFFF;
        }

        .v-btn:active {
            background: rgba(44, 29, 81, 0.5);
            color: #FFFFFF;
        }

        .s {
            color: rgb(255, 0, 0);
        }
    }

    //spacepi说明
    .spacepi-illustrate {
        font-size: 17px;
        font-family: Fenton-Medium;
        font-weight: 500;
        color: #FDD333;
        text-align: center
    }

    // spacepi地址
    .spacepi-address {
        display: flex;
        width: 100%;
        grid-gap: 0px;

        // 地址
        .address {
            width: 75%;
            height: 80px;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            font-family: Fenton-Regular;
            font-weight: 400;
            color: #FFFFFF;

            .address-svg {
                position: absolute;
                width: 100%;
                height: 80px;
                z-index: -1;
            }
        }

        // 复制
        .copy {
            transition: 1s;
            width: 25%;
            height: 75px;
            border-radius: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-left: -25px;

            .copy-svg {
                position: absolute;
                width: 100%;
                z-index: -1;
                height: 75px;
            }

            .copy-img {
                .v-img {
                    width: 60px;
                }
            }
            .x{
                display: block;
            }
            .y{
                display: none;
            }
        }
        .copy:hover{
            transition: 0.5s;
            opacity: 0.8;
        }
    }
    // spacepi地址移动端
    .spacepi-address-m{
        display: none;
    }
}

// 框架ui区域
.v-menu__content {
    border-radius: 0px;

    // spacepi 列表
    .spacepi-list {
        .v-list-item:hover {
            color: #FDD333;
        }
    }
}


// 小型号到大型号的手机
@media screen and (max-width:600px) {
    $width: 600;

    // spacePi容器
    .spacepi-container {
        padding-top: 250px;

        // spacepi标题
        .spacepi-title {
            font-size: vw(50, $width);
        }

        // spacepi副标题
        .spacepi-vice-title {
            text-align: center;
            font-size: 14px;
            color: #FDD333;
        }

        // spacepi内容
        .spacepi-content {
            text-align: center;
            font-size: 12px;
        }

        // spacepi按钮
        .spacepi-button {
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
                height: 48px;;
                font-size: 14px;
                font-family: Fenton-Regular;
            }
        }

        //spacepi说明
        .spacepi-illustrate {
            text-align: center;
            font-size: 14px;
        }

        // spacepi地址
        .spacepi-address {
            display: none;
            justify-items: center;

            // 地址
            .address {
                width: 100%;
                font-size: vw(18, $width);
            }

            // 复制
            .copy {
                width: vw(200, $width);
                margin-left: 0;

                .copy-img {
                    .v-img {
                        width: 40px;
                    }
                }
            }
        }
        // spacepi地址移动端
        .spacepi-address-m{
            display: flex;
            width: 100%;
            height: 56px;
            background: rgba(44, 29, 81, 0.5);
            border: 1px solid #FDD333;
            align-items: center;
            justify-content: center;
            grid-gap: 45px;
            // 地址
            .address{
                width: 220px;
                font-size: 12px;
                font-family: Fenton-Regular, Fenton;
                font-weight: 400;
                color: #FFFFFF;
                white-space: nowrap;  /*内容超宽后禁止换行显示*/
                overflow: hidden;     /*超出部分隐藏*/
                text-overflow: ellipsis; /* 单行，多行文本溢出显示 . . . */
            }
            // 复制
            .copy-img{
                width: 30px;
            }
        }
    }
}

// 小型号到中型号的平板
@media screen and (min-width:600px) and (max-width:960px) {
    $width: 960;

    // spacePi容器
    .spacepi-container {
        padding-top: vw(300, $width);
        grid-gap: vw(20, $width);

        .spacepi-title {
            font-size: vw(50, $width);
        }

        // spacepi副标题
        .spacepi-vice-title {
            text-align: left;
            font-size: vw(26, $width);
        }

        // spacepi内容
        .spacepi-content {
            text-align: left;
            font-size: vw(16, $width);
        }

        // spacepi按钮
        .spacepi-button {
            width: 100%;
            grid-template-columns:1fr 1fr;
            grid-gap: vw(15, $width);

            .left {
                clip-path: polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 30%);
            }

            .right {
                clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 95% 100%, 20% 100%, 0 100%, 0 0);
            }

            .v-btn {
                width: 100%;
                height: vw(60, $width);
                font-size: vw(18, $width);
            }
        }

        //spacepi说明
        .spacepi-illustrate {
            text-align: left;
            font-size: vw(17, $width);
        }

        // spacepi地址
        .spacepi-address {
            justify-items: center;
            grid-gap: 0;

            // 地址
            .address {
                width: inherit;
                font-size: vw(24, $width);
                height: vw(80, $width);
                font-size: vw(24, $width);

                span {
                    width: 80%;
                    white-space: nowrap;
                    /*内容超宽后禁止换行显示*/
                    overflow: hidden;
                    /*超出部分隐藏*/
                    text-overflow: ellipsis;
                    /* 单行，多行文本溢出显示 . . . */
                }

                .address-svg {
                    height: vw(80, $width);
                }
            }

            // 复制
            .copy {
                width: vw(300, $width);
                margin-left: 0;
                height: vw(75, $width);
                margin-left: vw(-10, $width);

                .copy-svg {
                    height: vw(75, $width);
                }

                .copy-img {
                    .v-img {
                        width: vw(30, $width);
                    }
                }
            }
        }
    }
}

// 小型号到中型号的平板
@media screen and (min-width:960px) and (max-width:1264px) {
    $width: 1264;

    // spacePi容器
    .spacepi-container {

        //spacepi按钮
        .spacepi-button {
            grid-gap: 10px;

            .v-btn {
                width: 225px;
                height: 50px;
                font-size: 17px;
            }
        }
    }
}

// 桌面端
@media screen and (min-width:1264px) and (max-width:1904px) {
    $width: 1904;
}

// 4K 和超宽屏幕
@media screen and (min-width:1904px) {}
</style>
