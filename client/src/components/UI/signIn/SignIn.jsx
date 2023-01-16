import React from 'react'
import { NavLink } from 'react-router-dom';
import ProductInput from '../../../components/UI/productInput/ProductInput'
import styleInput from '../../../components/UI/productInput/ProductInput.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionAuth } from '../../../store/actions/asyncActions/users'


const SignIn = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  }) 

  const authorization = () => {
    dispatch(actionAuth(user))
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
      <button className="users__btn" onClick={authorization}>Sign In</button>
      <div className="users__change"> 
        <p className="users__change-text">Not register?</p>
        <NavLink className="users__change-link" to={'/registration'}>Sign up</NavLink>
      </div>
    </div>  
    </>
  )
}

export default SignIn