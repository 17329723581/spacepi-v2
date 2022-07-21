<template>
  <div>
    <!-- 动画电脑端 -->
    <div class="pc" >
      <animation class="animation"></animation>
    </div>
    <!-- 动画移动端 -->
    <div class="mo">
      <animationm class="animation" ></animationm>
    </div>
    <!-- spacePi容器 -->
    <spacePi></spacePi>
    <!-- spacePi图片主体 -->
    <div class="spacepi_bg">
      <div class="spacepi-img-subject">
        <!-- spacePi图片容器 -->
        <v-container class="spacepi-img-container">
          <v-img src="@/assets/spacepi.png"></v-img>
        </v-container>
      </div>
    </div>


    <!--  partners容器  -->
    <div class="spacepi_bg">
      <v-container class="partners-container">
        <!-- partners内容 -->
        <div class="partners-content wow spacepi-animation fade-out-min-in-max-animation">
          {{$t('partners_carousel_text')}}
        </div>
        <!-- partners轮播 -->
        <div class="partners-carousel">
          <v-carousel  show-arrows-on-hover hide-delimiters v-model="carouselChartIndex"  class="partners-height" height="auto">
            <!-- 轮播图 -->
            <v-carousel-item active-class="partners-active-class" v-for="(item, index) in responsecArray" :key="index" class="partners-height" v-if="index<5">
              <div class="carousel-chart" @mouseover="carouselStartStatus(true)" @mouseleave="carouselStartStatus(false)">
                <div  class="carousel-car"
                  v-show="index == carouselChartIndex">
                  <template v-for="(it, ind) in carouseChartArrar">
                      <v-img v-if="item.id == it.p_id" :key="ind" :src="it.picture"  @click="spacepiTo(it.link)" style="cursor: pointer;" class="v-img"></v-img>
                  </template>
                </div>
              </div>
            </v-carousel-item>
            <!-- 轮播左按钮 -->
            <template v-slot:prev="{ on, attrs }">
              <div class="carousel-left" v-bind="attrs" v-on="on" @click="carousel('up')">
                <a>
                  <v-img style="width: 100%;height: 100%;" src="@/assets/carousel-left.png"></v-img>
                </a>
              </div>
            </template>
            <!-- 轮播右按钮 -->
            <template v-slot:next="{ on, attrs }">
              <div class="carousel-right" v-bind="attrs" v-on="on" @click="carousel('down')">
                <a>
                  <v-img style="width: 100%;height: 100%;" src="@/assets/carousel-right.png"></v-img>
                </a>
              </div>
            </template>
          </v-carousel>
          <!-- 轮播进度条 -->
          <div class="carousel-progress">
            <a v-for="(item, index) in progressArray" :key="index" v-if="index<5">
              <v-progress-linear background-color="rgba(253, 211, 51, 0.6)" color="#FDD333" :value="item"
                @click="carouselProgressClick(index)"></v-progress-linear>
            </a>
          </div>
        </div>
        <!-- partners更多按钮 -->
        <a>
          <div class="partners-bnt " @click="$router.push('/partners')">{{$t('happy_gd')}} </div>
        </a>
      </v-container>
    </div>

    <!-- what主体 -->
    <div class="what-subject">
      <div class="spacepi_bg">
        <!-- what容器 -->
        <v-container class="what-container wow spacepi-animation fade-right-in-left-animation">
          <!-- what标题 -->
          <div class="what-title">
            <div class="what-line"></div>
            {{ $t('doge') }}
          </div>
          <!-- what内容 -->
          <div class="what-content">
            <span>{{ $t('text')[0] }}</span>
            <span>{{ $t('text')[1] }}</span>
            <span>{{ $t('text')[2] }}</span>
          </div>
        </v-container>
        <!-- what浮动1 -->
        <div class="what-float1">
          <!-- what容器 -->
          <v-container class="what-container">
            <!-- what主体1 -->
            <div class="what-subject1">
              <div class="what-left">
                <div class="v-img-s">
                  <div class="v-img">
                    <v-img src="@/assets/what/what1.png"></v-img>
                  </div>
                </div>
                <div class="character-img">
                  <v-img  src="@/assets/character.png"></v-img>
                </div>
              </div>
              <div class="what-right wow spacepi-animation fade-right-in-left-animation">
                <div class="right-s">
                  <!-- what标题 -->
                  <div class="what-title">
                    {{ $t('car')[0].title }}
                  </div>
                  <!-- what内容 -->
                  <div class="what-content">
                    {{ $t('car')[0].content }}
                  </div>
                </div>
              </div>
            </div>
          </v-container>
        </div>
        <!-- what浮动2 -->
        <div class="what-float2">
          <!-- what容器 -->
          <v-container class="what-container">
            <!-- what主体2 -->
            <div class="what-subject2">
              <div class="what-left wow spacepi-animation fade-left-in-right-animation">
                <div class="left-s">
                  <!-- what标题 -->
                  <div class="what-title">
                    {{ $t('car')[1].title }}
                  </div>
                  <!-- what内容 -->
                  <div class="what-content">
                    {{ $t('car')[1].content }}
                  </div>
                </div>
              </div>
              <div class="what-right">
                <div class="v-img-s">
                  <div class="v-img">
                    <v-img src="@/assets/what/what2.png" ></v-img>
                  </div>
                </div>
                <div class="aircraft-img">
                  <v-img  src="@/assets/aircraft.png"></v-img>
                </div>
              </div>
            </div>
          </v-container>
        </div>
      </div>
    </div>
    <!-- concept容器 -->
    <div class="spacepi_bg">
      <v-container class="concept-container">
        <!--concept标题主体  -->
        <div class="concept-title-subject wow spacepi-animation fade-right-in-left-animation">
          <!-- concept标题 -->
          <span class="concept-title">{{ $t('station').enter }}</span>
          <!-- 副标题主体 -->
          <div class="Vice-title-subject">
            <div class="Vice-title">
              <div class="line"></div> {{ $t('station').title }}
            </div>
          </div>
        </div>
        <!-- concept主体 -->
        <div class="concept-subject">
          <!-- concept图片 -->
          <div class="concept-img">
            <v-img src="@/assets/concept_space_capsule.png"></v-img>
          </div>
          <!-- concept内容 -->
          <div class="concept-content wow spacepi-animation fade-right-in-left-animation">
            <span>{{ $t("station").text[0] }}</span>
            <span>{{ $t("station").text[1] }}</span>
          </div>
        </div>
        <!-- concept卡片 -->
        <div class="concept-car wow spacepi-animation fade-in-up-animation">
          <!-- 卡片 -->
          <div class="car concept-card concept-card-animation">
            <!-- 卡片标题 -->
            <span class="car-title">{{ $t("station").c[2].title }}</span>
            <!-- 卡片内容 -->
            <span class="car-content text-w">{{ $t("station").c[2].text }}</span>
          </div>
          <!-- 卡片 -->
          <div class="car concept-card concept-card-animation">
            <!-- 卡片标题 -->
            <span class="car-title">{{ $t("station").c[3].title }}</span>
            <!-- 卡片内容 -->
            <span class="car-content">{{ $t("station").c[3].text }}</span>
          </div>
          <!-- 卡片 -->
          <div class="car concept-card concept-card-animation">
            <!-- 卡片标题 -->
            <span class="car-title">{{ $t("station").c[5].title }}</span>
            <!-- 卡片内容 -->
            <span class="car-content">{{ $t("station").c[5].text }}</span>
          </div>
          <!-- 卡片 -->
          <div class="car concept-card concept-card-animation">
            <!-- 卡片标题 -->
            <span class="car-title">{{ $t("station").c[1].title }}</span>
            <!-- 卡片内容 -->
            <span class="car-content">{{ $t("station").c[1].text }}</span>
          </div>
          <!-- 卡片 -->
          <div class="car concept-card concept-card-animation">
            <!-- 卡片标题 -->
            <span class="car-title">{{ $t("station").c[0].title }}</span>
            <!-- 卡片内容 -->
            <span class="car-content">{{ $t("station").c[0].text }}</span>
          </div>
          <!-- 卡片 -->
          <div class="car concept-card concept-card-animation">
            <!-- 卡片标题 -->
            <span class="car-title">{{ $t("station").c[4].title }}</span>
            <!-- 卡片内容 -->
            <span class="car-content">{{ $t("station").c[4].text }}</span>
          </div>
        </div>
      </v-container>
    </div>
    <!-- nftCarousel外部容器 -->
    <div class="spacepi_bg">
      <v-container class="nftCarousel_container">
        <nftCarousel></nftCarousel>
      </v-container>
    </div>
    <!-- telegraph主体 -->
    <div class="spacepi_bg">
      <div class="telegraph-subject">
        <!-- 电报 -->
        <telegraph></telegraph>
      </div>
    </div>
    <!-- spacepiwep外部容器 -->
    <div class="spacepi_bg">
      <v-container class="spacepiwep-external-container">
        <!-- spacepiwepw容器 -->
        <div class="spacepiwep-container">
          <div class="spacepiwep-left">
            <!-- spacepiwep图片 -->
            <div class="spacepiwep-img wow spacepi-animation fade-in-down-animation">
              <div class="spacepiwep-img-subject">
                <v-img src="@/assets/spacepiwep-img.png"></v-img>
              </div>
              <!-- <div class="spacepiwep-img-s">
                <v-img class="spacepiwep-img-s" src="https://picsum.photos/350/165?random"></v-img>
              </div> -->

            </div>
            
            
            
          </div>

          <div class="spacepiwep-right">
            <!-- spacepiwep容器主体 -->
            <div class="spacepiwep-container-subject">
              <!-- spacepiwep标题主体 -->
              <div class="spacepiwep-title-subject wow spacepi-animation fade-right-in-left-animation">
                <div class="line"></div>
                <!-- spacepiwep标题 -->
                <span class="spacepiwep-title">{{ $t("spacepiwep").title }}</span>
              </div>
              <!-- audit-report -->
              <!-- <div class="audit-report wow spacepi-animation fade-in-up-animation">
                <div class="audit-report-logo">
                  <div class="spacepiwep-img-subject">
                    <v-img  src="@/assets/audit-report-logo.png"></v-img>
                  </div>
                </div>

                <div class="audit-report-o">
                  

                  <div class="audit-fillet" id="spot-m"></div>
                  
                  <span class="audit-fillet-title">{{ $t("spacepiwep").o }}</span>
                </div>
                
                <a class="bnttest" href="">
                  <div class="audit-report-view">
                    <v-img  src="@/assets/view.png"></v-img>
                  </div>
                  <span class="bnttest-title">
                    {{ $t("spacepiwep").bnt }}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="bnttest-svg" viewBox="0 0 254 60">
                        <path id="路径_2379" data-name="路径 2379" d="M243.407,60H0V0H254V50.05Z" fill="#fdd333"/>
                    </svg>
              </a>
              </div> -->
              <!-- spacepiwep内容 -->
              <div class="spacepiwep-content wow spacepi-animation fade-in-up-animation">
                {{ $t("spacepiwep").text }}
              </div>
            </div>
            <!-- spacepiwep按钮 -->
            <a class="cta spacepiwep-bnt wow spacepi-animation fade-in-up-animation" :href="$t('spacepiwep').trend_bnt_url" target="_blank">
              <span>{{ $t("spacepiwep.trend_bnt_title") }}</span>
              <span>
                <svg width="25px" height="43px" viewBox="0 0 66 43" version="1.1">
                  <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path class="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path class="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path class="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </v-container>
      <!-- spacepiwep-external-container移动端 -->
      <v-container class="spacepiwep-external-container-m">
        <!-- spacepiwep标题主体 -->
        <div class="spacepiwep-title-subject wow spacepi-animation fade-right-in-left-animation">
          <div class="line"></div>
          <span>{{ $t("spacepiwep").title }}</span>
        </div>
        <!-- audit-report主体 -->
        <!-- <div class="audit-report wow spacepi-animation fade-in-up-animation">
          <div class="audit-report-logo">
            <div class="spacepiwep-img-subject">
              <v-img  src="@/assets/audit-report-logo.png"></v-img>
            </div>
          </div>
          <div class="audit-report-o">
            <div class="audit-fillet" id="spot"></div>
            <span class="audit-fillet-title">{{ $t("spacepiwep").o }}</span>
          </div>
          <div class="audit-report-bnt">
            <div>
              <v-img width="29" height="21" src="@/assets/view.png"></v-img>
            </div>
            <span class="audit-report-title">{{ $t("spacepiwep").bnt }}</span>
          </div>
        </div> -->
        <div class="spacepiwep-content wow spacepi-animation fade-in-up-animation">
          {{ $t("spacepiwep").text }}
        </div>
        <!-- spacepiwep图片 -->
        <div class="spacepiwep-img wow spacepi-animation fade-in-up-animation">
          <div class="spacepiwep-img-subject">
            <v-img src="@/assets/spacepiwep-img.png"></v-img>
          </div>
          <!-- <div class="spacepiwep-img-s">
            <v-img class="spacepiwep-img-s" src="https://picsum.photos/350/165?random"></v-img>
          </div> -->
        </div>
        <!-- spacepiwep按钮 -->
        <a>
          <div class="spacepiwep-bnt wow spacepi-animation fade-in-up-animation">
            {{ $t("spacepiwep.trend_bnt_title") }} </div>
        </a>
      </v-container>
    </div>


    <!-- roadmap容器 -->
    <div class="roadmap_bg">
      <v-container class="roadmap-container">
        <!-- roadmap主体 -->
        <div class="roadmap-subject wow spacepi-animation fade-right-in-left-animation">
          <!-- roadmap标题主体 -->
          <div class="roadmap-title-subject">
            <div class="line"></div>
            <span class="roadmap-title">-{{$t('ROADMAP')}}</span>
          </div>
          <!-- roadmap内容 -->
          <div class="roadmap-content">
            {{$t('ROADMAPtext')}}
          </div>
        </div>
        <!-- one主体 -->
        <div class="one-subject">
          <div class="one-img">
            <v-img src="@/assets/one-img.png"></v-img>
          </div>
          <!-- one内容 -->
          <div class="one-content wow spacepi-animation fade-right-in-left-animation">
            <div class="one-title">{{$t('Phase1')}}</div>
            <div class="one-text one-yellow">
              <span>{{$t('rt1_text1')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt1_text2')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt1_text3')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt1_text4')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt1_text5')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt1_text6')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt1_text7')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt1_text8')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt1_text9')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt1_text10')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
          </div>
        </div>
        <!-- two主体 -->
        <div class="two-subject" style="z-index: 1;">
          <!-- one内容 -->
          <div class="one-content wow spacepi-animation fade-left-in-right-animation">
            <div class="one-title">{{$t('Phase2')}}</div>
            <div class="one-text one-white">{{$t('rt2_text1')}}</div>
            <div class="one-text one-white">
              <span>{{$t('rt2_text2')}}</span>
            </div>
            <div class="one-text one-white">
              <span>{{$t('rt2_text3')}}</span>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt2_text4')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt2_text5')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-yellow">
              <span>{{$t('rt2_text6')}}</span>
              <div class="one-yes">
                <v-img src="@/assets/roadmap-yes.png"></v-img>
              </div>
            </div>
            <div class="one-text one-white">
              <span>{{$t('rt2_text7')}}</span>
            </div>
            <div class="one-text one-white">{{$t('rt2_text8')}}</div>
            <div class="one-text one-white">{{$t('rt2_text9')}}</div>
          </div>
          <div class="one-img">
            <v-img  src="@/assets/one-img1.png"></v-img>
          </div>
        </div>
      </v-container>
    </div>
    <!-- tokenomics容器 -->
    <div class="spacepi_bg">
      <v-container class="tokenomics-container">
        <!-- tokenomics主体 -->
        <div class="tokenomics-subject">
          <!-- tokenomics左 -->
          <div class="tokenomics-left">
            <div class="tokenomics-left-subject wow spacepi-animation fade-right-in-left-animation">
              <!-- tokenomics左标题主体 -->
              <div class="tokenomics-left-title-subject">
                <div class="line"></div>
                <!-- tokenomics左标题 -->
                <span class="tokenomics-left-title">{{$t('Tokenomics').title}}</span>
              </div>
              <!-- tokenomics左副标题 -->
              <div class="tokenomics-left-Vice-title">{{$t('Tokenomics').text}}</div>
              <!-- tokenomics左内容 -->
              <div class="tokenomics-left-content">
                {{$t('Tokenomics').content}}
              </div>
            </div>
          </div>
          <!-- tokenomics内容 -->
          <div class="tokenomics-content wow spacepi-animation fade-in-up-animation">
            <div class="tokenomics-grid">
              <span class="tokenomics-grid-title"> {{$t('Tokenomics').array[0].title}}</span>
              <span class="tokenomics-grid-content">{{$t('Tokenomics').array[0].text}}</span>
            </div>
            <div class="tokenomics-grid">
              <span class="tokenomics-grid-title">{{$t('Tokenomics').array[1].title}}</span>
              <span class="tokenomics-grid-content">{{$t('Tokenomics').array[1].text}}</span>
            </div>
            <div class="tokenomics-grid">
              <span class="tokenomics-grid-title">{{$t('Tokenomics').array[2].title}}</span>
              <span class="tokenomics-grid-content">{{$t('Tokenomics').array[2].text}}</span>
            </div>
          </div>
        </div>
      </v-container>
      <!-- tokenomics容器移动端 -->
      <v-container class="tokenomics-container-m">
        <!-- tokenomics标题主体 -->
        <div class="tokenomics-title-subject wow spacepi-animation fade-right-in-left-animation">
          <div class="line"></div>
          <!-- tokenomics标题 -->
          <span class="tokenomics-title">{{$t("Tokenomics").title}}</span>
        </div>
        <!-- tokenomics副标题 -->
        <div class="tokenomics--Vice-title wow spacepi-animation fade-right-in-left-animation">{{$t("Tokenomics").text}}</div>
        <!-- tokenomics内容 -->
        <div class="tokenomics-left-content wow spacepi-animation fade-out-min-in-max-animation">
          {{$t("Tokenomics").content}}
        </div>
        <!-- tokenomics内容 -->
        <div class="tokenomics-content wow spacepi-animation fade-in-up-animation">
          <div class="tokenomics-grid">
            <span class="tokenomics-grid-title">{{$t("Tokenomics").array[0].title}}</span>
            <span class="tokenomics-grid-content">{{$t("Tokenomics").array[0].text}}</span>
          </div>
          <div class="tokenomics-grid">
            <span class="tokenomics-grid-title">{{$t("Tokenomics").array[1].title}}</span>
            <span class="tokenomics-grid-content">{{$t("Tokenomics").array[1].text}}</span>
          </div>
          <div class="tokenomics-grid">
            <span class="tokenomics-grid-title">{{$t("Tokenomics").array[2].title}}</span>
            <span class="tokenomics-grid-content">{{$t("Tokenomics").array[2].text}}</span>
          </div>
        </div>
      </v-container>
    </div>
    <!-- choice容器主体 -->
    <div class="spacepi_bg">
      <div class="choice-container-subject">
        <!-- choice容器 -->
        <v-container class="choice-container">
          <!-- choice说明 -->
          <div class="choice-explain">
            <!-- choice说明内容 -->
            <span class="choice-explain-content wow spacepi-animation fade-out-min-in-max-animation">
              {{$t('answers').text}}
            </span>
          </div>
          <!-- choice区域 -->
          <div class="choice-region wow spacepi-animation fade-in-up-animation">
            <!-- choice左 -->
            <div class="choice-left">
              <!-- 1 -->
              <a @click="choiceClick(1)">
                <!-- choice主体 -->
                <div class="choice-subject" :style="choice[0] == 0 ? '' : 'background: rgba(22, 15, 38, 0.4)'">
                  <!-- choice标题主体 -->
                  <div class="choice-title-subject">
                    <span class="choice-title">{{$t('answers').array[0].title}}</span>
                    <div class="choice-img">
                      <v-img src="@/assets/choice-down.png" v-if="choice[0] == 0"></v-img>
                      <v-img src="@/assets/choice-up.png" v-else></v-img>
                    </div>
                  </div>
                  <span class="choice-content" v-if="choice[0] == 1">
                    {{$t('answers').array[0].text}}
                  </span>
                </div>
              </a>
              <!-- 2 -->
              <a @click="choiceClick(2)">
                <!-- choice主体 -->
                <div class="choice-subject" :style="choice[1] == 0 ? '' : 'background: rgba(22, 15, 38, 0.4)'">
                  <!-- choice标题主体 -->
                  <div class="choice-title-subject">
                    <span class="choice-title">{{$t('answers').array[1].title}}</span>
                    <div class="choice-img">
                      <v-img src="@/assets/choice-down.png" v-if="choice[1] == 0"></v-img>
                      <v-img src="@/assets/choice-up.png" v-else></v-img>
                    </div>
                  </div>
                  <span class="choice-content" v-if="choice[1] == 1">
                    {{$t('answers').array[1].text}}
                  </span>
                </div>
              </a>
              <!-- 3 -->
              <a @click="choiceClick(3)">
                <!-- choice主体 -->
                <div class="choice-subject" :style="choice[2] == 0 ? '' : 'background: rgba(22, 15, 38, 0.4)'">
                  <!-- choice标题主体 -->
                  <div class="choice-title-subject">
                    <span class="choice-title">{{$t('answers').array[2].title}}</span>
                    <div class="choice-img">
                      <v-img src="@/assets/choice-down.png" v-if="choice[2] == 0"></v-img>
                      <v-img src="@/assets/choice-up.png" v-else></v-img>
                    </div>
                  </div>
                  <span class="choice-content" v-if="choice[2] == 1">
                    {{$t('answers').array[2].text}}
                  </span>
                </div>
              </a>
              <!-- 4 -->
              <a @click="choiceClick(4)">
                <!-- choice主体 -->
                <div class="choice-subject" :style="choice[3] == 0 ? '' : 'background: rgba(22, 15, 38, 0.4)'">
                  <!-- choice标题主体 -->
                  <div class="choice-title-subject">
                    <span class="choice-title">{{$t('answers').array[3].title}}</span>
                    <div class="choice-img">
                      <v-img src="@/assets/choice-down.png" v-if="choice[3] == 0"></v-img>
                      <v-img src="@/assets/choice-up.png" v-else></v-img>
                    </div>
                  </div>
                  <span class="choice-content" v-if="choice[3] == 1">
                    {{$t('answers').array[3].text}}
                  </span>
                </div>
              </a>
            </div>
            <!-- choice右 -->
            <div class="choice-left">
              <!-- 5 -->
              <a @click="choiceClick(5)">
                <!-- choice主体 -->
                <div class="choice-subject" :style="choice[4] == 0 ? '' : 'background: rgba(22, 15, 38, 0.4)'">
                  <!-- choice标题主体 -->
                  <div class="choice-title-subject">
                    <span class="choice-title">{{$t('answers').array[4].title}}</span>
                    <div class="choice-img">
                      <v-img src="@/assets/choice-down.png" v-if="choice[4] == 0"></v-img>
                      <v-img src="@/assets/choice-up.png" v-else></v-img>
                    </div>
                  </div>
                  <span class="choice-content" v-if="choice[4] == 1">
                    {{$t('answers').array[4].text}}
                  </span>
                </div>
              </a>
              <!-- 6 -->
              <a @click="choiceClick(6)">
                <!-- choice主体 -->
                <div class="choice-subject" :style="choice[5] == 0 ? '' : 'background: rgba(22, 15, 38, 0.4)'">
                  <!-- choice标题主体 -->
                  <div class="choice-title-subject">
                    <span class="choice-title">{{$t('answers').array[5].title}}</span>
                    <div class="choice-img">
                      <v-img src="@/assets/choice-down.png" v-if="choice[5] == 0"></v-img>
                      <v-img src="@/assets/choice-up.png" v-else></v-img>
                    </div>
                  </div>
                  <span class="choice-content" v-if="choice[5] == 1">
                    {{$t('answers').array[5].text}}
                  </span>
                </div>
              </a>
              <!-- 7 -->
              <a @click="choiceClick(7)">
                <!-- choice主体 -->
                <div class="choice-subject" :style="choice[6] == 0 ? '' : 'background: rgba(22, 15, 38, 0.4)'">
                  <!-- choice标题主体 -->
                  <div class="choice-title-subject">
                    <span class="choice-title">{{$t('answers').array[6].title}}</span>
                    <div class="choice-img">
                      <v-img src="@/assets/choice-down.png" v-if="choice[6] == 0"></v-img>
                      <v-img src="@/assets/choice-up.png" v-else></v-img>
                    </div>
                  </div>
                  <span class="choice-content" v-if="choice[6] == 1">
                    {{$t('answers').array[6].text}}
                  </span>
                </div>
              </a>
              <div class="choice-height"></div>
            </div>
          </div>
        </v-container>
      </div>
    </div>
    <!-- 底部 -->
    <foot></foot>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import spacePi from "@/views/home/components/spacePi.vue";
// 引入动画电脑端组件
import animation from "@/components/animation.vue";
// 引入动画移动端组件
import animationm from "@/components/animationm.vue";
// 引入电报组件
import telegraph from "@/components/telegraph.vue";
// 引入底部组件
import foot from "@/components/foot.vue";

import lottie from "lottie-web";
import spot from '@/assets/animation/spot.json';

import nftCarousel from '@/views/nft/components/nftCarousel'

export default {
  data() {
    return {
      // 测试轮播卡片索引
      carouselChartIndex: 0,
      // 轮播图
      carouseChartArrar: [],
      // 友情合作商分类数据
      responsecArray:[],
      progresstime: null,
      // 进度
      progress: 0,
      progressArray: [],
      // choice状态
      choice: [],
      response: [],

    }
  },
  components: {
    spacePi,
    animation,
    animationm,
    telegraph,
    foot,
    nftCarousel
  },
  computed: {
    ...mapState(["domainUrl", "locale"]),
  },
  mounted() {
    setTimeout(() => {
      this.partnersC();
      this.partners();
    },1)
    setTimeout(() => {
      //this.carouselStartInterval();
    }, 1000)




    let spotparams = {
    container: document.getElementById("spot"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: spot
    };
    let anim;
    anim = lottie.loadAnimation(spotparams);


    let spotparams_m = {
    container: document.getElementById("spot-m"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: spot
    };
    let anim_m;
    anim_m = lottie.loadAnimation(spotparams_m);
  },
  methods: {
    // spacepi跳转
    spacepiTo(e) {
      window.open(e)
    },
    // carousel开启定时器
    carouselStartInterval() {
      this.progresstime = setInterval(() => {

        var progressArray = [];
        this.progress++;
        for (let index = 0; index < this.responsecArray.length; index++) {
          progressArray[index] = 0;
        }
        progressArray[this.carouselChartIndex] = this.progress;
        if (this.progress == 100) {
          this.progress = 0;
          this.carouselChartIndex++;
          if (this.responsecArray.length <= this.carouselChartIndex) {
            this.carouselChartIndex = 0;
          }
        }
        this.progressArray = progressArray;
      }, 100)

    },
    //获取友情合作商分类数据
    partnersC() {
      var _this = this;
      axios.post(this.domainUrl + "partnersList").then(function (response) {
        _this.responsecArray = response.data.data;
      }).catch(function (error) {
        //     // 请求失败处理
      });
    },
    //获取友情合作商链接
    partners() {
      var _this = this;
      axios.post(this.domainUrl + "Partners").then(function (response) {
        _this.carouseChartArrar = response.data.data;
      }).catch(function (error) {
        //     // 请求失败处理
      });
    },
    // carousel左右点击事件
    carousel(e) {
      this.progress = 0;
      if (e === 'down') {
        this.carouselChartIndex++;
        if (this.responsecArray.length <= this.carouselChartIndex) {
          this.carouselChartIndex = 0;
        }
      } else {
        if (this.carouselChartIndex === 0) {
          this.carouselChartIndex = this.responsecArray.length;
        }
        this.carouselChartIndex--;
      }
    },
    // carousel定时器状态
    carouselStartStatus(e) {
      if (e) {
        clearInterval(this.progresstime)
      } else {
        this.carouselStartInterval()
      }
    },
    // carousel点击进度条事件
    carouselProgressClick(e) {
      this.carouselChartIndex = e;
      this.progress = 0;
    },
    // choice点击事件
    choiceClick(e) {
      this.choice = [0, 0, 0, 0, 0, 0, 0, 0];
      for (var i = 0; i < this.choice.length; i++) {
        if (i == e - 1) {
          this.choice[i] = 1;
        }
      }
    }
  }
}

</script>
<style scoped lang="scss">
@import "@/scss/adaptation.scss";
$width:1200;
.pc{
  display: block;
}
.mo{
  display: none;
}

.spacepi_bg {
  background-image: url("../../assets/spacepi_bg.png");
}

// 动画
.animation {
  width: 100%;
  margin-top: -85px;
  z-index: -1;
  position: absolute;
}

// spacePi图片主体
.spacepi-img-subject {
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background: #160F26;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @-webkit-keyframes spacepi-img-subject-out {
    0% {
      -webkit-transform: translate(50px, 0);
    }

    10% {
      -webkit-transform: translate(45px, 0);
    }

    20% {
      -webkit-transform: translate(40px, 0);
    }

    30% {
      -webkit-transform: translate(35px, 0);
    }

    40% {
      -webkit-transform: translate(30px, 0);
    }

    50% {
      -webkit-transform: translate(25px, 0);
    }

    60% {
      -webkit-transform: translate(20px, 0);
    }

    70% {
      -webkit-transform: translate(15px, 0);
    }

    80% {
      -webkit-transform: translate(10px, 0);
    }

    90% {
      -webkit-transform: translate(5px, 0);
    }

    100% {
      -webkit-transform: translate(0, 0);
    }
  }

  -webkit-transform: translate(0, 0);
  -webkit-animation-name: spacepi-img-subject-out;
  -webkit-animation-duration:0.5s;
  -webkit-animation-iteration-count:1;
  -webkit-animation-delay:0;

  // spacePi图片容器
  .spacepi-img-container {
    max-width: 1500px;
  }
}

// spacePi图片主体鼠标移动
.spacepi-img-subject:hover {
  @-webkit-keyframes spacepi-img-subject {
    0% {
      -webkit-transform: translate(0, 0);
    }

    10% {
      -webkit-transform: translate(5px, 0);
    }

    20% {
      -webkit-transform: translate(10px, 0);
    }

    30% {
      -webkit-transform: translate(15px, 0);
    }

    40% {
      -webkit-transform: translate(20px, 0);
    }

    50% {
      -webkit-transform: translate(25px, 0);
    }

    60% {
      -webkit-transform: translate(30px, 0);
    }

    70% {
      -webkit-transform: translate(35px, 0);
    }

    80% {
      -webkit-transform: translate(40px, 0);
    }

    90% {
      -webkit-transform: translate(45px, 0);
    }

    100% {
      -webkit-transform: translate(50px, 0);
    }
  }
  -webkit-transform: translate(50px, 0px);
  -webkit-animation-name: spacepi-img-subject;
  -webkit-animation-duration:0.5s;
  -webkit-animation-iteration-count:1;
  -webkit-animation-delay:0;
}

// what主体
.what-subject {
  background-image: url("../../assets/what_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: -1;
  display: grid;
  margin-top: 100px;

  // what容器
  .what-container {
    color: #FDD333;
    max-width: 1200px;
    z-index: 1;
    

    // what标题
    .what-title {
      font-size: 60px;
      font-family: Fenton-Black;
      font-weight: 900;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      grid-gap: 25px;

      .what-line {
        width: 6px;
        height: 44px;
        background: #FDD333;
      }
    }

    // what内容
    .what-content {
      margin-top: 50px;
      display: grid;
      grid-gap: 15px;
      font-size: 20px;
      font-family: Fenton-Regular;
      font-weight: 400;
      color: #FDD333;
    }

    // what主体1
    .what-subject1 {
      z-index: 1;
      margin-top: 70px;
      display: flex;
      height: 687px;
      position: relative;

      .what-left {
        width: 50%;
        z-index: -1;

        .v-img-s {
          filter: drop-shadow(10px 10px 30px rgba(0, 212, 255, 0.16));
          z-index: -1;
        }

        .v-img {
          width: 583px;
          height: 687px;
          position: absolute;
          left: 100px;
          clip-path: polygon(86% 2%, 88% 0, 100% 0, 100% 100%, 0 100%, 0 0, 63% 0, 65% 2%);
          z-index: 1;
        }

        .character-img {
          position: absolute;
          bottom: 0;

          @-webkit-keyframes fadeOut {
            0% {
              -webkit-transform: translate(10px, -10px);
            }

            10% {
              -webkit-transform: translate(9px, -9px);
            }

            20% {
              -webkit-transform: translate(8px, -8px);
            }

            30% {
              -webkit-transform: translate(7px, -7px);
            }

            40% {
              -webkit-transform: translate(6px, -6px);
            }

            50% {
              -webkit-transform: translate(5px, -5px);
            }

            60% {
              -webkit-transform: translate(4px, -4px);
            }

            70% {
              -webkit-transform: translate(3px, -3px);
            }

            80% {
              -webkit-transform: translate(2px, -2px);
            }

            90% {
              -webkit-transform: translate(1px, -1px);
            }

            100% {
              -webkit-transform: translate(0px, 0px);
            }
          }

          -webkit-transform: translate(0px, 0px);
          -webkit-animation-name: fadeOut;
          -webkit-animation-duration:0.5s;
          -webkit-animation-iteration-count:1;
          -webkit-animation-delay:0;
        }
      }

      .what-right {
        width: 50%;
        position: relative;

        .right-s {
          width: 500px;
          position: absolute;
          bottom: 130px;
          left: -10px;

          .what-title {
            font-size: 46px;
            font-family: Fenton-Black;
            font-weight: 900;
            color: #FFFFFF;
          }

          .what-content {
            margin-top: 20px;
            font-size: 20px;
            font-family: Fenton-Regular;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
      }
    }

    // what主体2
    .what-subject2 {
      z-index: 1;
      display: flex;
      height: 687px;
      position: relative;
      margin-top: 25px;

      .what-left {
        width: 50%;
        position: relative;

        .left-s {
          width: 580px;
          position: absolute;
          bottom: 130px;
          right: -50px;

          .what-title {
            font-size: 46px;
            font-family: Fenton-Black;
            font-weight: 900;
            color: #FFFFFF;
          }

          .what-content {
            margin-top: 20px;
            font-size: 20px;
            font-family: Fenton-Regular;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
      }

      .what-right {
        width: 50%;
        z-index: -1;

        .v-img-s {
          filter: drop-shadow(10px 10px 30px rgba(0, 212, 255, 0.16));
          z-index: -1;
        }

        .v-img {
          width: 583px;
          height: 687px;
          position: absolute;
          right: 100px;
          clip-path: polygon(86% 2%, 88% 0, 100% 0, 100% 100%, 0 100%, 0 0, 63% 0, 65% 2%);
          z-index: 1;
        }

        .aircraft-img {
          width: 500px;
          height: 400px;
          position: absolute;
          top: 150px;
          right: -50px;

          @-webkit-keyframes aircraftOut {
            0% {
              -webkit-transform: translate(-20px, -20px);
            }

            10% {
              -webkit-transform: translate(-18px, -18px);
            }

            20% {
              -webkit-transform: translate(-16px, -16px);
            }

            30% {
              -webkit-transform: translate(-14px, -14px);
            }

            40% {
              -webkit-transform: translate(-12px, -12px);
            }

            50% {
              -webkit-transform: translate(-10px, -10px);
            }

            60% {
              -webkit-transform: translate(-8px, -8px);
            }

            70% {
              -webkit-transform: translate(-6px, -6px);
            }

            80% {
              -webkit-transform: translate(-4px, -4px);
            }

            90% {
              -webkit-transform: translate(-2px, -2px);
            }

            100% {
              -webkit-transform: translate(0, 0);
            }
          }

          -webkit-transform: translate(0px, 0px);
          -webkit-animation-name: aircraftOut;
          -webkit-animation-duration:0.5s;
          -webkit-animation-iteration-count:1;
          -webkit-animation-delay:0;
        }
      }
    }
  }

  // what浮动1鼠标移入
  .what-float1:hover {

    // what主体1鼠标移入
    .what-subject1 {
      .what-left {
        .character-img {
          @-webkit-keyframes fadeIn {
            0% {
              -webkit-transform: translateY(0px);
            }

            10% {
              -webkit-transform: translate(1px, -1px);
            }

            20% {
              -webkit-transform: translate(2px, -2px);
            }

            30% {
              -webkit-transform: translate(3px, -3px);
            }

            40% {
              -webkit-transform: translate(4px, -4px);
            }

            50% {
              -webkit-transform: translate(5px, -5px);
            }

            60% {
              -webkit-transform: translate(6px, -6px);
            }

            70% {
              -webkit-transform: translate(7px, -7px);
            }

            80% {
              -webkit-transform: translate(8px, -8px);
            }

            90% {
              -webkit-transform: translate(9px, -9px);
            }

            100% {
              -webkit-transform: translate(10px, -10px);
            }
          }

          -webkit-transform: translate(10px, -10px);
          -webkit-animation-name: fadeIn;
          -webkit-animation-duration:0.5s;
          -webkit-animation-iteration-count:1;
          -webkit-animation-delay:0;
        }
      }
    }
  }

  // what浮动2鼠标移入
  .what-float2:hover {

    // what主体2
    .what-subject2 {
      .what-right {
        .aircraft-img {
          @-webkit-keyframes aircraft {
            0% {
              -webkit-transform: translate(0px, 0px);
            }

            10% {
              -webkit-transform: translate(-2px, -2px);
            }

            20% {
              -webkit-transform: translate(-4px, -4px);
            }

            30% {
              -webkit-transform: translate(-6px, -6px);
            }

            40% {
              -webkit-transform: translate(-8px, -8px);
            }

            50% {
              -webkit-transform: translate(-10px, -10px);
            }

            60% {
              -webkit-transform: translate(-12px, -12px);
            }

            70% {
              -webkit-transform: translate(-14px, -14px);
            }

            80% {
              -webkit-transform: translate(-16px, -16px);
            }

            90% {
              -webkit-transform: translate(-18px, -18px);
            }

            100% {
              -webkit-transform: translate(-20px, -20px);
            }
          }

          -webkit-transform: translate(-20px, -20px);
          -webkit-animation-name: aircraft;
          -webkit-animation-duration:0.5s;
          -webkit-animation-iteration-count:1;
          -webkit-animation-delay:0;
        }
      }
    }
  }
}

// concept容器
.concept-container {
  max-width: 1200px;
  display: grid;
  grid-gap: 130px;
  margin-top: 100px;

  // concept标题主体
  .concept-title-subject {
    display: grid;

    // concept标题
    .concept-title {
      font-size: 26px;
      font-family: Fenton-Black, Fenton;
      font-weight: 900;
      color: #FDD333;
      margin-left: 26px;
    }

    // 副标题主体
    .Vice-title-subject {
      .Vice-title {
        display: -webkit-box;
        grid-gap: 20px;
        font-size: 60px;
        font-family: Fenton-Black, Fenton;
        font-weight: 900;
        color: #FFFFFF;
        line-height: initial;

        .line {
          width: 6px;
          height: 44px;
          background: #FDD333;
          margin-top: 16.5px;
        }
      }
    }
  }

  // concept主体
  .concept-subject {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    // concept图片
    .concept-img {
      width: 500px;
    }

    // concept内容
    .concept-content {
      display: grid;
      grid-gap: 50px;
      font-size: 20px;
      font-family: Fenton-Regular;
      font-weight: 400;
      color: #FDD333;
    }
  }

  // concept卡片
  .concept-car {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    // 卡片
    .car {
      border: 1px solid rgba(253, 211, 51, 0.2);
      display: grid;
      grid-gap: 20px;
      align-items: center;
      padding: 20px;

      // 卡片标题
      .car-title {
        font-size: 26px;
        font-family: Fenton-Black;
        font-weight: 900;
        color: #FFFFFF;
      }

      // 卡片内容
      .car-content {
        font-size: 17px;
        font-family: Fenton-Regular;
        font-weight: 400;
      }
    }
    .car-s {
      height: fit-content;
      background-repeat: no-repeat;
      border: 0;
      background: url("../../assets/concept-car.png") no-repeat center top / 100% 100%;
      ;
      //background-size: cover;

    }
  }
}

// telegraph主体
.telegraph-subject {
  // background: url("../../assets/telegraph_bg.png") no-repeat;
  height: auto;
  background-size: 100% 100%;

  // telegraph容器
  .telegraph-container {
    max-width: 1500px;
    padding-top: 0;
    display: grid;
    grid-gap: 100px;
  }
}

// spacepiwep外部容器
.spacepiwep-external-container {
  height: 900px;
  max-width: 1500px;
  position: relative;
  filter: drop-shadow(10px 10px 30px rgba(64, 0, 255, 0.314));

  // spacepiwep容器
  .spacepiwep-container {
    height: 611px;
    margin-top: 250px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    align-items: center;
    clip-path: polygon(0 0, 77% 0, 78% 2%, 90% 2%, 91% 0, 100% 0, 100% 100%, 0 100%);
    background: url('../../assets/spacepiwep-bg.png');
    background-size: cover;

    .spacepiwep-left {
      display: grid;
      grid-gap: 30px;
      align-items: center;
      justify-items: center;
      height: 500px;

      // spacepiwep图片
      .spacepiwep-img {
        filter: drop-shadow(10px 10px 30px rgba(64, 0, 255, 0.314));
        // width: 25vw;
        position: relative;
        z-index: 1;

        .spacepiwep-img-subject {
          z-index: 1;
          width:600px;
          @media screen and (max-width:1400px){
            width:500px;
          }
          @media screen and (max-width:1200px){
            width:480px;
          }
          @media screen and (max-width:1000px){
            width:400px;
          }
        }

        .spacepiwep-img-s {
          // position: absolute;
          // top: 5px;
          // left: -7.5px;
          // z-index: -1;
          // width: 500px;
          // height: 200px;
        }
      }
    }
    .spacepiwep-right {
      // height: -webkit-fill-available;
      // height: auto;
      // position: absolute;
      // bottom: 100px;
      // right: 100px;

      // spacepiwep容器主体
      .spacepiwep-container-subject {
        display: grid;
        grid-gap: 20px;

        // spacepiwep标题主体
        .spacepiwep-title-subject {
          display: flex;
          grid-gap: 10px;
          align-items: center;

          .line {
            width: 6px;
            height: 40px;
            background: #FDD333;
          }

          // spacepiwep标题
          .spacepiwep-title {
            font-size: 50px;
            font-family: Fenton-Black, Fenton;
            font-weight: 900;
            color: #FFFFFF;
          }
        }

        // audit-report
        .audit-report {
          display: flex;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px;
          width: 551px;
          height: 89px;
          background: rgba(75, 35, 175, 0.5);
          border: 1px solid #FDD333;
          align-items: center;
          justify-content: center;

          .audit-report-logo {
            width: 120px;
          }

          .audit-report-o {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 5px;
            align-items: center;
            white-space: nowrap;
            width: min-content;

            // audit-report圆角
            .audit-fillet {
              width: 34px;
              height: 34px;
            }

            // audit-report标题
            .audit-fillet-title {
              font-size: 18px;
              font-family: Fenton-Regular;
              font-weight: 400;
              color: #FFFFFF;
            }
          }

          // audit-report按钮
          .audit-report-bnt {
            width: 204px;
            height: 52px;
            clip-path: polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 98%, 0% 50%);
            background: rgba(253, 211, 51, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-family: Fenton-Bold, Fenton;
            font-weight: bold;
            color: #FFFFFF;
            height: 52px;
            // audit-report标题
            .audit-report-title {
              margin-left: 10px;
            }
            .audit-report-view{
              width: 29px;
              height: 21px;
            }
          }
          .audit-report-bnt:hover{
            opacity:0.9;
          }
        }

        // spacepiwep内容
        .spacepiwep-content {
          font-size: 18px;
          font-family: Fenton-Regular, Fenton;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
        }
      }
      // spacepiwep按钮
      .spacepiwep-bnt {
        margin-top: 40px;
        width: 254px;
        height: 60px;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-family: Fenton-Regular, Fenton;
        font-weight: 400;
        color: #FFFFFF;
      }
    }


  }



}

// spacepiwep-external-container移动端
.spacepiwep-external-container-m {
  display: none;
}


//nftCarousel外部容器
.nftCarousel_container{
    padding: 250px 0;
    max-width: 1500px;
    display: grid;
    justify-items: center;
    grid-gap: 84px;
    width: -webkit-fill-available;
}

// partners容器
.partners-container {
  max-width: 1500px;
  display: grid;
  grid-gap: 50px;
  justify-items: center;
  position: relative;
  // 默认高度
  .partners-height{
    min-height: 210px;
    max-height: 210px;
  }
  // partners内容
  .partners-content {
    width: 1024px;
    font-size: 26px;
    font-family: Fenton-Black, Fenton;
    font-weight: 900;
    color: #FDD333;
    line-height: initial;
  }
  // partners轮播
  .partners-carousel {
    display: grid;
    position: relative;
    width: 1500px;
    @media screen and (max-width:1500px){
      width: auto;
    }
    justify-items: center;
    align-items: center;
    color: #FDD333;
    grid-gap: 50px;
    .partners-active-class{
      display: flex;
      justify-content: center;
    }

    // 轮播图
    .carousel-chart {
      height: auto;
      display: flex;
      justify-content: center;
      .carousel-car {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        max-width: 1200px;
        .v-img:hover{
          opacity:0.9;
        }
      }
    }

    // 轮播左按钮
    .carousel-left {
      position: absolute;
      left: 0;
      width: 48px;
      height: 97px;
    }

    // 轮播右按钮
    .carousel-right {
      position: absolute;
      right: 0;
      width: 48px;
      height: 97px;
    }

    // 轮播进度条
    .carousel-progress {
      width: 100%;
      display: flex;
      grid-gap: 30px;
      justify-content: center;

      .v-progress-linear {
        width: 127px;
      }
    }
  }

  // partners更多按钮
  .partners-bnt {
    width: 300px;
    height: 56px;
    background: rgba(44, 29, 81, 0.5);
    font-size: 18px;
    font-family: Fenton-Regular, Fenton;
    font-weight: 400;
    color: #FFFFFF;
    background:url("../../assets/Join-bnt.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .partners-bnt:hover {
    opacity:0.6;
  }

}

// roadmap_bg
.roadmap_bg{
  background-image: url("../../assets/roadmap_bg.png");
  background-size: 100%;
}
// roadmap容器
.roadmap-container {
  z-index: 1;
  margin-top: 100px;
  max-width: 1200px;
  display: grid;
  grid-gap: 125px;

  // roadmap主体
  .roadmap-subject {
    display: grid;
    justify-content: center;
  }

  // roadmap标题主体
  .roadmap-title-subject {
    display: flex;
    grid-gap: 20px;
    align-items: center;
    max-width: 732px;

    .line {
      width: 6px;
      height: 44px;
      background: #FDD333;
    }

    .roadmap-title {
      font-size: 60px;
      font-family: Fenton-Black;
      font-weight: 900;
      color: #FFFFFF;
    }
  }

  // roadmap内容
  .roadmap-content {
    font-size: 26px;
    font-family: Fenton-Black;
    font-weight: 900;
    color: #FDD333;
    margin-left: 26px;
    max-width: 732px;
  }

  // one主体
  .one-subject {
    display: grid;
    position: relative;
    justify-items: flex-start;
    .one-img {
      width: 700px;
      height: 331px;
    }

    .one-content {
      display: grid;
      grid-gap: 10px;
      margin-top: -200px;
      margin-left: 40px;
      z-index: 1;

      .one-title {
        font-size: 46px;
        font-family: Fenton-Black;
        font-weight: 900;
        color: #FFFFFF;
      }

      .one-text {
        font-size: 20px;
        font-family: Fenton-Medium, Fenton;
        font-weight: 500;
        display: flex;
        grid-gap: 20px;
        align-items: center;
        width: 500px;
      }

      .one-white {
        color: #FFFFFF;
      }

      .one-yellow {
        color: #FDD333;
      }

      .one-yes {
        width: 30px;
      }
    }
  }

  // two主体
  .two-subject {
    display: grid;
    position: relative;
    justify-items: flex-end;
    .one-img {
      width: 700px;
      height: 331px;;
      margin-top: -200px;
      z-index: -1;
    }

    .one-content {
      display: grid;
      grid-gap: 10px;
      margin-top: -200px;

      .one-title {
        font-size: 46px;
        font-family: Fenton-Black;
        font-weight: 900;
        color: #FFFFFF;
      }

      .one-text {
        font-size: 20px;
        font-family: Fenton-Medium, Fenton;
        font-weight: 500;
        display: flex;
        grid-gap: 20px;
        align-items: center;
        width: 500px;
      }

      .one-white {
        color: #FFFFFF;
      }

      .one-yellow {
        color: #FDD333;
      }

      .one-yes {
        width: 30px;
      }
    }
  }
}

// tokenomics容器
.tokenomics-container {
  max-width: 1500px;

  // tokenomics主体
  .tokenomics-subject {
    background:url("../../assets/tokenomics-bg.png") no-repeat;
    background-size: cover;
    margin-top: 150px;
    width: 1500px;
    height: 768px;
    position: relative;

    // tokenomics左
    .tokenomics-left {
      width: 800px;
      height: 768px;
      background:url("../../assets/tokenomics-left.png") no-repeat;
      background-size: cover;
      .tokenomics-left-subject {
        width: 600px;
        float: right;
        margin-top: 50px;

        // tokenomics左标题主体
        .tokenomics-left-title-subject {
          display: flex;
          align-items: center;
          grid-gap: 20px;

          .line {
            width: 6px;
            height: 44px;
            background: #FDD333;
          }

          // tokenomics左标题
          .tokenomics-left-title {
            font-size: 50px;
            font-family: Fenton-Black, Fenton;
            font-weight: 900;
            color: #FFFFFF;
          }

        }

        // tokenomics左副标题
        .tokenomics-left-Vice-title {
          font-size: 26px;
          font-family: Fenton-Black, Fenton;
          font-weight: 900;
          color: #FDD333;
          margin-left: 26px;
        }

        // tokenomics左内容
        .tokenomics-left-content {
          width: 323px;
          font-size: 20px;
          font-family: Fenton-Light, Fenton;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.8);
          line-height: 35px;
          margin-left: 26px;
          margin-top: 25px;
        }
      }
    }

    // tokenomics内容
    .tokenomics-content {
      display: flex;
      grid-gap: 150px;
      justify-content: center;
      position: absolute;
      bottom: 50px;
      width: 100%;

      .tokenomics-grid {
        display: grid;
        text-align: center;
        grid-gap: 30px;

        .tokenomics-grid-title {
          font-size: 35px;
          font-family: Fenton-Black;
          font-weight: 900;
          color: #FFFFFF;
        }

        .tokenomics-grid-content {
          font-size: 18px;
          font-family: Fenton-Bold, Fenton;
          font-weight: bold;
          color: #FDD333;
        }
      }
    }

  }
}

// tokenomics容器移动端
.tokenomics-container-m {
  display: none;
}

// choice容器主体
.choice-container-subject {
  background: url("../../assets/choice-bg.png");
  background-size: 100% 100%;
  height: 1000px;
  display: flex;
  align-items: center;
}

// choice容器
.choice-container {
  max-width: 1200px;
  display: grid;
  grid-gap: 50px;
  height: fit-content;

  // choice说明
  .choice-explain {
    font-size: 26px;
    font-family: Fenton-Black, Fenton;
    font-weight: 900;
    color: #FDD333;
    width: 100%;
    display: flex;
    justify-content: center;

    // choice说明内容
    .choice-explain-content {
      max-width: 834px;
    }
  }

  // choice区域
  .choice-region {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: 1fr 1fr;

    // choice左
    .choice-left {
      width: 100%;
      display: grid;
      grid-gap: 25px;
      height: fit-content;

      // hoice左主体
      .choice-height {
        width: 587px;
        height: 70px;
      }

      .choice-subject {
        width: 587px;
        min-height: 70px;
        background: rgba(44, 29, 81, 0.5);
        border: 1px solid #FDD333;
        display: grid;
        padding: 40px;
        padding-top: 20px;
        padding-bottom: 20px;
        grid-gap: 20px;

        // choice标题主体
        .choice-title-subject {
          display: flex;
          align-items: center;

          grid-gap: 20px;
          width: 100%;
          position: relative;

          .choice-title {
            font-size: 21px;
            font-family: Fenton-Regular;
            font-weight: 400;
            color: #7E8A9E;
          }

          .choice-img {
            width: 26px;
            position: absolute;
            right: 0;
          }
        }

        // choice内容
        .choice-content {
          max-width: 498px;
          font-size: 17px;
          font-family: Fenton-Regular, Fenton;
          font-weight: 400;
          color: #FFFFFF;
        }
      }
    }
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
  .pc{
    display: none;
  }
  .mo{
    display: block;
  }
  // 动画
  .animation {
    width: 100%;
    margin-top: 0px;
    top: 0;
  }

  // what主体
  .what-subject {
    background-size: cover;

    // what容器
    .what-container {
      padding-left: 32px;
      padding-right: 32px;
      // what标题
      .what-title {
        font-size: 20px;
        grid-gap: 10px;

        .what-line {
          width: 3px;
          height: 19px;
        }
      }

      // what内容
      .what-content {
        margin-top: 25px;
        font-size: 14px;
      }

      // what主体1
      .what-subject1 {
        display: grid;
        height: 500px;

        .what-left {
          width: 100%;

          .v-img {
            width: 100%;
            left: auto;
            height: 500px;
          }

          .character-img {
            width: 150px;
            bottom: 20px;
            left: -20px;
          }
        }

        .what-right {
          width: 100%;
          display: flex;
          justify-content: center;

          .right-s {
            width: vw(400, $width);
            left: auto;
            right: auto;
            bottom: 38px;

            .what-title {
              font-size: 20px;
              color: #FDD333;
            }

            .what-content {
              font-size: 12px;
            }
          }
        }
      }

      // what主体2
      .what-subject2 {
        display: grid;
        height: 500px;
        justify-items: center;

        .what-left {
          width: 100%;
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: center;

          .left-s {
            width: vw(400, $width);
            left: auto;
            right: auto;
            bottom: 38px;

            .what-title {
              font-size: 20px;
              color: #FDD333;
            }

            .what-content {
              font-size: 12px;
            }
          }

          .v-img {
            width: 100%;
          }
        }

        .what-right {
          width: 100%;

          .v-img {
            width: 100%;
            height: 500px;
            position: absolute;
            right: auto;
            clip-path: polygon(86% 2%, 88% 0, 100% 0, 100% 100%, 0 100%, 0 0, 63% 0, 65% 2%);
            z-index: 1;
          }

          .aircraft-img {
            width: 261.16px;
            height: 220.22px;
            bottom: auto;
            top: 80px;
            right: -30px;
          }
        }
      }
    }
  }

  // spacePi图片主体
  .spacepi-img-subject {
    height: vw(300, $width);
  }

  // concept容器
  .concept-container {
    grid-gap: vw(50, $width);

    // concept标题主体
    .concept-title-subject {

      // concept标题
      .concept-title {
        font-size: 12px;
        margin-left: 16px;
      }

      // 副标题主体
      .Vice-title-subject {
        .Vice-title {
          display: flex;
          align-items: center;
          width: 350px;
          font-size: 22px;
          grid-gap: 10px;

          .line {
            width: 4px;
            height: 19px;
            margin-top: 0;
          }
        }
      }
    }

    // concept主体
    .concept-subject {
      grid-template-columns: 1fr;
      grid-gap: 20px;
      justify-items: center;

      // concept图片
      .concept-img {
        width: 277px;
      }

      // concept内容
      .concept-content {
        grid-gap: 15px;
        font-size: 16px;
      }
    }

    // concept卡片
    .concept-car {
      grid-template-columns: 1fr;
      grid-gap: vw(20, $width);

      // 卡片
      .car {
        grid-gap: vw(20, $width);
        padding: vw(20, $width);

        // 卡片标题
        .car-title {
          font-size: vw(26, $width);
        }

        // 卡片内容
        .car-content {
          font-size: vw(17, $width);
        }
      }
      // car-s
      .car-s{
        background: none;
        border: 1px solid rgba(253, 211, 51, 0.2);
      }
    }
  }

  // telegraph主体
  .telegraph-subject {
    background-size: 100%;
    margin-top: vw(25, $width);

    // telegraph容器
    .telegraph-container {
      padding-top: 0;
      display: grid;
      grid-gap: vw(25, $width);
    }
  }

  // spacepiwep外部容器
  .spacepiwep-external-container {
    display: none;
    height: auto;

    // spacepiwep容器
    .spacepiwep-container {
      height: vw(400, $width);
      margin-top: vw(100, $width);
      grid-gap: vw(30, $width);
      grid-template-columns: 1fr;
      justify-items: center;

      .spacepiwep-left {
        width: 100%;
        justify-content: center;
        grid-gap: vw(30, $width);

        // spacepiwep图片
        .spacepiwep-img {
          width: vw(506, $width);
          height: vw(250, $width);
          display: flex;
          justify-content: center;

          .spacepiwep-img-subject {
            width: vw(470, $width);
            height: vw(256, $width);
          }

          .spacepiwep-img-s {
            top: vw(5, $width);
            left: vw(4, $width);
            width: vw(490, $width);
            height: vw(200, $width);
          }
        }

        // spacepiwep按钮
        .spacepiwep-bnt {
          width: vw(256, $width);
          height: vw(60, $width);
          font-size: vw(18, $width);
          ;
        }
      }
    }

    .spacepiwep-right {
      position: initial;
      bottom: vw(300, $width);
      right: vw(20, $width);

      // spacepiwep容器主体
      .spacepiwep-container-subject {
        grid-gap: vw(50, $width);

        // spacepiwep标题主体
        .spacepiwep-title-subject {
          grid-gap: vw(20, $width);

          .line {
            height: vw(44, $width);
            background: #FDD333;
          }

          // spacepiwep标题
          .spacepiwep-title {
            font-size: vw(60, $width);
          }
        }

        // audit-report
        .audit-report {
          grid-gap: vw(20, $width);
          width: 100%;
          height: vw(89, $width);

          .audit-report-logo {
            width: vw(120, $width);
          }

          .audit-report-o {
            grid-gap: vw(5, $width);

            // audit-report圆角
            .audit-fillet {
              width: vw(17, $width);
              height: vw(17, $width);
            }

            // audit-report标题
            .audit-fillet-title {
              font-size: vw(18, $width);
            }
          }

          // audit-report按钮
          .audit-report-bnt {
            font-size: vw(20, $width);
            height: vw(52, $width);

            // audit-report标题
            .audit-report-title {
              margin-left: vw(10, $width);
            }
          }
        }

        // spacepiwep内容
        .spacepiwep-content {
          width: auto;
          font-size: vw(20, $width);
        }
      }
    }
  }

  // spacepiwep-external-container移动端
  .spacepiwep-external-container-m {
    display: grid;
    grid-gap: 25px;
    justify-items: center;
    margin-top: 50px;

    // spacepiwep标题主体
    .spacepiwep-title-subject {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
      font-family: Fenton-Black;
      font-weight: 900;
      color: #FFFFFF;
      grid-gap: 10px;

      .line {
        width: 3px;
        height: 19px;
        background: #FDD333;
      }
    }

    // audit-report主体
    .audit-report {
      width: 100%;
      height: auto;
      background: rgba(75, 35, 175, 0.5);
      border: 1px solid #FDD333;
      display: grid;
      grid-gap: 25px;
      justify-items: center;
      padding-top: 25px;
      padding-bottom: 25px;

      .audit-report-logo {
        width: 122px;
        height: 29px;

        .spacepiwep-img-subject {
          width: 122px;
          height: 29px;
        }
      }

      .audit-report-o {
        display: flex;
        align-items: center;
        grid-gap: 10px;

        // audit-report圆角
        .audit-fillet {
          width: 34px;
          height: 34px;
        }

        // audit-report标题
        .audit-fillet-title {
          font-size: 12px;
          font-family: Fenton-Regular, Fenton;
          font-weight: 400;
          color: #FDD333;
        }
      }

      // audit-report按钮
      .audit-report-bnt {
        clip-path: polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 98%, 0% 50%);
        background: rgba(253, 211, 51, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 214px;
        height: 52px;
        font-size: 20px;
        font-family: Fenton-Bold;
        font-weight: bold;
        color: #FFFFFF;
        .audit-report-title{
          margin-left: 5px;
        }
      }
    }

    // spacepiwep内容
    .spacepiwep-content {
      text-align: center;
      font-size: 16px;
      font-family: Fenton-Regular, Fenton;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
    }

    // spacepiwep图片
    .spacepiwep-img {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      align-items: center;

      .spacepiwep-img-subject {
        width: vw(500,600);
        z-index: 1;
      }

      .spacepiwep-img-s {
        width: 335px;
        height: 135px;
        position: absolute;
        top: 5px;
      }
    }

    // spacepiwep按钮
    .spacepiwep-bnt {
      width: 254px;
      height: 60px;
      background: rgba(44, 29, 81, 0.5);
      border: 1px solid #FDD333;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-family: Fenton-Regular, Fenton;
      font-weight: 400;
      color: #FFFFFF;
    }
  }

  // partners容器
  .partners-container {
    margin-top: 50px;
    grid-gap: 20px;
    // 默认高度
    .partners-height{
      min-height: 585px;
      max-height: 585px;
      @media screen and (min-width:280px){
        min-height: 440px;
        max-height: 440px;
      }
      @media screen and (min-width:360px){
        min-height: 555px;
        max-height: 555px;
      }
      @media screen and (min-width:375px){
        min-height: 585px;
        max-height: 585px;
      }
      @media screen and (min-width:390px){
        min-height: 600px;
        max-height: 600px;
      }
      @media screen and (min-width:393px){
        min-height: 610px;
        max-height: 610px;
      }
      @media screen and (min-width:412px){
        min-height: 635px;
        max-height: 635px;
      }
      @media screen and (min-width:414px){
        min-height: 640px;
        max-height: 640px;
      }
      @media screen and (min-width:540px){
        min-height: 825px;
        max-height: 825px;
      }
    }

    // partners内容
    .partners-content {
      width: 100%;
      font-size: 18px;
      text-align: center;
    }

    // partners轮播
    .partners-carousel {
      width: fit-content;
      grid-gap: 20px;

      // 轮播图
      .carousel-chart {
        width: fit-content;
        .carousel-car {
          width: fit-content;
          width: 100%;
          grid-template-columns: 1fr 1fr;
        }
      }

      // 轮播左按钮
      .carousel-left {
        display: none;
        width: vw(40, $width);
        height: vw(90, $width);
      }

      // 轮播右按钮
      .carousel-right {
        display: none;
        width: vw(40, $width);
        height: vw(90, $width);
      }

      // 轮播进度条
      .carousel-progress {
        grid-gap: vw(20, $width);

        .v-progress-linear {
          width: vw(50, $width);
        }
      }
    }

    // partners更多按钮
    .partners-bnt {
      width: vw(300, $width);
      height: vw(56, $width);
      font-size: vw(18, $width);
    }
  }

  // roadmap容器
  .roadmap-container {
    grid-gap: 50px;

    // roadmap主体
    .roadmap-subject {
      display: grid;
      justify-content: left;
    }

    // roadmap标题主体
    .roadmap-title-subject {
      display: flex;
      grid-gap: 10px;

      .line {
        width: 3px;
        height: 19px;
      }

      .roadmap-title {
        font-size: 22px;
      }
    }

    // roadmap内容
    .roadmap-content {
      font-size: 10px;
      margin-left: 16px;
    }

    // one主体
    .one-subject {
      height: 525px;
      .one-img {
        width: vw(560,600);
      }

      .one-content {
        margin-top: vw(-450,600);
        margin-left: 10px;

        .one-title {
          font-size: 20px;
        }

        .one-text {
          width: auto;
          font-size: 14px;
          grid-gap: 10px;
        }
        .one-white{
          width: 281px;
        }
      }
    }

    // two主体
    .two-subject {
      height: 600px;
      margin-top: 0;
      justify-items: left;
      .one-img {
        width: vw(560,600);
        margin-top: -500px;
      }

      .one-content {
        margin-top: vw(200,600);
        margin-left: 10px;

        .one-title {
          font-size: 20px;
        }

        .one-text {
          width: auto;
          font-size: 14px;
          grid-gap: 10px;
        }
        .one-white{
          width: 281px;
        }
      }
    }
  }

  // tokenomics容器
  .tokenomics-container {
    display: none;
  }

  // tokenomics容器移动端
  .tokenomics-container-m {
    margin-top: 25px;
    display: block;

    // tokenomics标题主体
    .tokenomics-title-subject {
      display: flex;
      grid-gap: 10px;
      align-items: center;

      .line {
        width: 3px;
        height: 19px;
        background: #FDD333;
      }

      // tokenomics标题
      .tokenomics-title {
        font-size: 22px;
        font-family: Fenton-Black, Fenton;
        font-weight: 900;
        color: #FFFFFF;
      }
    }

    // tokenomics副标题
    .tokenomics--Vice-title {
      font-size: 12px;
      font-family: Fenton-Black, Fenton;
      font-weight: 900;
      color: #FDD333;
      margin-left: 16px;
    }

    // tokenomics内容
    .tokenomics-left-content {
      font-size: 14px;
      font-family: Fenton-Light, Fenton;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.8);
      margin-top: 20px;
    }

    // tokenomics内容
    .tokenomics-content {
      margin-top: 20px;
      width: 100%;
      height: vw(300,600);
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      align-items: flex-end;
      padding-bottom: 20px;
      background-color: #0059ffab;
      background: url("../../assets/tokenomics-bg.png") no-repeat;
      background-size: cover;

      .tokenomics-grid {
        
        display: grid;
        height: fit-content;
        text-align: center;

        .tokenomics-grid-title {
          font-size: 18px;
          font-family: Fenton-Black, Fenton;
          font-weight: 900;
          color: #FFFFFF;
        }

        .tokenomics-grid-content {
          font-size: 12px;
          font-family: Fenton-Bold, Fenton;
          font-weight: bold;
          color: #FDD333;
        }
      }
    }
  }

  // choice容器主体
  .choice-container-subject {
    background: url("../../assets/choice-bg.png") no-repeat bottom;
    background-size: contain;
    display: flex;
    height: auto;
  }

  // choice容器
  .choice-container {
    margin-top: 25px;
    grid-gap: 25px;

    // choice说明
    .choice-explain {
      font-size: 18px;
      text-align: center;
    }

    // choice区域
    .choice-region {
      grid-gap: vw(25, $width);
      grid-template-columns: 1fr;

      // hoice左主体
      .choice-height {
        width: 587px;
        height: 70px;
      }

      // choice左
      .choice-left {
        grid-gap: vw(25, $width);

        // hoice左主体
        .choice-height {
          width: 100%;
          height: vw(70, $width);
        }

        .choice-subject {
          width: 100%;
          min-height: vw(70, $width);
          padding: 8px;
          padding-top: 14px;
          padding-bottom: 14px;
          grid-gap: vw(20, $width);

          // choice标题主体
          .choice-title-subject {
            grid-gap: vw(20, $width);

            .choice-title {
              font-size: 13px;
            }

            .choice-img {
              width: 20px;
            }
          }

          // choice内容
          .choice-content {
            max-width: vw(498, $width);
            font-size: 14px;
          }
        }
      }
    }
  }

  //nftCarousel外部容器
  .nftCarousel_container{
    padding: 50px 0;
  }


}

// 小型号到中型号的平板
@media screen and (min-width:600px) and (max-width:960px) {
  $width: 960;
  .pc{
    display: none;
  }
  .mo{
    display: block;
  }
  // spacePi图片主体
  .spacepi-img-subject {
    height: vw(500, $width);
  }

  // what主体
  .what-subject {
    background-size: cover;

    // what容器
    .what-container {

      // what标题
      .what-title {
        font-size: vw(60, $width);
        grid-gap: vw(25, $width);

        .what-line {
          height: vw(44, $width);
        }
      }

      // what内容
      .what-content {
        margin-top: vw(50, $width);
        grid-gap: vw(15, $width);
        font-size: vw(20, $width);
      }

      // what主体1
      .what-subject1 {
        display: grid;

        .what-left {
          width: 100%;

          .v-img {
            width: 100%;
            left: auto;
          }
        }

        .what-right {
          width: 100%;

          .right-s {
            left: auto;
            right: 0;
          }
        }
      }

      // what主体2
      .what-subject2 {
        display: grid;

        .what-left {
          width: 100%;
          position: absolute;
          bottom: 360px;

          .left-s {
            left: 20px;
            bottom: auto;
          }

          .v-img {
            width: 100%;
          }
        }

        .what-right {
          width: 100%;

          .v-img {
            width: 100%;
            height: 687px;
            position: absolute;
            right: auto;
            clip-path: polygon(86% 2%, 88% 0, 100% 0, 100% 100%, 0 100%, 0 0, 63% 0, 65% 2%);
            z-index: 1;
          }
        }
      }
    }
  }

  // concept容器
  .concept-container {
    grid-gap: vw(50, $width);

    // concept标题主体
    .concept-title-subject {

      // concept标题
      .concept-title {
        font-size: vw(26, $width);
      }

      // 副标题主体
      .Vice-title-subject {
        .Vice-title {
          font-size: vw(60, $width);

          .line {
            height: vw(44, $width);
            margin-top: vw(16.5, $width);
          }
        }
      }
    }

    // concept主体
    .concept-subject {
      grid-template-columns: 1fr;
      grid-gap: vw(50, $width);
      justify-items: center;

      // concept图片
      .concept-img {
        width: vw(800, $width);
      }

      // concept内容
      .concept-content {
        grid-gap: vw(50, $width);
        font-size: vw(20, $width);

      }
    }

    // concept卡片
    .concept-car {
      grid-template-columns: 1fr;
      grid-gap: vw(20, $width);

      // 卡片
      .car {
        grid-gap: vw(20, $width);
        padding: vw(20, $width);

        // 卡片标题
        .car-title {
          font-size: vw(26, $width);
        }

        // 卡片内容
        .car-content {
          font-size: vw(17, $width);
        }
      }
      .car-s{
        background: none;
        border: 1px solid rgba(253, 211, 51, 0.2);
      }
    }
  }

  // telegraph主体
  .telegraph-subject {
    background-size: 100%;

    // telegraph容器
    .telegraph-container {
      padding-top: 0;
      display: grid;
      grid-gap: vw(50, $width);
    }
  }

  // spacepiwep外部容器
  .spacepiwep-external-container {
    display: none;
    height: auto;

    // spacepiwep容器
    .spacepiwep-container {
      height: vw(611, $width);
      margin-top: vw(100, $width);
      grid-gap: vw(30, $width);
      grid-template-columns: 1fr;

      .spacepiwep-left {
        grid-gap: vw(30, $width);

        // spacepiwep图片
        .spacepiwep-img {
          width: vw(510, $width);
          height: vw(280, $width);

          .spacepiwep-img-subject {
            width: vw(470, $width);
            height: vw(256, $width);
          }

          .spacepiwep-img-s {
            top: vw(17, $width);
            left: vw(-18, $width);
            width: vw(506, $width);
            height: vw(224, $width);
          }
        }

        // spacepiwep按钮
        .spacepiwep-bnt {
          width: vw(256, $width);
          height: vw(60, $width);
          font-size: vw(18, $width);
          ;
        }
      }
    }

    .spacepiwep-right {
      position: initial;
      bottom: vw(300, $width);
      right: vw(20, $width);

      // spacepiwep容器主体
      .spacepiwep-container-subject {
        grid-gap: vw(50, $width);

        // spacepiwep标题主体
        .spacepiwep-title-subject {
          grid-gap: vw(20, $width);

          .line {
            height: vw(44, $width);
            background: #FDD333;
          }

          // spacepiwep标题
          .spacepiwep-title {
            font-size: vw(60, $width);
          }
        }

        // audit-report
        .audit-report {
          grid-gap: vw(20, $width);
          width: vw(551, $width);
          height: vw(89, $width);

          .audit-report-logo {
            width: vw(120, $width);
          }

          .audit-report-o {
            grid-gap: vw(5, $width);

            // audit-report圆角
            .audit-fillet {
              width: vw(17, $width);
              height: vw(17, $width);
            }

            // audit-report标题
            .audit-fillet-title {
              font-size: vw(18, $width);
            }
          }

          // audit-report按钮
          .audit-report-bnt {
            font-size: vw(20, $width);
            height: vw(52, $width);

            // audit-report标题
            .audit-report-title {
              margin-left: vw(10, $width);
            }
          }
        }

        // spacepiwep内容
        .spacepiwep-content {
          width: auto;
          font-size: vw(20, $width);
        }
      }
    }
  }

  // spacepiwep-external-container移动端
  .spacepiwep-external-container-m {
    margin-top: 100px;
    display: grid;
    grid-gap: 25px;
    justify-items: center;

    // spacepiwep标题主体
    .spacepiwep-title-subject {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-family: Fenton-Black;
      font-weight: 900;
      color: #FFFFFF;
      grid-gap: 10px;

      .line {
        width: 3px;
        height: 19px;
        background: #FDD333;
      }
    }

    // audit-report主体
    .audit-report {
      width: 100%;
      height: auto;
      background: rgba(75, 35, 175, 0.5);
      border: 1px solid #FDD333;
      display: grid;
      grid-gap: 35px;
      justify-items: center;
      padding-top: 35px;
      padding-bottom: 35px;

      .audit-report-logo {
        width: 200px;
        height: 60px;

        .spacepiwep-img-subject {
          width: 200px;
          height: 60px;
        }
      }

      .audit-report-o {
        display: flex;
        align-items: center;
        grid-gap: 10px;

        // audit-report圆角
        .audit-fillet {
          width: 34px;
          height: 34px;
        }

        // audit-report标题
        .audit-fillet-title {
          font-size: 16px;
          font-family: Fenton-Regular, Fenton;
          font-weight: 400;
          color: #FDD333;
        }
      }

      // audit-report按钮
      .audit-report-bnt {
        clip-path: polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 98%, 0% 50%);
        background: rgba(253, 211, 51, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 214px;
        height: 52px;
        font-size: 20px;
        font-family: Fenton-Bold;
        font-weight: bold;
        color: #FFFFFF;
        .audit-report-title{
          margin-left: 10px;
        }
      }
    }

    // spacepiwep内容
    .spacepiwep-content {
      text-align: center;
      font-size: 16px;
      font-family: Fenton-Regular, Fenton;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
    }

    // spacepiwep图片
    .spacepiwep-img {
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      position: relative;
      align-items: center;

      .spacepiwep-img-subject {
        width: 520px;
        height: 300px;
        z-index: 1;
      }

      .spacepiwep-img-s {
        width: 545px;
        height: 225px;
        position: absolute;
        top: 5px;
      }
    }

    // spacepiwep按钮
    .spacepiwep-bnt {
      width: 254px;
      height: 60px;
      background: rgba(44, 29, 81, 0.5);
      border: 1px solid #FDD333;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-family: Fenton-Regular, Fenton;
      font-weight: 400;
      color: #FFFFFF;
    }
  }

  // partners容器
  .partners-container {
    // 默认高度
    .partners-height{
      min-height: 960px;
      max-height: 960px;
    }

    // partners内容
    .partners-content {
      width: auto;
    }

    // partners轮播
    .partners-carousel {
      width: -webkit-fill-available;
      // 轮播图
      .carousel-chart {
        width: inherit;
        .carousel-car {
          grid-template-columns: 1fr 1fr;
        }
      }

    // 轮播左按钮
    .carousel-left {
      display: none;
    }
    // 轮播右按钮
    .carousel-right {
      display: none;
    }

      // 轮播进度条
      .carousel-progress {
        grid-gap: vw(30, $width);

        .v-progress-linear {
          width: vw(127, $width);
        }
      }
    }

    // partners更多按钮
    .partners-bnt {
      width: vw(300, $width);
      height: vw(56, $width);
      font-size: vw(18, $width);
    }
  }

  // choice容器主体
  .choice-container-subject {
    background: url("../../assets/choice-bg.png") no-repeat bottom;
    background-size: contain;
    display: grid;
    height: auto;

  }

  // choice容器
  .choice-container {
    grid-gap: vw(50, $width);

    // choice说明
    .choice-explain {
      font-size: vw(26, $width);
    }

    // choice区域
    .choice-region {
      grid-gap: vw(25, $width);
      grid-template-columns: 1fr;

      // choice左
      .choice-left {
        grid-gap: vw(25, $width);

        // hoice左主体
        .choice-height {
          width: 100%;
          height: vw(70, $width);
        }

        .choice-subject {
          width: 100%;
          min-height: vw(70, $width);
          padding: vw(40, $width);
          padding-top: vw(20, $width);
          padding-bottom: vw(20, $width);
          grid-gap: vw(20, $width);

          // choice标题主体
          .choice-title-subject {
            grid-gap: vw(20, $width);

            .choice-title {
              font-size: vw(21, $width);
            }

            .choice-img {
              width: vw(26, $width);
            }
          }

          // choice内容
          .choice-content {
            max-width: vw(498, $width);
            font-size: vw(17, $width);
          }
        }
      }
    }
  }

  // roadmap容器
  .roadmap-container {
    grid-gap: 50px;

    // two主体
    .two-subject {
      z-index: 1;
      height: auto;
      .one-img {
        width: 600px;
        margin-top: -150px;
      }

      //
      .one-content {
        margin-top: 100px;
        .one-title {
          
        }
      }
    }

    // two主体
    .one-subject {
      z-index: 1;
      height: auto;
      .one-img {
        width: 600px;
      }
      .one-content{
        margin-top: -200px;
      }
    }
  }

  // tokenomics容器
  .tokenomics-container {

    // tokenomics主体
    .tokenomics-subject {
      width: auto;
      height: vw(550, $width);

      // tokenomics左
      .tokenomics-left {
        width: vw(500, $width);
        height: vw(550, $width);

        .tokenomics-left-subject {
          float: left;
          margin-top: vw(45, $width);
          margin-left: vw(50, $width);

          // tokenomics左标题主体
          .tokenomics-left-title-subject {
            grid-gap: vw(10, $width);
            margin-left: 10px;

            .line {
              width: vw(4, $width);
              height: vw(26, $width);
            }

            // tokenomics左标题
            .tokenomics-left-title {
              font-size: vw(40, $width);
            }
          }

          // tokenomics左副标题
          .tokenomics-left-Vice-title {
            font-size: vw(26, $width);
          }

          // tokenomics左内容
          .tokenomics-left-content {
            width: vw(450, $width);
            font-size: vw(20, $width);
            line-height: vw(35, $width);
            margin-top: vw(25, $width);
          }
        }
      }

      // tokenomics内容
      .tokenomics-content {
        grid-gap: vw(150, $width);
        bottom: vw(50, $width);

        .tokenomics-grid {
          grid-gap: vw(30, $width);

          .tokenomics-grid-title {
            font-size: vw(35, $width);
          }

          .tokenomics-grid-content {
            font-size: vw(18, $width);
          }
        }
      }
    }
  }

    //nftCarousel外部容器
  .nftCarousel_container{
    padding: 150px 0;
  }

}


// 小型号到中型号的平板
@media screen and (min-width:960px) and (max-width:1264px) {
  $width: 1264;

  // spacePi图片主体
  .spacepi-img-subject {
    height: vw(700, $width);
  }

  // what主体
  .what-subject {
    background-size: cover;

    // what容器
    .what-container {

      // what主体2
      .what-subject2 {
        .what-left {
          .left-s {
            right: 0;
            left: 0;
          }
        }
      }
    }

  }

  // telegraph主体
  .telegraph-subject {
    background-size: 100%;

    // telegraph容器
    .telegraph-container {
      padding-top: 0;
      display: grid;
    }
  }

  // spacepiwep外部容器
  .spacepiwep-external-container {

    // spacepiwep容器
    .spacepiwep-container {
      height: vw(611, $width);
      margin-top: vw(100, $width);
      grid-gap: vw(30, $width);

      .spacepiwep-left {
        grid-gap: vw(30, $width);

        // spacepiwep图片
        .spacepiwep-img {
          //width: vw(510, $width);
          height: vw(280, $width);

          .spacepiwep-img-subject {
            //width: vw(470, $width);
            height: vw(256, $width);
          }

          .spacepiwep-img-s {
            top: vw(6, $width);
            left: vw(-5, $width);
            width: vw(490, $width);
            height: vw(200, $width);
          }
        }

        // spacepiwep按钮
        .spacepiwep-bnt {
          width: vw(256, $width);
          height: vw(60, $width);
          font-size: vw(18, $width);
          ;
        }
      }
    }

    .spacepiwep-right {
      bottom: vw(300, $width);
      right: vw(20, $width);

      // spacepiwep容器主体
      .spacepiwep-container-subject {
        grid-gap: vw(50, $width);

        // spacepiwep标题主体
        .spacepiwep-title-subject {
          grid-gap: vw(20, $width);

          .line {
            height: vw(44, $width);
            background: #FDD333;
          }

          // spacepiwep标题
          .spacepiwep-title {
            font-size: vw(60, $width);
          }
        }

        // audit-report
        .audit-report {
          grid-gap: vw(20, $width);
          width: vw(551, $width);
          height: vw(89, $width);

          .audit-report-logo {
            width: vw(120, $width);
          }

          .audit-report-o {
            grid-gap: vw(5, $width);

            // audit-report圆角
            .audit-fillet {
              width: 34px;
              height: 34px;
            }

            // audit-report标题
            .audit-fillet-title {
              font-size: vw(18, $width);
            }
          }

          // audit-report按钮
          .audit-report-bnt {
            font-size: vw(20, $width);
            height: vw(52, $width);

            // audit-report标题
            .audit-report-title {
              margin-left: vw(10, $width);
            }
          }
        }

        // spacepiwep内容
        .spacepiwep-content {
          width: vw(576, $width);
          font-size: vw(20, $width);
        }
      }
    }
  }

  // partners容器
  .partners-container {
    // 默认高度
    .partners-height{
      min-height: 642px;
      max-height: 642px;
    }
    // partners轮播
    .partners-carousel {
      width: auto;
      .carousel-chart{
        .carousel-car{
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
          // 轮播左按钮
    .carousel-left {
      display: none;
    }
    // 轮播右按钮
    .carousel-right {
      display: none;
    }
    }

  }

  // tokenomics容器
  .tokenomics-container {

    // tokenomics主体
    .tokenomics-subject {
      width: auto;
      height: vw(768, $width);

      // tokenomics左
      .tokenomics-left {
        width: vw(784, $width);
        height: vw(768, $width);

        .tokenomics-left-subject {
          width: vw(600, $width);
          margin-top: vw(50, $width);

          // tokenomics左标题主体
          .tokenomics-left-title-subject {
            grid-gap: vw(20, $width);

            .line {
              width: vw(6, $width);
              height: vw(44, $width);
            }

            // tokenomics左标题
            .tokenomics-left-title {
              font-size: vw(50, $width);
            }
          }

          // tokenomics左副标题
          .tokenomics-left-Vice-title {
            font-size: vw(26, $width);
          }

          // tokenomics左内容
          .tokenomics-left-content {
            width: vw(450, $width);
            font-size: vw(20, $width);
            line-height: vw(35, $width);
            margin-top: vw(25, $width);
          }
        }
      }

      // tokenomics内容
      .tokenomics-content {
        grid-gap: vw(150, $width);
        bottom: vw(50, $width);

        .tokenomics-grid {
          grid-gap: vw(30, $width);

          .tokenomics-grid-title {
            font-size: vw(35, $width);
          }

          .tokenomics-grid-content {
            font-size: vw(18, $width);
          }
        }
      }
    }
  }

  // choice容器
  .choice-container {
    grid-gap: vw(50, $width);

    // choice区域
    .choice-region {
      grid-template-columns: 1fr 1fr;

      // choice左
      .choice-left {
        width: 100%;
        grid-gap: vw(25, $width);

        // hoice左主体
        .choice-height {
          width: vw(587, $width);
          height: vw(70, $width);
        }

        .choice-subject {
          width: vw(587, $width);
          min-height: vw(70, $width);
          padding: vw(40, $width);
          padding-top: vw(20, $width);
          padding-bottom: vw(20, $width);
          grid-gap: vw(20, $width);

          // choice标题主体
          .choice-title-subject {
            grid-gap: vw(20, $width);

            .choice-title {
              font-size: vw(21, $width);
            }

            .choice-img {
              width: vw(26, $width);
            }
          }

          // choice内容
          .choice-content {
            max-width: vw(498, $width);
            font-size: vw(17, $width);
          }
        }
      }
    }
  }
}

// 桌面端
@media screen and (min-width:1264px) and (max-width:1904px) {
  $width: 1904;

  // spacePi图片主体
  .spacepi-img-subject {
    height: vw(1030, $width);
  }

  // what主体
  .what-subject {
    background-size: cover;
  }

  // telegraph主体
  .telegraph-subject {
    background-size: 100%;

    // telegraph容器
    .telegraph-container {
      padding-top: 0;
      display: grid;
    }
  }

  // spacepiwep外部容器
  .spacepiwep-external-container {
    .spacepiwep-right {
      bottom: vw(100, $width);
      right: vw(20, $width);
    }
  }

  // partners容器
  .partners-container {

    // partners轮播
    .partners-carousel {
      //width: vw(1800, $width);
      @media screen and (max-width:1500px){
          // 轮播左按钮
          .carousel-left {
            display: none;
          }
          // 轮播右按钮
          .carousel-right {
            display: none;
          }
      }
    }
  }

  // tokenomics容器
  .tokenomics-container {

    // tokenomics主体
    .tokenomics-subject {
      width: auto;


      // tokenomics左
      .tokenomics-left {
        width: vw(1000, $width);

        .tokenomics-left-subject {
          width: vw(650, $width);
          margin-top: vw(100, $width);

          // tokenomics左标题主体
          .tokenomics-left-title-subject {
            grid-gap: vw(20, $width);

            .line {
              width: vw(6, $width);
              height: vw(44, $width);
            }

            // tokenomics左标题
            .tokenomics-left-title {
              font-size: vw(52, $width);
            }
          }

          // tokenomics左副标题
          .tokenomics-left-Vice-title {
            font-size: vw(30, $width);
          }

          // tokenomics左内容
          .tokenomics-left-content {
            width: vw(500, $width);
            font-size: vw(25, $width);
            line-height: vw(35, $width);
            margin-top: vw(25, $width);
          }
        }
      }

      // tokenomics内容
      .tokenomics-content {
        grid-gap: vw(150, $width);
        bottom: vw(150, $width);

        .tokenomics-grid {
          grid-gap: vw(30, $width);

          .tokenomics-grid-title {
            font-size: vw(35, $width);
          }

          .tokenomics-grid-content {
            font-size: vw(18, $width);
          }
        }
      }
    }
  }
}

// 4K 和超宽屏幕
@media screen and (min-width:1904px) {

  // what主体
  .what-subject {
    background-size: cover;
  }
  // telegraph主体
  .telegraph-subject {
    background-size: 100%;
  }
}
</style>
