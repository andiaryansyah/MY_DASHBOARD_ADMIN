"use client";
import { Box, Stack, TextField, Theme, textFieldClasses } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { styled } from "@mui/system";

export const CustomTextField = styled(TextField)(() => {
  return {
    [`&.${textFieldClasses.root}`]: {
      backgroundColor: "transparent",
      "& label.Mui-focused": {
        color: "var(--text)",
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          border: "none",
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        border: "none",
      },
    },
  };
});

const Navbar = () => {
  const pathname = usePathname();
  const getName = pathname.split("/").pop();
  const titleName = getName && getName.replace(/([A-Z])/g, " $1").trim();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: "20px",
        borderRadius: "10px",
        backgroundColor: "var(--bgSoft)",
      }}
    >
      <Stack
        sx={{
          color: "var(--textSoft)",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        {titleName}
      </Stack>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#2e374a",
            borderRadius: "10px",
            px: "10px",
          }}
        >
          <MdSearch />
          <CustomTextField
            size="small"
            type="text"
            placeholder="Search..."
            InputProps={{
              style: {
                color: "var(--text)",
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
