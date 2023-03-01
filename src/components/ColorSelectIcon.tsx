import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ColorLens } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const options = [
  { text: "yellow", value: "#ffc107" },
  { text: "orange", value: "orange" },
  { text: "purple", value: "purple" },
];

export default function SimpleListMenu({
  changeColor,
  currentColor,
}: {
  changeColor: Function;
  currentColor: string;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
    color: string
  ) => {
    setAnchorEl(null);
    changeColor(color);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickListItem}>
        <ColorLens />
      </IconButton>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.value}
            defaultValue={currentColor}
            disabled={currentColor === option.value}
            selected={currentColor === option.value}
            onClick={(event) => handleMenuItemClick(event, index, option.value)}
          >
            {option.text}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
