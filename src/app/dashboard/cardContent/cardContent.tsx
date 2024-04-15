import { Box, Stack } from "@mui/material";
import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const CardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--bgSoft)",
        p: "20px",
        borderRadius: "10px",
        display: "flex",
        gap: "20px",
        cursor: "pointer",
        width: "100%",
        "&:hover": {
          backgroundColor: "#2e374a",
        },
      }}
    >
      <MdSupervisedUserCircle size={24} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Stack>Total Users</Stack>
        <Stack sx={{ fontSize: "24px", fontWeight: 500 }}>10.273</Stack>
        <Box sx={{ display: "flex", fontSize: "14px", fontWeight: 300 }}>
          <Stack sx={{ color: "lime", pr: 1 }}>12% </Stack>
          <Stack>more than previous week</Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default CardContent;
