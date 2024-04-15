import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <Box sx={{ position: "fixed" }}>
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(to top, #182237, #253352)",
          p: "20px",
          borderRadius: "10px",
          mb: "20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "50%",
            height: "50%",
          }}
        >
          <Image
            src="/astronout.png"
            alt=""
            fill
            style={{ objectFit: "contain", opacity: 0.2 }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Stack sx={{ fontWeight: "bold" }}>🔥 Available Now</Stack>
          <Stack sx={{ fontWeight: "bold", fontSize: "20px" }}>
            How to use the new version of the admin dashboard
          </Stack>
          <Stack
            sx={{ fontWeight: 500, fontSize: "12px", color: "var(--textSoft)" }}
          >
            Takes 4 minutes to learn
          </Stack>
          <Stack sx={{ color: "var(--textSoft)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Stack>
          <Button
            sx={{
              borderRadius: "5px",
              display: "flex",
              backgroundColor: "#5d57c9",
              color: "white",
              width: "max-content",
              gap: "10px",
            }}
          >
            <MdPlayCircleFilled />
            Watch
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(to top, #182237, #253352)",
          p: "20px",
          borderRadius: "10px",
          mb: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Stack sx={{ fontWeight: "bold" }}>🚀 Coming soon</Stack>
          <Stack sx={{ fontWeight: "bold", fontSize: "20px" }}>
            New server actions are available, partial pre-rendering is coming up
          </Stack>
          <Stack
            sx={{ fontWeight: 500, fontSize: "12px", color: "var(--textSoft)" }}
          >
            Boost your productivity
          </Stack>
          <Stack sx={{ color: "var(--textSoft)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Stack>
          <Button
            sx={{
              borderRadius: "5px",
              display: "flex",
              backgroundColor: "#5d57c9",
              color: "white",
              width: "max-content",
              gap: "10px",
            }}
          >
            <MdReadMore />
            Learn
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
