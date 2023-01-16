import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { regUser } from '../usersAction';
import { checkAuthUser } from '../usersAction';
import { authUser } from '../usersAction';

export const actionRegistration = (user) => {
  return async (dispatch) => {
    const response = await axios.post('http://localhost:5000/api/user/registration', {...user, role:"ADMIN"})
    const userDecode = jwtDecode(response.data.token)
    localStorage.setItem('token', response.data.token)
    dispatch(regUser(userDecode))
  }
}

export const actionRefresh = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:5000/api/user/auth", {
      headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}`}
    })
    localStorage.setItem('token', data.token)
    dispatch(checkAuthUser(data.user))
  }
}

export const actionAuth = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post("http://localhost:5000/api/user/login", {...user});
    const userDecode = jwtDecode(data.token);
    localStorage.setItem('token', data.token);
    return dispatch(authUser(userDecode))
  }
}