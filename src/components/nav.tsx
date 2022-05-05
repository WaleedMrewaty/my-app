/* spellchecker: disable */
import { Box,Typography } from "@mui/material";

const Nav = () => {
  return (
    <Box height={400} position="relative">
      <Typography
        sx={{
          fontSize: 80,
          fontWeight: 700,
          position: "absolute",
          top: "80px",
          left: "50%",
          whiteSpace: "nowrap",
          transform: "translate(-50%)",
        }}
      >
        The Rick and Morty
      </Typography>
    </Box>
  );
};

export default Nav;
