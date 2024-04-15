"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { IListItem } from "../sidebar";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }: { item: IListItem }) => {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        p: "20px",
        margin: "5px 0px",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "#2e374a",
        },
        backgroundColor: pathname === item.path ? "#2e374a" : "initial",
      }}
    >
      <Link
        href={item.path}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {item.icon}
        {item.title}
      </Link>
    </Box>
  );
};

export default MenuLink;
