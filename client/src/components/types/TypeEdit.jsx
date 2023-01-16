import React from 'react'
import { useNavigate } from 'react-router-dom'

function TypeEdit(props) {
  const navigate = useNavigate()

  return (
    <button className="type__item-edit" onClick={()=> navigate(`/types/${props.id}`)}>Edit</button>
  )
}

export default TypeEdit