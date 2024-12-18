import DefaultTheme from "vitepress/theme";
import VueClickAway from "../../../components/VueClickAway.vue";
import JsTest from "../../../components/JsTest.vue";
import Css from "../../../components/t-css.vue";
import GlobalComponent from "../../../components/GlobalComponent.vue";
import EndTime from '../../../components/EndTime.vue'
import SlotContent from '../../../components/CssDemo/SlotContent.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app
      .component("VueClickAway", VueClickAway)
      .component("JsTest", JsTest)
      .component("t-css", Css)
      .component("GlobalComponent", GlobalComponent)
      .component('EndTime', EndTime)
      .component('SlotContent', SlotContent)
  },
};

