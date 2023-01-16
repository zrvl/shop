import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTypesAction } from '../../store/actions/asyncActions/types'

const TypeDel = (props) => {
  const dispatch = useDispatch();

  const deleteType = () => {
    dispatch(removeTypesAction(props.name))
  }


  return (
    <button className="type__item-del" onClick={deleteType}>Delete</button>
  )
}

export default TypeDel