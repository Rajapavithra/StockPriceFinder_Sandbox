import axios from "axios";
import { rootURL, apiKey } from "../constants";

export const fetchSuggestionListService = async (searchkey: string) => {
  console.log(">searchKey in service", searchkey);
  const url = `${rootURL}function=SYMBOL_SEARCH&keywords=${searchkey}&apikey=${apiKey}`;
  const response = await axios.get(url).then((res) => res.data);
  return response;
};
