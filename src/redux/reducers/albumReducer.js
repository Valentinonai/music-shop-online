import { GET_ALBUM } from "../actions";

const initialState = {
  content: null,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
