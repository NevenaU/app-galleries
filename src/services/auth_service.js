import HTTP from "./http_service";

class AuthService {
  async login(credentials) {
    const { data } = await HTTP.post("/login", credentials);
    return data;
  }

  async register(user) {
    const { data } = await HTTP.post("/register", user);
    return data;
  }

  logout() {
    return HTTP.post("/logout");
  }
  async getMyProfile() {
    const { data } = await HTTP.get("/auth-user");
    return data;
  }

  authUserGalleries(payload) {
    return HTTP.get("/auth-user-gallery", {
      headers: {
        pagination: payload.pagination,
        searchText: payload.searchText,
      },
    });
  }
}

const authService = new AuthService();
export default authService;
