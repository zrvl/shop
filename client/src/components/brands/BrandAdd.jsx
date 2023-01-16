import React from 'react'
import { useDispatch } from 'react-redux'
import { addingBrand } from '../../store/actions/asyncActions/brands';

const BrandAdd = (props) => {
  const dispatch = useDispatch();

  const addBrand = () => {
    if (props.name === '') {
      props.empty(true);
      setTimeout(() => {
        props.empty(false);
      }, 1000);
    } else {
      dispatch(addingBrand(props.name))
      props.setName('');
    }
  }

  return (
    <button className="brand__menu-btn" onClick={addBrand}>Add brand</button>
  )
}

export default BrandAdd