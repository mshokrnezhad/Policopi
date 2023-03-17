import style from "./style.main";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import SiteIcon from "@mui/icons-material/FeedOutlined";
import LoginIcon from "@mui/icons-material/VpnKeyOutlined";
import RegIcon from "@mui/icons-material/PersonAddAltOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("2950801");

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button variant="contained" style={style(isLoggedIn).SIC}>
            <div style={style(isLoggedIn).SNM}>پلی‌کپی</div>
            <SiteIcon />
          </Button>

          <Avatar id="AVT" style={style(isLoggedIn).AVT} src={`https://api.multiavatar.com/${user}.png`} />

          <div id="UID" style={style(isLoggedIn).UID}>
            {user}
          </div>

          <Button variant="contained" id="BLI" style={style(isLoggedIn).BLI}>
            <LoginIcon /> &nbsp;/&nbsp; <RegIcon />
          </Button>

          <Button variant="contained" style={style(isLoggedIn).BLO}>
            <LogoutIcon />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
