export const ONE_PRODUCT = "ONE_PRODUCT";

const defaultState = {
  product: []
}

export default(state=defaultState, {type, payload}) => {
  switch(type) {
    case ONE_PRODUCT: {
      return {product: payload}
    }
    default: {
      return state
    }
  }
}