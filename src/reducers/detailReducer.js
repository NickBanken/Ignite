const initialState = {
  game: null,
  screen: {},
  isLoading: true,
  showing: false,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
        showing: true,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    case "NOT_DISPLAYING":
      return {
        ...state,
        showing: false,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
