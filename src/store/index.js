import { createStore } from "vuex";
import users from "./users/users";

export default createStore({
  modules: {
    users,
  },
});
