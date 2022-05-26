<template>
  <v-app>
    <!-- 警告状态提示框 -->
    <alert :status="alert.status" :text="alert.text" :type="alert.type"></alert>
    <!-- 返回顶部 -->
    <div class="returnTop">
      <v-img class="logo-img" src="@/assets/returrnTop.png" @click="returnTop"></v-img>
    </div>
    <!-- 用户交互音乐播放弹框 -->
    <v-dialog v-model="musicDialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          warning
        </v-card-title>

        <v-card-text>
          The browser does not support music playback. Click to play
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="darken-1" text @click="play">
            play
          </v-btn>

          <v-btn color="darken-1" text @click="musicDialog = false">
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 顶部导航 -->
    <v-app-bar :elevation="topNavigationShrinkStatus ? 24 : 0" app color="rgba(255, 255, 255, 1)"
      :class="['top-navigation', topNavigationShrinkStatus ? '' : 'top-navigation-open', 'bg']" height="none"
      :style="topNavigationShrinkStatus ? 'background: #1E0A4D' : 'background:linear-gradient(to bottom, rgba(0,0,0, 1), rgba(255,255,255, 0))'">
      <!-- LOGO -->
      <a @click="$router.push('/')">
        <div class="logo">
          <v-img class="logo-img" src="@/assets/logo.png"></v-img>
          <div class="logo-title">
            <span>space</span>
            <span class="y">pi</span>
          </div>
        </div>
      </a>
      <!-- Tabs（选项卡） -->
      <div class="tabs">
        <a @click="$router.push('/')">
          <div class="tabs-line" :style="$route.path == '/' ? 'border-top: 2px solid rgba(255, 255, 255, 0.6);' : ''">
          </div>
          {{ $t("home") }}
        </a>
        <div v-for="(item, index) in menu" :key="index">
          <a @click="poenUrl(item.link)">
            <div class="tabs-line"></div>
            {{ item[locale] }}
          </a>
        </div>
      </div>
      <v-spacer></v-spacer>
      <!-- 语言 -->
      <div class="locale">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn tile class="locale-btn" height="85px" elevation color="rgba(255, 255, 255, 0)" dark v-bind="attrs"
              v-on="on">
              <div class="logo-img">
                <v-img class="locale-img" src="@/assets/locale.png"></v-img>
              </div>
              <div v-for="(item, index) in localeData" :key="index" :value="index">
                <span v-if="item.key == locale">
                  {{ item.name }}
                </span>
              </div>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in localeData" :key="index" @click="localeClick(item.key)">
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- tabs图标 -->
      <div class="tabs-icon" @click="tabsStatus = true">
        <v-img class="logo-img" src="@/assets/menu-open.png"></v-img>
        <!-- <v-icon color="#FDD333" >mdi-menu</v-icon> -->
      </div>
    </v-app-bar>
    <v-main style="z-index:1">
      <!-- spacepi音乐 -->
      <a @click="spacepiMusicClick">
        <div id="spacepiMusic" class="spacepiMusic"></div>
      </a>
      <audio controls="controls" :src="mp3" ref="audio" style="display: none;"></audio>
      <router-view />
    </v-main>
    <!-- tabs弹框主体 -->
    <div class="tabs-Sframes-subject" v-if="tabsStatus">
      <!-- tabs主体 -->
      <div class="tabs-subject">
        <!-- 导航 -->
        <div class="navigation">
          <!-- LOGO -->
          <div class="logo">
            <div class="logo-img">
              <v-img class="logo-img" src="@/assets/logo.png"></v-img>
            </div>
            <div class="logo-title">
              <span>space</span>
              <span class="y">pi</span>
            </div>
          </div>
        </div>
        <!-- Tabs（选项卡） -->
        <div class="tabs">
          <a @click="mobileOutside('/')">
            {{ $t("home") }}
          </a>
          <div v-for="(item, index) in menu" :key="index">
            <a @click="poenUrl(item.link)">
              <div class="tabs-line"></div>
              {{ item[locale] }}
            </a>
          </div>
        </div>
        <!-- 语言 -->
        <div class="locale">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn tile class="locale-btn" elevation color="rgba(255, 255, 255, 0)" dark v-bind="attrs" v-on="on">
                <div class="logo-img">
                  <v-img class="locale-img" src="@/assets/locale.png"></v-img>
                </div>
                <div v-for="(item, index) in localeData" :key="index" :value="index">
                  <span v-if="item.key == locale">
                    {{ item.name }}
                  </span>
                </div>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in localeData" :key="index" @click="localeClick(item.key)">
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <!-- tabs关闭 -->
      <div class="tabs-close" @click="tabsStatus = false">
        <div class="logo-img">
          <v-img class="logo-img" src="@/assets/menu-close.png"></v-img>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import axios from "axios";
// 引入警告提示组件
import alert from "@/components/alert.vue"

import lottie from "lottie-web";
import spacepiMusic from '@/assets/animation/spacepiMusic.json';
import bgmp3 from '@/assets/music/bg.mp3';
export default {
  name: 'App',
  data: () => ({
    menu: [],
    // 顶部导航收缩状态:false展开 true收缩
    topNavigationShrinkStatus: false,
    // tabs状态
    tabsStatus: false,
    // 语言包数据
    localeData: [
      {
        key: "en_US",
        name: "En",
      },
      {
        key: "tr_TR",
        name: "Türk",
      },
      {
        key: "ko_KR",
        name: "한국어",
      },
      {
        key: "ja_JP",
        name: "日本",
      },
      {
        key: "in",
        name: "Indonesia",
      },
      {
        key: "th",
        name: "ไทย",
      },
      {
        key: "ar",
        name: "عربي",
      },
      {
        key: "zh_TW",
        name: "繁體中文",
      },
      {
        key: "zh_CN",
        name: "简体中文",
      },
    ],
    spacepiMusic: "",
    mp3: bgmp3,
    musicDialog: false,
  }),
  computed: {
    ...mapState(["locale", "domainUrl", 'alert']),
  },
  components: {
    alert,
  },
  created() {
    //this.$vuetify.theme.dark = true;

  },
  mounted() {
    let params = {
      container: document.getElementById("spacepiMusic"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: spacepiMusic
    };
    this.spacepiMusic = lottie.loadAnimation(params);


    var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
    if (isChrome) {
      this.spacepiMusic.pause();
      this.$refs.audio.pause();
      //this.musicDialog = true;
    } else {
      this.$refs.audio.volume = 0.1;
      this.$refs.audio.play();
      this.$refs.audio.onended = () => {
        this.$refs.audio.play();
      };
    }

    window.addEventListener('scroll', () => {
      var top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset)
      this.topNavigationShrinkStatus = top > 0;
    }, true);
    setTimeout(() => {
      this.location();
    }, 1)

  },
  methods: {
    ...mapMutations(["setLocale"]),
    location() {
      this.getMenu();
    },
    // 语言点击事件
    localeClick(value) {
      this.$store.commit("setLocale", value);
      this.$i18n.locale = value;
    },
    // 添加判断方法
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    getMenu() {
      var _this = this;
      axios.post(this.domainUrl + "spacepiMenu")
        .then(function (response) {
          _this.menu = response.data.data;
        })
        .catch(function (error) {
          // 请求失败处理
        });
    },
    poenUrl(e) {
      window.open(e);
    },
    // 模拟手机内部点击
    mobileOutside(e) {
      if (e != this.$route.path) {
        this.$router.push(e)
        this.tabsStatus = false;
      } else {
        this.tabsStatus = false;
      }
    },
    spacepiMusicClick() {
      if (this.spacepiMusicStatus == true) {
        this.spacepiMusicStatus = false;//暂停
        this.spacepiMusic.pause();
        this.$refs.audio.pause();
      } else {
        this.spacepiMusicStatus = true;//播放
        this.spacepiMusic.play();
        this.$refs.audio.play();
      }
    },
    //播放音乐
    play() {
      this.musicDialog = false;
      this.$refs.audio.play();
      this.$refs.audio.onended = () => {
        this.$refs.audio.play();
      };
      this.spacepiMusic.play();
    },
    // H5 plus事件处理
    plusReady() {
      // 设置系统状态栏背景为红色
      var type = plus.os.name;
      if (type == "iOS") {
        plus.navigator.setStatusBarBackground("#368CBD");
      } else {
        plus.navigator.setStatusBarBackground("#ddd");
      }
    },
    // 返回顶部事件
    returnTop(){
      document.getElementById('app').scrollIntoView();
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/scss/adaptation.scss";
$width:1200;
// 返回顶部
.returnTop{
  position: fixed;
  z-index: 9;
  bottom: 50px;
  right: 50px;
  width: 47px;
  height: 47px;
  cursor: pointer;
}
// spacepi音乐
.spacepiMusic {
  position: fixed;
  width: 50px;
  height: 50px;
  z-index: 99;
  top: 150px;
  right: 50px;
}

// 顶部导航展开
.top-navigation-open {
  height: 150px;
  padding-left: 50px;
  padding-right: 50px;
}

// 顶部导航
.top-navigation {
  display: inline-grid;
  align-items: center;
  transition: all .5s ease-in-out;

  // LOGO
  .logo {
    display: flex;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    padding-right: 50px;

    .logo-img {
      width: 70px;
    }

    .logo-title {
      font-size: 26px;
      font-family: EDIX-Regular, EDIX;
      font-weight: 400;
      color: #fff;

      .y {
        color: #FDD333;
      }
    }
  }

  // Tabs（选项卡）
  .tabs {
    height: 88px;
    display: flex;
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
    position: relative;
    font-family: Fenton-Bold;
    font-weight: 400;
    font-size: 20px;
    white-space: nowrap;

    a {
      color: rgba(253, 211, 51, 1);
      transition: 0.3s;
      -webkit-transition: 0.3s;
      -moz-transition: 0.3s;
      -ms-transition: 0.3s;
      -o-transition: 0.3s;

      .tabs-line {}
    }

    a:active {
      color: #FDD333;
    }

    a:hover {
      color: #FDD333;

      .tabs-line {
        border-top: 2px solid rgba(255, 255, 255, 0.6);
      }
    }
  }

  // 语言
  .locale {
    display: flex;
    font-size: 18px;
    font-family: Fenton-Regular;
    justify-items: center;
    align-items: center;

    .locale-btn {
      height: 60px;
      font-size: 18px;
      font-family: Fenton-Regular, Fenton;
      font-weight: 400;
      color: rgba(255, 255, 255, 0);

      span {
        color: #FDD333;
      }

      .locale-img {
        width: 22px;
        margin-right: 5px;
      }
    }

    .locale-btn:hover {
      color: rgba(255, 255, 255, 0);
    }

    .locale-btn:active {
      color: rgba(255, 255, 255, 0);
    }

    .locale-btn:focus {
      color: rgba(255, 255, 255, 0);
    }
  }

  // tabs图标
  .tabs-icon {
    display: none;
  }
}

// 主体
.v-main {
  background: #160F26;
}

// 框架ui区域
.v-menu__content {
  border-radius: 0px;
}

// tabs弹框主体
.tabs-Sframes-subject {
  width: 100%;
  height: -webkit-fill-available;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  z-index: 999;
  display: grid;
  justify-items: center;

  //position: relative;
  // 导航
  .navigation {
    display: flex;
    height: 60px;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid rgba(126, 138, 158, 0.4);

    // LOGO
    .logo {
      display: flex;
      grid-gap: 10px;
      align-items: center;
      justify-items: center;
      padding-right: 50px;

      .logo-img {
        width: 35px;
      }

      .logo-title {
        font-size: 20px;
        font-family: EDIX-Regular, EDIX;
        font-weight: 400;
        color: #fff;

        .y {
          color: #FDD333;
        }
      }
    }

    // tabs关闭
    .tabs-close {
      display: flex;
      grid-gap: 10px;
      align-items: center;
      justify-content: flex-end;
      width: 100%;

      .logo-img {
        width: 14px;
      }
    }
  }

  // tabs主体
  .tabs-subject {
    width: 100%;
    background: #1E0A4D;
    height: vw(750, 600);
    position: relative;

    .tabs {
      margin-top: 50px;
      display: grid;
      grid-gap: 30px;
      align-items: center;
      font-family: Fenton-Light;
      font-weight: 400;
      font-size: 20px;
      white-space: nowrap;
      padding-left: 50px;
      padding-right: 50px;

      a {
        color: rgba(253, 211, 51, 1);
      }
    }

    .locale {
      position: absolute;
      bottom: 50px;
      right: 50px;
      width: 109px;
      height: 26px;
      border: 1px solid #FDD333;
      display: flex;

      .locale-btn {
        width: 109px;
        font-size: 12px;
        font-family: Fenton-Regular, Fenton;
        font-weight: 400;
        height: 26px;

        span {
          color: #FDD333;
        }

        .logo-img {
          width: 14px;
          height: 14px;
          margin-right: 5px;
        }
      }
    }
  }

  // tabs关闭
  .tabs-close {
    display: flex;
    grid-gap: 10px;
    justify-content: center;
    width: 100%;

    .logo-img {
      width: 58px;
      height: 58px;
    }
  }

}

// 小型号到大型号的手机
@media screen and (max-width:600px) {
  $width: 600;
  .returnTop{
    bottom: 16px;
    right: 16px;
    width: 30px;
    height: 30px;
  }

  // spacepi音乐
  .spacepiMusic {
    top: 60px;
    right: 16px;
  }

  // 顶部导航展开
  .top-navigation-open {
    height: auto;
    padding-left: 0;
    padding-right: 0;
  }

  // 顶部导航
  .top-navigation {
    height: 60px;
    display: grid;

    // LOGO
    .logo {
      padding-right: 0px;
      grid-gap: vw(20, $width);

      .logo-img {
        width: 35px;
      }

      .logo-title {
        font-size: 20px;
      }
    }

    // Tabs（选项卡）
    .tabs {
      display: none;
    }

    // 语言
    .locale {
      display: none;

      .logo-img {
        width: 20px;
        margin-right: 5px;
      }

      .locale-btn {
        font-size: vw(20, $width);
      }
    }

    // tabs图标
    .tabs-icon {
      display: flex;
      width: 20px;
      justify-content: center;
    }
  }
}

// 小型号到中型号的平板
@media screen and (min-width:600px) and (max-width:960px) {
  .returnTop{
    bottom: 16px;
    right: 16px;
  }
  // spacepi音乐
  .spacepiMusic {
    right: 16px;
  }
  // 顶部导航
  .top-navigation {
    height: 80px;

    // LOGO
    .logo {
      padding-right: 30px;
      grid-gap: 15px;

      .logo-img {
        width: 60px;
      }

      .logo-title {
        font-size: 24px;
      }
    }

    // Tabs（选项卡）
    .tabs {
      display: none;
    }

    // 语言
    .locale {
      display: none;

      .locale-btn {
        font-size: 16px;
      }
    }

    // tabs图标
    .tabs-icon {
      display: flex;
      width: 20px;
      justify-content: center;
    }
  }

  // tabs弹框主体
  .tabs-Sframes-subject {

    // 导航
    .navigation {
      height: 80px;
      padding: 30px;
    }

    // tabs主体
    .tabs-subject {
      height: vw(750, 960);

      .tabs {
        grid-gap: 25px;
        font-size: 22px;
      }

      .locale {
        width: 150px;
        height: 38px;

        .locale-btn {
          width: 150px;
          height: 38px;
          font-size: 18px;

          .logo-img {
            width: 18px;
            height: 18px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}

// 小型号到中型号的平板
@media screen and (min-width:960px) and (max-width:1264px) {

  // 顶部导航
  .top-navigation {

    // LOGO
    .logo {
      padding-right: 30px;
      grid-gap: 15px;

      .logo-img {
        width: 60px;
      }

      .logo-title {
        font-size: 24px;
      }
    }

    // Tabs（选项卡）
    .tabs {
      font-size: 16px;
    }

    // 语言
    .locale {
      .locale-btn {
        font-size: 16px;
      }
    }
  }

}

// 桌面端
@media screen and (min-width:1264px) and (max-width:1904px) {}

// 4K 和超宽屏幕
@media screen and (min-width:1904px) {}
</style>
