import Vue from 'vue'
import Vue18n from 'vue-i18n'

Vue.use(Vue18n);

const i18n = new Vue18n({
    locale: sessionStorage.getItem("locale") ||"en_US",
    silentTranslationWarn: true,
    messages: {
        'en_US': require('@/locale/en').default,// 英文
        'zh_CN': require('@/locale/zhHans').default,//中文简体
    }
})

export default i18n;
