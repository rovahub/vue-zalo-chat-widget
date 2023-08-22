<p align="left">
  <img src="./images/zalo.svg" alt="@nuxtjs/i18n logo">
</p>

[![](https://img.shields.io/npm/v/%40rovahub%2Fvue-zalo-chat-widget/latest.svg?style=flat-square)](https://npmjs.com/package/%40rovahub%2Fvue-zalo-chat-widget)
[![](https://img.shields.io/npm/dt/%40rovahub%2Fvue-zalo-chat-widget.svg?style=flat-square)](https://npmjs.com/package/%40rovahub%2Fvue-zalo-chat-widget)


# @rovahub/vue-zalo-chat-widget

This Vue2 plugin injects a Zalo OA chat widget chat instance into all of your vue instances

## Install
``` bash
# Npm
npm install @rovahub/vue-zalo-chat-widget --save

# Yarn
yarn add @rovahub/vue-zalo-chat-widget
```

## Quickstart

### Vue 2

Import the @rovahub/vue-zalo-chat-widget in your main JavaScript file in src/ folder. The Zalo OA ID will be found on your Zalo Dashboard.

```bash
# src/main.js

// main.js

import Vue from "vue";
import App from "./App.vue";
import ZaloChatWidgetPlugin from "@rovahub/vue-zalo-chat-widget";

Vue.config.productionTip = false;

Vue.use(ZaloChatWidgetPlugin, {
  oaid: "zalo_oa_id"
});

new Vue({
  render: h => h(App)
}).$mount("#app");

```

### Nuxt JS

Create JS file in /plugins/ folder and add content to the plugin file.
```bash
# plugins/zalo-widget.js

import Vue from 'vue';
import ZaloChatWidgetPlugin from "@rovahub/vue-zalo-chat-widget";

Vue.use(ZaloChatWidgetPlugin, {
  oaid: "zalo_oa_id"
});
```

In your nuxt.config.js file, add the plugin to the plugins array:
```bash
# nuxt.config.js

module.exports = {
  // ...
  plugins: [
    { src: "~/plugins/zalo-chat-plugin.js", mode: "client" }
  ],
  // ...
}
```

## Options
You can provide additional options to customize the Zalo Chat Widget:
```bash
Vue.use(ZaloChatWidgetPlugin, {
  oaid: "zalo_oa_id",
  welcomeMessage: "Rất vui khi được hỗ trợ bạn!",
  autopopup: "0",
  width: "300",
  height: "300"
});
```