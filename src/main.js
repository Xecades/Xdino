import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "animate.css";
import App from "./App.vue";
import router from "./router";

import LinkTo from "./components/LinkTo";
import MDlink from "./markdown/MDlink";
import MDcheckbox from "./markdown/MDcheckbox";
import MDimage from "./markdown/MDimage";
import MDsnippet from "./markdown/MDsnippet";

import "./registerServiceWorker";
import "./assets/styles/base16/tomorrow.min.css";
import "./assets/cursor.css";
import "./assets/tailwind.css";
import "./assets/font.css";
import "./assets/entry.styl";

library.add(fas);
let app = createApp(App);

app.use(router);

app.component("fas", FontAwesomeIcon);
app.component("LinkTo", LinkTo);
app.component("MDlink", MDlink);
app.component("MDcheckbox", MDcheckbox);
app.component("MDimage", MDimage);
app.component("MDsnippet", MDsnippet);

for (let i = 0; i < $.length; i++) {
    let meta = $[i];
    let data = require(`@/posts/${meta.url}.md`);

    app.component(`excerpt-${i}`, { template: data.excerpt });
    app.component(`content-${i}`, { template: data.content });
}

app.mount("#app");