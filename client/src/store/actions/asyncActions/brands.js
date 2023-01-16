import axios from "axios";
import { getBrands } from "../brandsAction";
import { addBrands } from "../brandsAction";
import { removeBrandAction } from "../brandsAction";
import { editBrand } from "../brandsAction";

export const fetchBrands = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get("http://127.0.0.1:5000/api/brand");
      const data = await resp.data
      dispatch(getBrands(data));
    } catch (error) {
      dispatch(getBrands({}));
    }
  }
}

export const addingBrand = (brandName) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/brand', {
        name: brandName,
      })
      const data = await response.data;
      dispatch(addBrands(data));
    } catch (error) {
      dispatch(addBrands({}));
    }
  }
}

export const removeBrand = (brandName) => {
  return async (dispatch) => {
    const response = await axios.delete('http://127.0.0.1:5000/api/brand', {
      data: {name: brandName}
    })
    dispatch(removeBrandAction(response.data))
  }
}

export const editBrandAction = (newName, oldName) => {
  return async (dispatch) => {
    const resp = await axios.put("http://localhost:5000/api/brand/", {
      name: oldName,
      newName: newName,
    });
    dispatch(editBrand(resp.data))
  }
}