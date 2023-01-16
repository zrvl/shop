import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveValueAction } from '../store/actions/asyncActions/products';

function SaveValue(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveSettings = () => {
    dispatch(saveValueAction(props.name, props.oldName, props.brand, props.oldBrand, props.type, props.oldType, props.price, props.oldPrice))
    navigate('/products');
  }

  return (
    <button className="product__save-btn" onClick={saveSettings}>Save</button>
  )
}

export default SaveValue
