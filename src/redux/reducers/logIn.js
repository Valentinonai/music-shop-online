import { ADD_NEW_USER } from "../actions";

const initialState = {
  users: [],
  currentUser: {
    email: "",
    password: "",
    imgProfilo: "",
  },
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
      };
    }
    default:
      return state;
  }
};

export default logIn;
