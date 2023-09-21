import { ADD_NEW_USER, LOG_IN_USER_OK } from "../actions";

const initialState = {
  users: [],
  currentUser: {
    email: "",
    password: "",
    imgProfilo: "",
  },
  logCheck: false,
};

const logIn = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER: {
      return {
        ...state,
        users: [
          ...state.users,
          { email: action.payload.email, password: action.payload.password, imgProfilo: action.payload.imgProfilo },
        ],
        currentUser: {
          email: action.payload.email,
          password: action.payload.password,
          imgProfilo: action.payload.imgProfilo,
        },
        logCheck: true,
      };
    }
    case LOG_IN_USER_OK: {
      return {
        ...state,
        currentUser: {
          email: action.payload.email,
          password: action.payload.password,
          imgProfilo: action.payload.imgProfilo,
        },
        logCheck: true,
      };
    }
    default:
      return state;
  }
};

export default logIn;
