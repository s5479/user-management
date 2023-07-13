import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
function Loader() {
  return (
    <div>
      <Box
        sx={{ display: "flex" }}
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    </div>
  );
}

export default Loader;
