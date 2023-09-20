import { ADD_NEW_USER } from "../actions";

const initialState = {
  users: [],
  currentUser: {
    email: "",
    password: "",
  },
};

const logIn = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER: {
      return {
        ...state,
        users: [...state.users, { email: action.payload.email, password: action.payload.password }],
        currentUser: {
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    }
    default:
      return state;
  }
};

export default logIn;
