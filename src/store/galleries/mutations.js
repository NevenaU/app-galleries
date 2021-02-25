export const mutations = {
    setGalleries(state, payload) {
        state.galleries = payload[0]
        state.numberOfGalleries = payload[1]
    },
}