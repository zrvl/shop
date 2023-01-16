import { getTypes } from "../typesAction";
import { addTypes } from "../typesAction";
import { removeType } from "../typesAction";
import { editType } from "../typesAction";
import axios from 'axios'

export const fetchTypes = () => {
  return async (dispatch) => {
    try{
      const resp = await axios.get("http://127.0.0.1:5000/api/type")
      const data = await resp.data;
      dispatch(getTypes(data))
    } catch (e) {
      dispatch(getTypes({}));
    }
  }
}

export const addTypesAction = (typeName) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post("http://127.0.0.1:5000/api/type", {
        name: typeName,
      })
      const data = await resp.data
      dispatch(addTypes(data))
    } catch (e) {
      dispatch(addTypes({}));
    }
  }
}

export const removeTypesAction = (typeName) => {
  return async (dispatch) => {
    const resp = await axios.delete("http://127.0.0.1:5000/api/type", {data: {name: typeName}})
    dispatch(removeType(resp.data));
  }
}

export const editTypeAction = (newName, oldName) => {
  return async (dispatch) => {
    const resp = await axios.put('http://localhost:5000/api/type/', {
      name: oldName,
      newName: newName,
    })
    dispatch(editType(resp.data))
  }
}

