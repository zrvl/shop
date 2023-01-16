import { oneProduct } from "../productsAction";
import axios from 'axios'

export const fetchOneProduct = (id) => {
  return (dispatch) => {
    axios.get(`http://127.0.0.1:5000/api/device/${id}`)
    .then(response => response.data)
    .then(json => dispatch(oneProduct(json)))
  }
}