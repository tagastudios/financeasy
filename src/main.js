import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Creating App
const app = createApp(App);

// Base Components
import Icon from "@/components/utils/Icon.vue";
import BaseCard from "@/components/base/BaseCard.vue";

app.component("Icon", Icon);
app.component("BaseCard", BaseCard);

// Global 3rd Party Libraries

// Mounting
app.use(store).use(router).mount("#app");
