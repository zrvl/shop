export const GET_TYPES = "GET_TYPES"
export const ADD_TYPES = "ADD_TYPES"
export const DEL_TYPES = "DEL_TYPES"
export const EDIT_TYPE = "EDIT_TYPE"

const defaultState = {
  types: [],
  errorTypes: false
}

export default (state=defaultState, {type, payload}) => {
  switch(type) {
    case GET_TYPES: {
      if (Object.entries(payload).length > 0) {
        return { ...state, types: payload };
      } else {
        return { ...state, errorTypes: true };
      }
    }
    case ADD_TYPES: {
      if (Object.entries(payload).length > 0) {
        return { ...state, types: [...state.types,payload] };
      } else {
        return { ...state, errorTypes: true };
      }
    }
    case DEL_TYPES: {
      const arr = state.types.filter(type => type.name !== payload.name)
      return { ...state, types: arr }
    }
    case EDIT_TYPE: {

      const newTypes = [...state.types]
      for (let i = 0; i < newTypes.length; i++) {
        if (newTypes[i].id == payload.id) {
          newTypes[i] = payload
          break
        }
      }
      return {...state, types: newTypes}
    }
    default: {
      return state;
    }
  }
}