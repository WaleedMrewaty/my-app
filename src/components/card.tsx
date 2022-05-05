import { useState } from "react";
import { Grid, Card, Typography } from "@mui/material";
import { characterType } from "../types/characters";
import Image from "next/image";
import StatusIcon from "./statusIcon";
import MyDialog from "./myDialog";

let characterType: characterType;
type propType = {
  character: characterType;
};

const MyCard = ({ character }: propType) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>   <Grid xl={6} md={12} xs={12} sm={12} item>
      <Card
      onClick={handleClickOpen}
        sx={{
          width: 600,
          height: 220,
          marginBottom: 10,
          marginX: "auto",
          transition: 0.6,
          backgroundColor: "#3C3E44",
          boxShadow:
            "rgb(0 0 0 / 10%) 0px 4px 6px -1px,rgb(0 0 0 / 6%) 0px 2px 4px -1px",
          borderRadius: 6,
          overflow: "hidden",
          position: "relative",
          cursor: "pointer"
        }}
      >
        <div
          style={{ width: 229.2, height: 220, position: "absolute", left: 0 }}
        >
          <Image layout="fill" src={character.image} alt="character.name" />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            left: 230,
            padding: 14,
            color: "#fff",
          }}
        >
          <Typography fontSize={22} fontWeight={1000} sx={
            {  "&:hover": {
      color: "rgb(85, 204, 68)"
    },cursor: 'pointer'
    }} >
                {character.name}
          </Typography>
          <Typography fontWeight={600} fontSize={16}>
            <StatusIcon />
            {character.status}-{character.species}
          </Typography>
          <Typography mt={0.7} sx={{ opacity: 0.5 }} fontSize={16}>
            Last known location:
          </Typography>
          <Typography fontSize={16}>{character.location.name}</Typography>
          <Typography mt={0.7} sx={{ opacity: 0.5 }} fontSize={16}>
            Gender:
          </Typography>
          <Typography>{character.gender}</Typography>
        </div>
      </Card>
    </Grid>
   <MyDialog open={open} onClose={handleClose} character={character}/>
    </>
  );
};

export default MyCard;
