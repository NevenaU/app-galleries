
import galleryService from "../../services/gallery_service";

export const actions = {
    async getAllGalleries(state, payload) {
        const response = await galleryService.getAllGalleries(payload);
        state.commit('setGalleries', response.data)
    },
}