import { Grid, Typography } from "@mui/material";
import { SearchBar } from "../../components/searchbar";
import { useNavigate } from "react-router-dom";

export const LandingPage = (props) => {
  console.log(">landing loaded");
  const navigate = useNavigate();
  const onSearchHandler = () => {
    navigate("/details", { replace: false });
  };
  return (
    <Grid container>
      <Grid item container className="page-content">
        <Grid item container>
          <Typography variant="h5" className="page-title">
            STOCK FINDER
          </Typography>
        </Grid>
        <Grid item container>
          <SearchBar onSearch={onSearchHandler} />
        </Grid>
      </Grid>
    </Grid>
  );
};
