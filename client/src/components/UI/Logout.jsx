import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/actions/usersAction';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <button className="header__content-btn" onClick={logout}>logout</button>
  )
}

export default Logout