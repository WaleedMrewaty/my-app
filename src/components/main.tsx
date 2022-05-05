import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setPage } from "../features/searchSlice";
import { Grid, Button } from "@mui/material";
import {  toast } from 'react-toastify';
import { charactersType, characterType } from "../types/characters";
import Card from "./card";
import Search from "./search";
import Nav from "./nav";
import Loading from "./loading";
import Error from './error'

let characterType: characterType;
let charactersType: charactersType;

const Main = () => {
const page = useSelector(
  (state: RootState) => state.characterSearch.page
);
  const characterStatus = useSelector(
    (state: RootState) => state.characterSearch.status
  );
  const searchKey = useSelector(
    (state: RootState) => state.characterSearch.searchKey
  );
  const dispatch = useDispatch();
    const pervPage = ()=>{
      const newPage = page-1; 
      dispatch(setPage(newPage));
    }
    const nextPage = ()=>{
      const newPage = page+1
      dispatch(setPage(newPage));
    }
    // Data Fetching
  const fetchFilteredCharacters = async ()=>{
    try {
      const response =
      characterStatus === "" && searchKey === ""
        ? await axios
            .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then((res) => res.data)
        : await axios
            .get(
              `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchKey}&status=${characterStatus}`
            )
            .then((res) => res.data);
    return response;
    } catch (error: any) {
      console.log((error as Error).message)
      const errorMessage = error.response.data; 
      console.log('error',errorMessage.error)
      notify(errorMessage.error)
    }
  };
    // Data filtering
  const { data: filteredCharacters, status } = useQuery(
    ["filteredCharacters", page,searchKey,characterStatus],
    fetchFilteredCharacters,
    {
      keepPreviousData: true,
    }
  );
  const notify = (message:string) => toast.info(message);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "success" && (
        <>
          <Nav />
          <Grid
            container
            sx={{
              width: "100%",
              background: "#24282F",
              position: "absolute",
              left: 0,
              top: 400,
              p: 10,
            }}
          >
            {filteredCharacters?.results.map((character: characterType) => (
              <Card character={character} key={character.id} />
            ))}
          </Grid>
          <div
            style={{
              marginTop: -80,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginLeft: 120 }}>
              <Button
                onClick={pervPage}
                disabled={page === 1}
                color="success"
                variant="contained"
              >
                Previous
              </Button>
              {filteredCharacters&&(
                   <Button
                   onClick={nextPage}
                   disabled={!filteredCharacters.info.next}
                   color="success"
                   variant="contained"
                   sx={{ ml: 2 }}
                 >
                   Next
                 </Button>
              )}
            </div>
            <Search
              style={{ marginRight: 120 }}
            />
          </div>
        </>
      )}
      {status === "error" && <Error />}
    </>
  );
};

export default Main;
