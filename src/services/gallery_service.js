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
}

const galleryService = new GalleryService();
export default galleryService;
