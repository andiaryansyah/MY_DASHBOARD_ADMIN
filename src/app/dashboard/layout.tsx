import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import { Box, Container } from "@mui/material";
import Footer from "../ui/dashboard/footer/footer";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flex: 1, backgroundColor: "var(--bgSoft)", p: 2 }}>
        <Sidebar />
      </Box>
      <Box sx={{ flex: 4, p: 2 }}>
        <Navbar />
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
