import { action } from "typesafe-actions";
import { StockSearchActionTypes } from "./types";

export const fetchSuggestionList = (searchKey: string) =>
  action(StockSearchActionTypes.GET_SUGGESTION_LIST, searchKey);

export const setSelectedFirms = (selectedList) =>
  action(StockSearchActionTypes.SET_SELECTED_FIRMS, selectedList);
