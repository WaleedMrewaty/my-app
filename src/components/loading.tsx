import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <CircularProgress color="success" />
    </div>
  );
};

export default Loading;
