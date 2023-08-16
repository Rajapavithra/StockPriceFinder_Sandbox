import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { SearchResultHeader } from "../../components/searchResultHeader";
// import { FrequencySelector } from "../../components/frequencySelector";
// import { SearchDetails } from "../../components/searchDetails";

export const SearchResult = (props) => {
  const { selectedFirms, searchDetails } = useSelector(
    (state) => state.stockSearch
  );
  const [currentSelectedFirm, setCurrentSelectedFirm] = useState(
    selectedFirms[0]
  );
  const [frequency, setFrequency] = useState();

  const onFirmChange = (event) => {
    setCurrentSelectedFirm(event.target.value);
  };
  const onFrequencyChange = (value) => {
    setFrequency(value);
  };

  return (
    <Grid container>
      <Grid item container className="content-wrapper">
        <SearchResultHeader
          currentSelectedFirm={currentSelectedFirm}
          selectedFirmsList={selectedFirms}
          onFirmChange={onFirmChange}
        />
      </Grid>
      <Grid item container className="action-bar">
        {/* <FrequencySelector
          frequency={frequency}
          onFrequencyChange={onFrequencyChange}
        /> */}
      </Grid>
      <Grid item container className="result-content">
        {/* <StockDetails details={searchDetails} /> */}
      </Grid>
      <Grid item container className="no-records"></Grid>
    </Grid>
  );
};
