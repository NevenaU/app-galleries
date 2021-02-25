export const mutations = {
    setGalleries(state, payload) {
        state.galleries = payload[0]
        state.numberOfGalleries = payload[1]
    },
    setSingleGallery(state, payload) {
        state.singleGallery = payload
    },
    setAuthorGalleries(state, payload) {
        state.author = payload[0]
        state.authorGalleries = payload[1]
        state.numberOfGalleries = payload[2]
    },
}