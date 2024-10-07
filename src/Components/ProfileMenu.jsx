import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="flex justify-between items-center gap-1 text-gray-600 border border-gray-300 p-2 rounded-full"
      >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            minWidth: "200px",
            borderRadius: "1rem",
            boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
          },
        }}
      >
        <MenuItem className="p-2.5 px-4 text-xs text-font-grey" onClick={handleClose}>
          Signup
        </MenuItem>
        <MenuItem onClick={handleClose} className="p-2.5 px-4 text-xs text-font-grey">
          Login
        </MenuItem>
        <div
          style={{
            height: "1px",
            backgroundColor: "#ddd",
            width: "100%",
          }}
        />
        <MenuItem onClick={handleClose} className="p-2.5 px-4 text-xs text-font-grey">
          Gift Cards
        </MenuItem>
        <MenuItem onClick={handleClose} className="p-2.5 px-4 text-xs text-font-grey">
          Airbnb Your Home
        </MenuItem>
        <MenuItem onClick={handleClose} className="p-2.5 px-4 text-xs text-font-grey">
          Host an experience
        </MenuItem>
        <MenuItem onClick={handleClose} className="p-2.5 px-4 text-xs text-font-grey">
          Help
        </MenuItem>
      </Menu>
    </div>
  );
}
