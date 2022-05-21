import Vue from 'vue'
import Vue18n from 'vue-i18n'

Vue.use(Vue18n);

const i18n = new Vue18n({
    locale: sessionStorage.getItem("locale") ||"en_US",
    silentTranslationWarn: true,
    messages: {
        'en_US': require('@/locale/en').default,// 英文 English
        'tr_TR': require('@/locale/tr').default,//土耳其语 Türkçe
        'ko_KR': require('@/locale/ko').default,// 韩语 한국어
        'ja_JP': require('@/locale/ja').default,//日本语 日本語
        'in': require('@/locale/in').default,// 印尼语 Indonesian
        'th': require('@/locale/th').default,//泰语 ไทย
        'ar': require('@/locale/ar').default,//阿拉伯语 اللغة العربية
        'zh_TW': require('@/locale/zhHant').default,// 繁體中文 正體中文
        'zh_CN': require('@/locale/zhHans').default,// 中文简体 中文

        /*'ru_RU': require('@/locale/ru').default,// 俄语 Русский
        'de-DE': require('@/locale/de').default,// 德语 Deutsch
        'fr-FR': require('@/locale/fr').default,// 法语 Français
        'vi-VN': require('@/locale/vi').default,// 越南语 Tiếng Việt*/
    }
})

export default i18n;
