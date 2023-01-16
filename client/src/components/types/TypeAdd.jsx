import React from 'react'
import { addTypesAction } from '../../store/actions/asyncActions/types'
import { useDispatch } from 'react-redux'

const TypeAdd = (props) => {
  const dispatch = useDispatch();

  const addingType = () => {
    if (props.name === '') {
      props.empty(true);
      setTimeout(() => {
        props.empty(false);
      }, 1000);
    } else {
      dispatch(addTypesAction(props.name))
      props.setName('');
    }
  }

  return (
    <button className="type__menu-btn" onClick={addingType}>Add type</button>
  )
}

export default TypeAdd