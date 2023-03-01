import api from "../axios";

const SignInApi = (data) => {
  return api.post("/users/login", data);
};

const SignUpApi = (data) => {
  return api.post("/users/create_users", data);
};

const GetUserDetailsApi = () => {
  return api.get("/users/user_detail");
};

export { SignInApi, SignUpApi, GetUserDetailsApi };
