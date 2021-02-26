
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
    async getCreateNewGallery(state, payload) {
        try {
            await galleryService.createNewGallery(payload)
        }catch (error) {
            return error.response.data.errors;
        }
    },
    async getEditGallery(state, payload) {
        try {
            await galleryService.editGallery(payload)
        }catch (error) {
            return error.response.data.errors;
        }
    },
    async getCreateComment(state, payload) {
        try {
            await galleryService.createComment(payload)
        }catch (error) {
            return error.response.data.errors;
        }
    },
    async getDeleteComment(state, payload) {
        try {
            await galleryService.deleteComment(payload)
        }catch (error) {
            return error.response.data.errors;
        }
    },
    async getDeleteGallery(state, payload) {
        await galleryService.deleteGallery(payload);
    },
    removeToken() {
        localStorage.removeItem('token')
    }
}