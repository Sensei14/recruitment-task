const initialState = { compositions: [] };

const compositionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COMPOSITIONS": {
            return {
                ...state,
                compositions: action.payload,
            };
        }
        case "ADD_COMPOSITION": {
            const newComposition = action.payload;
            newComposition.plays = 0;
            newComposition.likes = 0;
            newComposition.shares = 0;
            newComposition.comments = 0;
            newComposition.id = state.compositions.length + 1;
            return {
                ...state,
                compositions: [...state.compositions, newComposition],
            };
        }

        default:
            return state;
    }
};

export default compositionsReducer;
