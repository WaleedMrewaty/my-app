import { Card, Typography } from "@mui/material";
import { characterType } from "../types/characters";
import Image from "next/image";
import StatusIcon from "./statusIcon";

type propType={
  character:characterType
}

const Character = ( {character} :propType) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: "#3C3E44",
      }}
    >
      <Card
        sx={{
          width: 800,
          height: 420,
          marginBottom: 10,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor: "#24282F",
          boxShadow:
            "rgb(0 0 0 / 10%) 0px 4px 6px -1px,rgb(0 0 0 / 6%) 0px 2px 4px -1px",
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        <div
          style={{ width: 500, height: "100%", position: "absolute", left: 0 }}
        >
          <Image layout="fill" src={character.image} alt={character.name} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            left: 500,
            padding: 14,
            color: "#fff",
          }}
        >
          <Typography
            fontSize={30}
            fontWeight={1100}
            style={{
              color: "white",
            }}
          >
            {character.name}
          </Typography>
          <Typography fontWeight={600} fontSize={22}>
            <StatusIcon />
            {character.status}-{character.species}
          </Typography>
          <Typography mt={1} sx={{ opacity: 0.5 }} fontSize={22}>
            Last known location:
          </Typography>
          <Typography fontSize={22}>{character.location.name}</Typography>
          <Typography mt={1} sx={{ opacity: 0.5 }} fontSize={22}>
            Gender:
          </Typography>
          <Typography>{character.gender}</Typography> 
        </div>
      </Card>
    </div>
  );
};

export default Character;
