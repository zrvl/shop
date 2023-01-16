export const getProducts = (payload) => {
  return {type: 'GET_PRODUCTS', payload: payload}
}

export const oneProduct = (payload) => {
  return {type: 'ONE_PRODUCT', payload: payload}
}

export const saveValue = (payload) => {
  return {type: 'SAVE_VALUE', payload: payload}
}