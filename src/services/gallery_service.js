
import HTTP from "./http_service";

class GalleryService {

    async getAllGalleries(title) {
        const { data } = await HTTP.get('/galleries', { params: { title } });
        return data;
      }
  
      async getGallery(id) {
        const { data } = await HTTP.get(`/galleries/${id}`);
        return data;
      }


    async createGallery(gallery) {
        const { data } = await HTTP.post('galleries', gallery);
        return data;
      }

      async updateGallery(id, gallery) {
        const { data } = await HTTP.put(`/movies/${id}`, gallery);
        return data;
      }

      async deleteGallery(id) {
        const { data } = await HTTP.delete(`/galleries/${id}`);
        return data;
      }
  }


const galleryService = new GalleryService();
export default galleryService;



 

  
  
   
  
  
  
  
