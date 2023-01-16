import React from 'react'

function FilterInput(props) {
  return (
    <input className="filter__input" type="text" value={props.filterName} placeholder="name" onChange={(e) => props.setName(e.  target.value)} />
  )
}

export default FilterInput