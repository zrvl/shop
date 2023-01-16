import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { editTypeAction } from '../../store/actions/asyncActions/types';

const SaveEditType = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveEdit = () => {
    if (props.newName === '' || props.oldName === '') {
      props.empty(true);
      setTimeout(() => {
        props.empty(false);
      }, 1000);
    } else {
      dispatch(editTypeAction(props.newName, props.oldName))
      navigate('/types');
    }
  } 

  return (
    <button onClick={saveEdit}>Save</button>
  )
}

export default SaveEditType