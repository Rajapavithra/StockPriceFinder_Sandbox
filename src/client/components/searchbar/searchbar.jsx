import React, { useState, useEffect } from "react";
import { Grid, Autocomplete, Button } from "@mui/material";
import { renderOptionListHandler, renderInputHandler } from "./utils";
import { debounce } from "lodash";
import { SUGGESTION_FETCH_DELAY } from "../constants";
import { fetchSuggestionList, setSelectedFirms } from "../../redux/stockSearch";
import { useDispatch, useSelector } from "react-redux";

export const SearchBar = (props) => {
  const { onSearch } = props;
  const { suggestionList } = useSelector((state) => state.stockSearch);
  const dispatch = useDispatch();
  const [selectedFirm, _setSelectedFirms] = useState([]);
  // const [searchKey, setSearchKey] = useState("");
  // const [options,setOptions] = useState([]);

  const searchHandler = () => {
    dispatch(setSelectedFirms(selectedFirm));
    onSearch && onSearch();
  };

  const debounceDispatch = debounce((key) => {
    dispatch(fetchSuggestionList(key));
  }, SUGGESTION_FETCH_DELAY);

  const onSearchKeyChange = (event) => {
    const value = event.target.value;
    // setSearchKey(value);
    if (value.length >= 2) {
      debounceDispatch(value);
    }
  };
  const onSuggestionSelect = (event, value) => {
    console.log(">selected", value);
    _setSelectedFirms(value);
  };
  return (
    <Grid container>
      <Grid item container>
        <Autocomplete
          multiple
          onChange={onSuggestionSelect}
          id="stock-symbol-auto-complete"
          options={suggestionList}
          disableCloseOnSelect
          getOptionLabel={(option) => option.symbol}
          renderOption={renderOptionListHandler}
          style={{ width: 500 }}
          renderInput={(params) =>
            renderInputHandler({ ...params, onChange: onSearchKeyChange })
          }
        />
        <Button variant="contained" onClick={searchHandler}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};
