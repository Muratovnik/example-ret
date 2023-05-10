import { createPinia } from "pinia";
import { createApp } from "vue";
import VueTippy from "vue-tippy";

import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

import "@/assets/styles/global/index.scss";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(
  VueTippy,
  // optional
  {
    directive: "tippy", // => v-tippy
    component: "tippy", // => <tippy/>
    componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
    defaultProps: {
      placement: "auto-end",
      allowHTML: true,
    }, // => Global default options * see all props
  },
);

app.mount("#app");
