export const ADD_NEW_USER = "ADD_NEW_USER";
export const LOG_IN_USER_OK = "LOG_IN_USER_OK";
export const ELIMINA_ACCOUNT = "ELIMINA_ACCOUNT";

export const addNewUser = (email, password, imgProfilo, userName) => ({
  type: ADD_NEW_USER,
  payload: { email: email, password: password, imgProfilo: imgProfilo, userName: userName },
});

export const logInUserOk = (email, password, imgProfilo, userName) => ({
  type: LOG_IN_USER_OK,
  payload: { email: email, password: password, imgProfilo: imgProfilo, userName: userName },
});

export const deleteAccount = (index) => ({ type: ELIMINA_ACCOUNT, payload: index });

export const checkEmail = (email) => {
  const indexDot = email.lastIndexOf(".");
  const indexAt = email.lastIndexOf("@");
  if (
    email.includes("@") &&
    (email.endsWith(".com") || email.endsWith(".it") || email.endsWith(".org") || email.endsWith(".net")) &&
    indexDot - indexAt > 2
  )
    return true;
  else return false;
};

export const checkPassword = (password) => {
  let app = false;
  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) > 64 && password.charCodeAt(i) < 91) app = true;
  }
  if (password.search(/[$|@|#|!|?|*|+|.|&|%|(|)|_|:|,|;|/|||=|-|']+/i) !== -1 && app && password.length > 5) {
    return true;
  } else return false;
};
