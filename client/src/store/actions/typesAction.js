export const getTypes = (payload) => {
  return { type: "GET_TYPES", payload:payload}
}

export const addTypes = (payload) => {
  return { type: "ADD_TYPES", payload: payload }
}

export const removeType = (payload) => {
  return { type: "DEL_TYPES", payload: payload}
}

export const editType = (payload) => {
  return {type: "EDIT_TYPE", payload: payload}
}