import React from "react";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
/* import FavoriteIcon from "@mui/icons-material/Favorite"; */
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "./MenuBanner.css";

export default function MenuBanner() {
  return (
    <div id="menu-banner-whole-container">
      <Box>
        <IconButton>
          <FavoriteBorderIcon id="menu-banner-button" />
          {/*  <FavoriteIcon id="menu-banner-button" /> */}
          <ArrowCircleDownIcon id="menu-banner-button" />
          <MoreHorizIcon id="menu-banner-button" />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <PlayCircleIcon id="menu-banner-button" />
        </IconButton>
      </Box>
    </div>
  );
}
