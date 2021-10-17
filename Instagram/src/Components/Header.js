import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeIcon from "@mui/icons-material/Home";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
export default function Header() {
  return (
    <>
      <div className="head-row">
        <div className="logo">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="instagram"
          />
        </div>
        <input type="text" placeholder="search" />
        <div className="menu-item">
          <HomeIcon />
          <SendRoundedIcon />
          <ExploreOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <AccountCircleOutlinedIcon />
        </div>
      </div>
    </>
  );
}