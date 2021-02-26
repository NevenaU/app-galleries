export const mutations = {
  setActiveUser(state, activeUser) {
    state.activeUser = activeUser;
  },

  setToken(state, token) {
    state.token = token;
  },

  setAuthUserGalleries(state, payload) {
    state.activeUser = payload[0];
    state.authUserGalleries = payload[1];
    state.numberOfGalleries = payload[2];
  },
};
