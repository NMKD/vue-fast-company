import api from "@/api";

export default {
  state() {
    return {
      users: null,
    };
  },
  mutations: {
    fetchUsers(state, payload) {
      state.users = payload;
    },
    deleteUser(state, payload) {
      state.users = state.users.filter((d) => d._id !== payload);
    },
  },
  actions: {
    fetchUsers({ commit }) {
      const users = api.users.fetchAll();
      commit("fetchUsers", users);
    },
    deleteUser({ commit }, payload) {
      commit("deleteUser", payload);
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
};
