import React from 'react'
import { useSelector} from 'react-redux'


const SelectBrand = (props) => {
  const brands = useSelector(state => state.brandsReducer.brands);

  return (
    <select className="product__brand" value={props.brand} onChange={(e) => {
      props.setBrand(e.target.value);
      const id = e.target.options[e.target.selectedIndex].value
      props.setBrandId(id);
    }}>
      <option value="" disabled hidden>Enter brand</option>
      {
        brands.map(brand => <option value={brand.id} key={brand.id}>{brand.name}</option>)
      }
    </select>
  )
}

export default SelectBrand