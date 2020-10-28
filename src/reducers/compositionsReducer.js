const initialState = { compositions: [] };

const compositionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMPOSITIONS": {
      return {
        ...state,
        compositions: action.payload,
      };
    }

    default:
      return state;
  }
};

export default compositionsReducer;
