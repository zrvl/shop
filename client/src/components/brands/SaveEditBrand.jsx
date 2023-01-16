import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { editBrandAction } from '../../store/actions/asyncActions/brands';

const SaveEditBrand = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(props);
  const saveEdit = () => {
    if (props.newName === '' || props.oldName === '') {
      props.empty(true);
      setTimeout(() => {
        props.empty(false);
      }, 1000);
    } else {
      dispatch(editBrandAction(props.newName, props.oldName))
      navigate('/brands')
    }
  } 

  return (
    <button onClick={saveEdit}>Save</button>
  )
}

export default SaveEditBrand