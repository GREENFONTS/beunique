import api from "../axios";

const SignInApi = (data) => {
  return api.post("/users/login", data);
};

const SignUpApi = (data) => {
  return api.post("/users/create_users", data);
};

export { SignInApi, SignUpApi };
