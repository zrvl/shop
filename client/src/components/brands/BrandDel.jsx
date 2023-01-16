import React from 'react'
import { useDispatch } from 'react-redux'
import { removeBrand } from '../../store/actions/asyncActions/brands';

const BrandDel = (props) => {
  const dispatch = useDispatch();

  const brandDel = () => {
    dispatch(removeBrand(props.name))
  }

  return (
    <button className="brand__item-del" onClick={brandDel}>Delete</button>
  )
}

export default BrandDel