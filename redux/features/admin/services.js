import { AddProductApi } from "@/redux/axios/apis/admin";
import { GetUserDetailsApi } from "@/redux/axios/apis/auth";
import { dispatch } from "../../store";
import { setToken, setUser } from "./adminSlice";

const AddProduct = (data) => async () => {
  try {
    const res = AddProductApi(data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};


export { AddProduct };
