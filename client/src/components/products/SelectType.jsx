import React from 'react'
import { useSelector} from 'react-redux'


const SelectType = (props) => {
  const types = useSelector(state => state.typesReducer.types);
  return (
    <select className="product__type" value={props.type} onChange={(e) => {
      props.setType(e.target.value);
      const id = e.target.options[e.target.selectedIndex].value
      props.setTypeId(id);
    }}>
      <option className="product__type-disabled" value="" disabled hidden>Enter type</option>
      {
        types.map(type => <option value={type.id} key={type.id}>{type.name}</option>)
      }
    </select> 
  )
}

export default SelectType