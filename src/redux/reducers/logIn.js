import { ADD_NEW_USER, ELIMINA_ACCOUNT, LOG_IN_USER_OK } from "../actions";

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
    case ELIMINA_ACCOUNT: {
      return {
        ...state,
        users: state.users.filter((_, i) => i !== action.payload),
        currentUser: {
          email: "",
          password: "",
          imgProfilo: "",
        },
        logCheck: false,
      };
    }
    default:
      return state;
  }
};

export default logIn;
