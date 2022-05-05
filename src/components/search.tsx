import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchKey ,setPage} from "../features/searchSlice";
import { useDebouncedCallback } from 'use-debounce';
import { Box, TextField } from "@mui/material";
import  Filter  from "./filter";

interface ISearch {
  style: object;
}

const Search: FC<ISearch> = ({ style }) => {
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();
  
  const debounced = useDebouncedCallback(
    (value) => {
      dispatch(getSearchKey(value));
      dispatch(setPage(1));
    },
   1000
  );

  const handleChange = (event: any) => {
    setSearchKey(event.target.value);
    debounced(event.target.value)
  }

  return (
    <Box style={{ ...style }}>
      <TextField
        id="search"
        type="search"
        size="small"
        label="Search"
        color="success"
        value={searchKey}
        onChange={handleChange}
      />
      <Filter />
    </Box>
  );
};
export default Search;
