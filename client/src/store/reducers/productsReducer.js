export const GET_PRODUCTS = "GET_PRODUCTS"
export const SAVE_VALUE = "SAVE_VALUE"

const defaultState ={
  products: [],
  count: 0,
  errorProducts: false,
}

export default (state=defaultState, {type, payload}) => {
  switch (type) {
    case GET_PRODUCTS: {
      if (Object.entries(payload).length > 0) {
        return { count: payload.count, products: payload.rows }
      } else {
        return { ...state, errorProducts: true }; 
      }
    }
    case SAVE_VALUE: {
      const newProducts = [...state.products]
      for (let i = 0; i < newProducts.length; i++) {
        if (newProducts[i].id === payload.id) {
          newProducts[i] = payload
          break;
        }
      }
      return {...state, products: newProducts}
    }
    default: {
      return state;
    }  
  }
}