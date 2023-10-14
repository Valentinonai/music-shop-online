import { ADD_NEW_USER, ELIMINA_ACCOUNT, LOG_IN_USER_OK } from "../actions";

const initialState = {
  users: [],
  currentUser: {
    email: "",
    password: "",
    imgProfilo: "",
    userName: "",
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
          {
            email: action.payload.email,
            password: action.payload.password,
            imgProfilo: action.payload.imgProfilo,
            userName: action.payload.userName,
          },
        ],
        currentUser: {
          email: action.payload.email,
          password: action.payload.password,
          imgProfilo: action.payload.imgProfilo,
          userName: action.payload.userName,
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
          userName: action.payload.userName,
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
          userName: "",
        },
        logCheck: false,
      };
    }
    case "DELETE_FROM_USER_PAGE":
      return {
        ...state,
        currentUser: {
          email: "",
          password: "",
          imgProfilo: "",
          userName: "",
        },
        users: state.users.filter((elem) => elem.email !== action.payload),
        logCheck: false,
      };
    case "EDIT_NAME": {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          userName: action.payload.editName,
        },
        users: [
          ...state.users.filter((elem) => elem.email !== action.payload.email),
          { ...state.currentUser, userName: action.payload.editName },
        ],
      };
    }
    case "EDIT_EMAIL": {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          email: action.payload.editEmail,
        },
        users: [
          ...state.users.filter((elem) => elem.email !== action.payload.email),
          { ...state.currentUser, email: action.payload.editEmail },
        ],
      };
    }
    case "EDIT_PASSWORD": {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          password: action.payload.editPassword,
        },
        users: [
          ...state.users.filter((elem) => elem.email !== action.payload.email),
          { ...state.currentUser, password: action.payload.editPassword },
        ],
      };
    }
    case "EDIT_IMG": {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          imgProfilo: action.payload.editImg,
        },
        users: [
          ...state.users.filter((elem) => elem.email !== action.payload.email),
          { ...state.currentUser, imgProfilo: action.payload.editImg },
        ],
      };
    }
    case "ESCI": {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          password: "",
          imgProfilo: "",
          userName: "",
        },
      };
    }
    default:
      return state;
  }
};

export default logIn;
