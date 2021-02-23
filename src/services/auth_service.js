
import HTTP from "./http_service";

class AuthService {
  async login(email, password) {
    const { data } = await HTTP.post("/login", {email, password});
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
    const { data } = await HTTP.get("/me");
    return data;
  }
}

const authService = new AuthService();
export default authService;