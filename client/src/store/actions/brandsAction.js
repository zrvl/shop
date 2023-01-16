export const getBrands = (payload) => {
  return {type: "GET_BRANDS", payload: payload}
}

export const addBrands = (payload) => {
  return { type: "ADD_BRAND", payload: payload }
}

export const removeBrandAction = (payload) => {
  return { type: "DEL_BRAND", payload: payload }
}

export const editBrand = (payload) => {
  return { type: "EDIT_BRAND", payload: payload }
}


