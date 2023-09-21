export const ADD_NEW_USER = "ADD_NEW_USER";

export const addNewUser = (email, password, imgProfilo) => ({
  type: ADD_NEW_USER,
  payload: { email: email, password: password, imgProfilo: imgProfilo },
});
