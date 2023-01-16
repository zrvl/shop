import React from 'react'

function ProductSelect(props) {
  return (
    <select {...props}>
      {props.name === 'type' ?
        <option value="" disabled hidden>Enter type</option>
        :
        <option value="" disabled hidden>Enter brand</option>
      }
      {
        props.arr.map(type => 
        <option value={type.id} key={type.id}>{type.name}</option>)
      }
    </select>
  )
}

export default ProductSelect