import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { getStatus, setPage } from "../features/searchSlice";

 const Filter = () => {
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event: any) => {
    setStatus(event.target.value);
    dispatch(getStatus(event.target.value));
    dispatch(setPage(1));
  };

  return (
    <FormControl size="small" sx={{ ml: 1, minWidth: 180 }}>
      <InputLabel id="demo-simple-select-helper-label" color="success">
        Filter by status
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={status}
        label="Filter by status"
        onChange={handleChange}
        color="success"
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        <MenuItem value="alive">Alive</MenuItem>
        <MenuItem value="dead">Dead</MenuItem>
        <MenuItem value="unknown">unknown</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter