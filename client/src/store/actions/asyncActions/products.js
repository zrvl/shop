import axios from "axios"
import { getProducts } from "../productsAction"
import { saveValue } from "../productsAction"

export const fetchProducts = (page, limit) => {
  return async (dispatch) => {
    try {
      const resp = await axios.get(`http://127.0.0.1:5000/api/device?page=${page}&limit=${limit}`)
      const data = await resp.data;
      dispatch(getProducts(data))
    } catch(err) {
      dispatch(getProducts({}));
    }
  }
}

export const saveValueAction = (name, oldName, brand, oldBrand, type, oldType, price, oldPrice) => {
  return async (dispatch) => {
    const resp = await axios.put("http://localhost:5000/api/device/", {
      name: oldName,
      newName: name,
      brand: oldBrand,
      newBrand: +brand,
      type: oldType,
      newType: +type,
      price: oldPrice,
      newPrice: +price,
    });
    dispatch(saveValue(resp.data))
  }
}