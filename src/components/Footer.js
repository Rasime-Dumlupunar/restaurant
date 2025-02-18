import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p> &copy; 2025 burger03.com</p>
        <div className="icon">
          <InstagramIcon fontSize="large" />
          <Twitter fontSize="large" />
          <FacebookIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
