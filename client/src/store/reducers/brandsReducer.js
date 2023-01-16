export const GET_BRANDS = "GET_BRANDS"
export const ADD_BRAND = "ADD_BRAND"
export const DEL_BRAND = "DEL_BRAND"
export const EDIT_BRAND = "EDIT_BRAND"

const defaultState = {
  brands: [],
  errorBrands: false,
}

export default(state = defaultState, {type, payload}) => {
  switch(type) {
    case GET_BRANDS: {
      if (Object.entries(payload).length > 0) {
        return {...state, brands: payload}
      } else {
        return { ...state, errorBrands: true };
      }
    }
    case ADD_BRAND: {
      if (Object.entries(payload).length > 0) {
        return {...state, brands: [...state.brands, payload]}
      } else {
        return { ...state, errorBrands: true };
      }
    }
    case DEL_BRAND: {
      const arr = state.brands.filter(brand => brand.name !== payload.name)
      return { ...state, brands: arr }
    }
    case EDIT_BRAND: {
      const newBrands = [...state.brands]
      for (let i=0; i<newBrands.length; i++) {
        if (newBrands[i].id == payload.id) {
          newBrands[i] = payload
          break;
        }
      }
      return {...state, brands: newBrands}
    }
    default: {
      return state;
    }
  }
}