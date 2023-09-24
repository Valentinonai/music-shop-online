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
