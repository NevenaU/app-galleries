import HTTP from "./http_service";

class GalleryService {
  getAllGalleries(payload) {
    return HTTP.get("/galleries", {
      headers: {
        pagination: payload.pagination,
        searchText: payload.searchText,
      },
    });
  }
  getGallery(id) {
    return HTTP.get(`/galleries/${id}`);
  }
  getAuthorGalleries(payload) {
    return HTTP.get(`/author/${payload.id}`, {
      headers: {
        pagination: payload.pagination,
        searchText: payload.searchText,
      },
    });
  }
  createNewGallery(gallery) {
    return HTTP.post("/galleries", gallery);
  }

  editGallery(payload) {
    return HTTP.put(`/edit-gallery/${payload.id}`, payload.gallery);
  }
  deleteGallery(id) {
    return HTTP.delete(`/galleries/${id}`);
  }
  createComment(comment) {
    const content = comment.content;
    return HTTP.post(`/galleries/${comment.post_id}/comments`, { content });
  }
  deleteComment(id) {
    return HTTP.delete(`/delete-comment/${id}`);
  }
}

const galleryService = new GalleryService();
export default galleryService;
