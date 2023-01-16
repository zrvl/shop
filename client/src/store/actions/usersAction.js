export const regUser = (payload) => {
  return {type: "REG", payload: payload}
}

export const logoutUser = () => {
  return {type: "LOGOUT", payload: null}
}

export const checkAuthUser = (user) => {
  return {type: "AUTH", payload: user}
}

export const authUser = (user) => {
  return {type: "AUTH", payload: user}
}