import Vue from "vue";

import App from "./App.vue";

export default {
  mount(el) {
    return new Vue({
      components: {
        App,
      },
      template: "<App />",
    }).$mount(el);
  },
};
