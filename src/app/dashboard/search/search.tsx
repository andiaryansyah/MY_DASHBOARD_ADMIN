import { CustomTextField } from "@/app/ui/dashboard/navbar/navbar";
import { Box } from "@mui/material";
import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }: { placeholder: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#2e374a",
        borderRadius: "10px",
        px: "10px",
        width: "max-content",
      }}
    >
      <MdSearch />
      <CustomTextField
        size="small"
        type="text"
        placeholder={placeholder}
        InputProps={{
          style: {
            color: "var(--text)",
          },
        }}
      />
    </Box>
  );
};

export default Search;
