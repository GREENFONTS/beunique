import api from "../axios";

const AddProductApi = (data) => {
  return api.post("/admin/add_product", data);
};

export { AddProductApi };
