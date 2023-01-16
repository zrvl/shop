export const REG = "REG";
export const AUTH = "AUTH";
export const CHECK = "CHECK"
export const LOGOUT = "LOGOUT"

const defaultState = {
  isAuth: false,
  user: {
  }
}

export default (state=defaultState, {type, payload}) => {
  switch(type) {
     case "REG":
      case "AUTH": {
        return {isAuth: true, user: payload}
      }
     case "LOGOUT": {
      return defaultState
     }
    default: {
      return state
    }
  }
}