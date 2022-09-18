import DefaultTheme from "vitepress/theme";
import VueClickAway from '../../../components/VueClickAway.vue';
import JsTest from '../../../components/JsTest.vue';
import Css from '../../../components/t-css.vue';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VueClickAway', VueClickAway).component('JsTest', JsTest).component('t-css', Css);
  }
}

