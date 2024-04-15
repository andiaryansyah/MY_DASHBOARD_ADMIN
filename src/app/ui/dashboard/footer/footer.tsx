import { Box, Stack } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: "30px",
        color: "var(--textSoft)",
      }}
    >
      <Stack sx={{ fontWeight: "bold" }}>Logo</Stack>
      <Stack sx={{ fontSize: "12px" }}>@ All rights reserved.</Stack>
    </Box>
  );
};

export default Footer;
