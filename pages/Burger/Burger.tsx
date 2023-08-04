import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from "next/link";




const options = [
  <Link  href={'/'}>Main page</Link>,
  <Link  href={'/Home'}>Home</Link>,
  <Link  href={'/Houses'}>Houses</Link>,
  <Link  href={'/Cottages'}>Cottages</Link>,
  <Link  href={'/Homes Info'}>Homes Info</Link>,
  <Link  href={'/Link'}>❤️</Link>,
  <Link  href={'./Login/Login'}>Login</Link>,

];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuIcon style={{width:'15px',height:'15px'}}  onClick={handleClose}>
            {option}
          </MenuIcon>
        ))}
      </Menu>
    </div>
  );
}