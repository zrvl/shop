import React from 'react'

const TypeName = (props) => {
  return (
    <input className="type__menu-input" onChange={(e) => props.setName(e.target.value)} value={props.name} placeholder="Enter type" />
  )
}

export default TypeName