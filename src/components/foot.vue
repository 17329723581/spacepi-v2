<template>
<!-- foot主体 -->
<div class="foot-subject">
    <!-- foot容器 -->
    <v-container class="foot-container">
        <!-- logo主体 -->
        <div class="logo-subject">
            <div class="logo-left">
                <div class="logo-img">
                    <v-img src="@/assets/logo.png"></v-img>
                </div>
                <div class="logo-title-subject">
                    <span>space</span>
                    <span class="y">pi</span>
                </div>
            </div>
            <div class="logo-right">
                <!-- 语言 -->
                <div class="locale">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn tile class="locale-btn" elevation color="rgba(255, 255, 255, 0)" dark v-bind="attrs" v-on="on">
                            <div class="locale-img">
                                <v-img src="@/assets/locale.png"></v-img>
                            </div>
                            <div v-for="(item, index) in localeData" :key="index" :value="index">
                                <span v-if="item.key == locale">
                                {{item.name}}
                                </span>
                            </div>
                        </v-btn>
                        </template>
                        <v-list>
                        <v-list-item v-for="(item, index) in localeData" :key="index" @click="localeClick(item.key)">
                            <v-list-item-title>{{item.name}}</v-list-item-title>
                        </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </div>
        <!-- join主体 -->
        <div class="join-subject">
            <span class="join-title">{{$t('Community.title')}}</span>
            <span class="join-content">{{$t('Community.text')}}</span>
        </div>
        <!-- join按钮主体 -->
        <div class="join-bnt-subject">
            <a>
                <div class="join-bnt" @click="Jump($t('Community').buttext_url)">{{$t('Community.buttext')}}</div>
            </a>
        </div>
        <!-- join链接主体 -->
        <div class="join-link-subject">
            <!-- join链接副主体 -->
            <div class="join-link-vice-subject">
                <a class="join-a" v-for="(item,index) in url"  :key="index" @click="Jump(item.link)">
                    <div class="join-img">
                        <v-img class="join-img-w" :src="item.picture"></v-img>
                        <v-img class="join-img-h" :src="item.picture1"></v-img>
                    </div>
                </a>
                <!-- <a class="join-a">
                    <div class="join-img">
                        <v-img class="join-img-w" src="@/assets/footlink/game.png"></v-img>
                        <v-img class="join-img-h" src="@/assets/footlink/game-h.png"></v-img>
                    </div>
                </a>
                <a class="join-a">
                    <div class="join-img">
                        <v-img class="join-img-w" src="@/assets/footlink/git.png"></v-img>
                        <v-img class="join-img-h" src="@/assets/footlink/git-h.png"></v-img>
                    </div>
                </a>
                <a class="join-a">
                    <div class="join-img">
                        <v-img class="join-img-w" src="@/assets/footlink/instagram.png"></v-img>
                        <v-img class="join-img-h" src="@/assets/footlink/instagram-h.png"></v-img>
                    </div>
                </a>
                <a class="join-a">
                    <div class="join-img">
                        <v-img class="join-img-w" src="@/assets/footlink/mirror.png"></v-img>
                        <v-img class="join-img-h" src="@/assets/footlink/mirror-h.png"></v-img>
                    </div>
                </a>
                <a class="join-a">
                    <div class="join-img">
                        <v-img class="join-img-w" src="@/assets/footlink/reddit.png"></v-img>
                        <v-img class="join-img-h" src="@/assets/footlink/reddit-h.png"></v-img>
                    </div>
                </a>
                <a class="join-a">
                    <div class="join-img">
                        <v-img class="join-img-w" src="@/assets/footlink/telegram.png"></v-img>
                        <v-img class="join-img-h" src="@/assets/footlink/telegram-h.png"></v-img>
                    </div>
                </a>
                <a class="join-a">
                    <div class="join-img">
                        <v-img class="join-img-w" src="@/assets/footlink/twitter.png"></v-img>
                        <v-img class="join-img-h" src="@/assets/footlink/twitter-h.png"></v-img>
                    </div>
                </a> -->
            </div>
        </div>
        <!-- foot-line -->
        <div class="foot-line"></div>
        <!-- foot版权 -->
        <div class="foot-copyright">
            {{$t('footer1')}} {{$t('footer2')}}
        </div>
    </v-container>
</div>
</template>
<script>
	import axios from "axios";
	import { mapState, mapMutations } from "vuex";
	export default {
		data() {
			return {
				url:[],
                // 语言包数据
                localeData:[
                    {
                        key: "en_US",
                        name: "En",
                    },
                    {
                        key: "zh_CN",
                        name: "简体中文",
                    },
                ]
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
			this.location();
		},
		mounted() {},
		methods: {
            ...mapMutations(["setLocale"]),
			location(){
				this.bottomPartners();
			},
			Jump(e) {
				window.open(e)
			},
			//获取底部友情链接
			bottomPartners() {
				var _this = this;
                axios.post(this.domainUrl+"bottomPartners",{}).then(function(response){
                    _this.url = response.data.data;
                }).catch(function(error) {
                    // 请求失败处理
                });
			},
            // 语言点击事件
            localeClick(value){
                this.$store.commit("setLocale", value);
                this.$i18n.locale = value;
            },
		},
	};
</script>
<style scoped lang="scss">
@import "@/scss/adaptation.scss";
// foot主体
.foot-subject{
    padding-top:50px;
    padding-bottom:50px;
    background: #0A021C;
    // foot容器
    .foot-container{
        max-width: 1200px;
        display: grid;
        grid-gap: 25px;
        // logo主体
        .logo-subject{
            width: 100%;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            .logo-left{
                display: flex;
                align-items: center;
                grid-gap: 20px;
                .logo-img{
                    width: 94px;
                }
                .logo-title-subject{
                    font-size: 36px;
                    font-family: EDIX-Regular, EDIX;
                    font-weight: 400;
                    color: #fff;
                    .y{
                        color: #FDD333;
                    }
                }
            }
            .logo-right{
                justify-self: flex-end;
                .locale{
                    .locale-btn{
                        height: 60px;
                        font-size: 18px;
                        font-family: Fenton-Regular, Fenton;
                        font-weight: 400;
                        color: rgba(255, 255, 255, 0);
                        span{
                            color: #FDD333;
                        }
                        .locale-img{
                            width: 22px;
                            margin-right: 5px;
                        }
                    }
                    .locale-btn:hover{
                        color: rgba(255, 255, 255, 0);
                    }
                    .locale-btn:active{
                        color: rgba(255, 255, 255, 0);
                    }
                    .locale-btn:focus{
                        color: rgba(255, 255, 255, 0);
                    }
                }
            }
        }
        // join主体
        .join-subject{
            display: grid;
            grid-gap: 10px;
            .join-title{
                font-size: 26px;
                font-family: Fenton-Black;
                font-weight: 900;
                color: #FDD333;
            }
            .join-content{
                max-width: 800px;
                font-size: 17px;
                font-family: Fenton-Regular;
                font-weight: 400;
                color: rgba(126, 138, 158, 0.8);
                line-height: 22px;
            }
        }
        // join按钮主体
        .join-bnt-subject{
            .join-bnt{
                width: 265px;
                height: 56px;
                background:url("../assets/Join-bnt.png") no-repeat;
                background-size: 100% 100%;
                font-size: 20px;
                font-family: Fenton-Regular, Fenton;
                font-weight: 400;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .join-bnt:hover{}
        }
        // join链接主体
        .join-link-subject{
            display: flex;
            justify-content: flex-end;
            // join链接副主体
            .join-link-vice-subject{
                display: flex;
                grid-gap: 20px;
                .join-a{
                    .join-img{
                        width: 39px;
                    }
                    .join-img-h{
                        display: none;
                    }
                }
                .join-a:hover{
                    .join-img-w{
                        display: none;
                    }
                    .join-img-h{
                        display: block;
                    }
                }
            }
        }
        // foot-line
        .foot-line{
            width: 100%;
            height: 1px;
            opacity: 0.5;
            background:#7E8A9E;
            //border: 1px solid #7E8A9E;
        }
        .foot-copyright{
            font-size: 17px;
            font-family: Fenton-Regular;
            font-weight: 400;
            color: rgba(126, 138, 158, 0.5);
        }
    }
}
// 小型号到大型号的手机
@media screen and (max-width:600px){
    $width:600;
    // foot主体 vw(125,$width);
    .foot-subject{
        padding-top:vw(50,$width);
        padding-bottom:vw(50,$width);
        // foot容器
        .foot-container{
            grid-gap: vw(25,$width);
            // logo主体
            .logo-subject{
                grid-gap: vw(20,$width);
                .logo-left{
                    grid-gap: vw(20,$width);
                    .logo-img{
                        width: vw(94,$width);
                    }
                    .logo-title-subject{
                        font-size: vw(36,$width);
                    }
                }
                .logo-right{
                    display: none;
                    .locale{
                        .locale-btn{
                            height: vw(60,$width);
                            font-size: vw(18,$width);
                            .locale-img{
                                width: vw(22,$width);
                                margin-right: vw(5,$width);
                            }
                        }
                    }
                }
            }
            // join主体
            .join-subject{
                grid-gap: vw(10,$width);
                .join-title{
                    font-size: vw(26,$width);
                }
                .join-content{
                    width: 100%;
                    font-size: vw(17,$width);
                    line-height: vw(22,$width);
                }
            }
            // join按钮主体
            .join-bnt-subject{
                .join-bnt{
                    width: vw(256,$width);
                    height: vw(56,$width);
                    font-size: vw(18,$width);
                }
            }
            // join链接主体
            .join-link-subject{
                display: grid;
                justify-content: center;
                // join链接副主体
                .join-link-vice-subject{
                    display: grid;
                    grid-gap: vw(30,$width);
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                    .join-a{
                        .join-img{
                            width: vw(50,$width);
                        }
                    }
                }
            }
            .foot-copyright{
                font-size: vw(17,$width);

            }
        }
    }
}
// 小型号到中型号的平板
@media screen and (min-width:600px) and (max-width:960px){
    $width:960;
    // foot主体 vw(125,$width);
    .foot-subject{
        padding-top:vw(50,$width);
        padding-bottom:vw(50,$width);
        // foot容器
        .foot-container{
            grid-gap: vw(25,$width);
            // logo主体
            .logo-subject{
                grid-gap: vw(20,$width);
                .logo-left{
                    grid-gap: vw(20,$width);
                    .logo-img{
                        width: vw(94,$width);
                    }
                    .logo-title-subject{
                        font-size: vw(36,$width);
                    }
                }
                .logo-right{
                    display: none;
                    .locale{
                        .locale-btn{
                            height: vw(60,$width);
                            font-size: vw(18,$width);
                            .locale-img{
                                width: vw(22,$width);
                                margin-right: vw(5,$width);
                            }
                        }
                    }
                }
            }
            // join主体
            .join-subject{
                grid-gap: vw(10,$width);
                .join-title{
                    font-size: vw(26,$width);
                }
                .join-content{
                    width: 100%;
                    font-size: vw(17,$width);
                    line-height: vw(22,$width);
                }
            }
            // join按钮主体
            .join-bnt-subject{
                .join-bnt{
                    width: vw(256,$width);
                    height: vw(56,$width);
                    font-size: vw(18,$width);
                }
            }
            // join链接主体
            .join-link-subject{
                display: grid;
                justify-content: center;
                // join链接副主体
                .join-link-vice-subject{
                    display: grid;
                    grid-gap: vw(30,$width);
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
                    .join-a{
                        .join-img{
                            width: vw(50,$width);
                        }
                    }
                }
            }
            .foot-copyright{
                font-size: vw(17,$width);
            }
        }
    }
}
</style>