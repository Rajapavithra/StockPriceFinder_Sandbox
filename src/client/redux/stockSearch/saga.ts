import { StockSearchActionTypes } from "./types";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSuggestionListService } from "../../../services/stockSearch";
import { normalizeResult } from "./utils";
export function* fetchStockSuggestion({ payload }: any) {
  try {
    const response = yield call(fetchSuggestionListService, payload);
    if (response) {
      yield put({
        type: StockSearchActionTypes.GET_SUGGESTION_LIST_FULFILLED,
        payload: normalizeResult(response?.bestMatches)
      });
    }
  } catch (error) {
    yield put({
      type: StockSearchActionTypes.GET_SUGGESTION_LIST_REJECTED,
      payload: error.message
    });
  }
}

export const stockSearchSagas = [
  {
    type: StockSearchActionTypes.GET_SUGGESTION_LIST,
    function: fetchStockSuggestion,
    method: takeLatest
  }
];
