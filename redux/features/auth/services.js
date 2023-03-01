import { GetUserDetailsApi } from "@/redux/axios/apis/auth";
import { dispatch } from "../../store";
import { setToken, setUser } from "./authSlice";

const EmailSignIn = (data) => async () => {
  sessionStorage.setItem("token", data.access_token);
  localStorage.setItem("refreshToken", data.refresh_token);
  dispatch(setToken(data.access_token));
  dispatch(GetUser());
};

const GetUser = () => async () => {
  const res = await GetUserDetailsApi();
  sessionStorage.setItem("user", res.data.detail);
  dispatch(setUser(res.data.detail));
};

export { EmailSignIn, GetUser };
