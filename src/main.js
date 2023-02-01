import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";

//loading users
store.dispatch("fetchUsers");
createApp(App).use(store).use(router).mount("#app");
