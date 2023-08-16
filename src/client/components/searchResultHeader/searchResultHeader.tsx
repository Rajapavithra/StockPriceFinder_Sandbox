import { Grid, MenuItem, Select } from "@mui/material";
import { SearchBar } from "../searchbar";

export const SearchResultHeader = (props) => {
  const { selectedFirms, currentSelectedFirm, onFirmChange } = props;
  return (
    <Grid>
      <Grid item container>
        <Grid item className="header-lhs">
          <Select value={currentSelectedFirm} onChange={onFirmChange}>
            {selectedFirms.map((firm) => {
              return <MenuItem value={firm?.symbol}>{firm?.name}</MenuItem>;
            })}
          </Select>
        </Grid>
        <Grid item className="header-rhs">
          <SearchBar />
        </Grid>
      </Grid>
    </Grid>
  );
};
