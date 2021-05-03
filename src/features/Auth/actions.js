// (1) import constant
import { USER_LOGIN, USER_LOGOUT } from "./constant";

export function userLogin(token) {
  return {
    type: USER_LOGIN,
    token,
  }
}

export function userLogout() {
  localStorage.removeItem('auth');
  return {
    type: USER_LOGOUT
  }
}
