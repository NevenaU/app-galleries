
export const getters = {
    activeUser: (state) => state.activeUser,
    isAuthenticated: (state) => !!state.token,
    numberOfGalleries: (state) => state.numberOfGalleries,
    authUserGalleries: (state) => state.authUserGalleries,
  };