export const ADD_NEW_USER = "ADD_NEW_USER";
export const LOG_IN_USER_OK = "LOG_IN_USER_OK";

export const addNewUser = (email, password, imgProfilo) => ({
  type: ADD_NEW_USER,
  payload: { email: email, password: password, imgProfilo: imgProfilo },
});

export const logInUserOk = (email, password, imgProfilo) => ({
  type: LOG_IN_USER_OK,
  payload: { email: email, password: password, imgProfilo: imgProfilo },
});
