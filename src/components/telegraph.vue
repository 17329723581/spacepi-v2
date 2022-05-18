<template>
    <!-- telegraph容器 -->
    <v-container class="telegraph-container">
        <!-- telegraph标题主体 -->
        <div class="telegram-title-subject">
            <div class="line"></div>
            <!-- telegraph标题 -->
            <span class="telegraph-title">{{$t('telegraph')}}</span>
        </div>
        <!-- telegraph宫格 -->
        <div class="telegraph-grid">
            <!-- <div class="telegraph-grid-subject" v-for="(item,index) in telegraph" :key="index">
                <a @click="to(item.link)">
                    <v-img class="p" :src="item.picture" ></v-img>
                    <v-img class="m" :src="item.m_picture" @click="to(item.link)"></v-img>
                </a>
            </div> -->
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/1.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/2.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/3.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/4.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/5.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/6.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/7.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/8.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/9.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/10.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/11.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/12.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/13.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/14.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
            </div>
            <div class="telegraph-grid-subject">
                <v-img class="p" src="@/assets/test-telegraph-d/15.svg" ></v-img>
                <v-img class="m" src="@/assets/test-telegraph.svg"></v-img>
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
				telegraph:[],
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
            setTimeout(this.location(),1)
		},
		mounted() {

		},
		methods: {
			location()
            {
				this.getspacepiTelegraph();
            },
			to(e) {
				window.open(e)
			},
			//获取电报
            getspacepiTelegraph()
            {
                var _this = this;
                axios.post(this.domainUrl+"telegraph",{}).then(function(response){
                    _this.telegraph = response.data.data;
                }).catch(function(error) {
                    //     // 请求失败处理
                });
            }
		},
	};
</script>
<style scoped lang="scss">
@import "@/scss/adaptation.scss";
// telegraph容器
.telegraph-container{
    max-width: 1500px;
    display: grid;
    grid-gap: 100px;
    // telegraph标题主体
    .telegram-title-subject{
        display: flex;
        grid-gap: 25px;
        align-items: center;
        .line{
            width: 6px;
            height: 44px;
            background: #FDD333;
        }
        // telegraph标题
        .telegraph-title{
            font-size: 60px;
            font-family: Fenton-Black;
            font-weight: 900;
            color: #FFFFFF;
        }
    }
    // telegraph宫格
    .telegraph-grid{
        .m{
            display: none;
        }
        .p{
            display: block;
        }
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 25px;
        .telegraph-grid-subject{
            width: 200px;
        }
    }
}
// 小型号到大型号的手机
@media screen and (max-width:600px){
    $width:600;
    // telegraph容器
    .telegraph-container{
        // telegraph标题主体
        .telegram-title-subject{
            grid-gap: 10px;
            .line{
                width: 3px;
                height: 19px;
            }
            // telegraph标题
            .telegraph-title{
                font-size:  22px;
            }
        }
        // telegraph宫格
        .telegraph-grid{
            .m{
                display: block;
            }
            .p{
                display: none;
            }
            grid-template-columns: 1fr;
            grid-gap: 10px;
            .telegraph-grid-subject{
                width: 100%;
                background: rgba(44, 29, 81, 0.5);
                border: 1px solid #FDD333;
            }
        }
    }
}
// 小型号到中型号的平板
@media screen and (min-width:600px) and (max-width:960px){
    $width:960;
    // telegraph容器
    .telegraph-container{
        // telegraph标题主体
        .telegram-title-subject{
            .line{
                height: vw(44,$width);
            }
            // telegraph标题
            .telegraph-title{
                font-size: vw(60,$width);
            }
        }
        // telegraph宫格
        .telegraph-grid{
            grid-template-columns: 1fr 1fr;
            .telegraph-grid-subject{
                width: 100%;
                
            }
        }
    }
}
// 小型号到中型号的平板
@media screen and (min-width:960px) and (max-width:1264px){
    // telegraph容器
    .telegraph-container{
        // telegraph宫格
        .telegraph-grid{
            grid-template-columns: 1fr 1fr 1fr 1fr;
            .telegraph-grid-subject{
                //width: 100%;
            }
        }
    }
}
// 桌面端
@media screen and (min-width:1264px) and (max-width:1904px){
    // telegraph容器
    .telegraph-container{
        // telegraph宫格
        .telegraph-grid{
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            .telegraph-grid-subject{
                //width: 100%;
            }
        }
    }
}
// 4K 和超宽屏幕
@media screen and (min-width:1904px){}
</style>