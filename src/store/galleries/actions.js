
import galleryService from "../../services/gallery_service";

export const actions = {
    async getAllGalleries(state, payload) {
        const response = await galleryService.getAllGalleries(payload);
        state.commit('setGalleries', response.data)
    },
    async getSingleGallery(state, payload) {
        const response = await galleryService.getGallery(payload);
        state.commit('setSingleGallery', response.data)
    },
    async getAuthorGalleries(state, payload) {
        const response = await galleryService.getAuthorGalleries(payload);
        state.commit('setAuthorGalleries', response.data)
    },
}