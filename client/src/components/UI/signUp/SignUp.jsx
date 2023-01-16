import React from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import ProductInput from '../../../components/UI/productInput/ProductInput'
import styleInput from '../../../components/UI/productInput/ProductInput.module.css'
import { actionRegistration } from '../../../store/actions/asyncActions/users';


const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  }) 

  const authorization = () => {
    dispatch(actionRegistration(user));
    navigate('/')
  }

  return (
    <>
      <div className="users">
        <ProductInput className={styleInput.product__input} type="text" placeholder="Email" value={user.email} onChange={(e) => setUser({
          ...user, email: e.target.value
        })} />
        <ProductInput className={styleInput.product__input} type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({
          ...user, password: e.target.value
        })} />
        <button className="users__btn" onClick={authorization}>Sign Up</button>
        <div className="users__change"> 
          <p className="users__change-text">Already register?</p>
          <NavLink className="users__change-link" to={'/autorization'}>Sign in</NavLink>
        </div>
      </div>  
    </>
  )
}

export default SignUp