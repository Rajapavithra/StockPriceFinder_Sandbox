import { CheckBoxOutlineBlank, CheckBox } from "@mui/icons-material";
import { Checkbox, TextField } from "@mui/material";

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export const renderOptionListHandler = (props, option, { selected }) => {
  return (
    <li {...props}>
      <Checkbox
        icon={icon}
        checkedIcon={checkedIcon}
        style={{ marginRight: 8 }}
        checked={selected}
      />
      {option.name}
    </li>
  );
};

export const renderInputHandler = (params) => (
  <TextField {...params} placeholder="Enter atleast 2 characters.." />
);
