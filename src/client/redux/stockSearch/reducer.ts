import { StockSearchActionTypes } from "./types";

const searchInitiState = {
  suggestionList: [],
  error: "",
  selectedFirms: []
};
export const stockSearchReducers = (state = searchInitiState, action: any) => {
  switch (action.type) {
    case StockSearchActionTypes.GET_SUGGESTION_LIST_FULFILLED: {
      console.log("in reducer", action.payload);
      return { ...state, suggestionList: action.payload };
    }
    case StockSearchActionTypes.SET_SELECTED_FIRMS: {
      return { ...state, selectedFirms: action.payload };
    }
    case StockSearchActionTypes.GET_SUGGESTION_LIST_REJECTED: {
      return { ...state, error: action.payload };
    }
    default:
      return { ...state };
  }
};
