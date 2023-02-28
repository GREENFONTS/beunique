import { dispatch } from "../../store";
import { setToken} from "./authSlice";

const EmailSignIn = (data) => async () => {
  sessionStorage.setItem("token", data.access_token);
  localStorage.setItem("refreshToken", data.refresh_token);
  dispatch(setToken(data.access_token));
};

export { EmailSignIn };
