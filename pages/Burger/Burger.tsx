import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from "next/link";




const options = [
  <Link style={{marginLeft:'15px',marginTop:'20px', textDecoration:'none', fontSize:'20px'}} href={'/'}>Home</Link>,
  <Link style={{marginLeft:'15px',marginTop:'40px', textDecoration:'none', fontSize:'20px'}} href={'/Houses'}>Houses</Link>,
  <Link style={{marginLeft:'15px',marginTop:'50px', textDecoration:'none', fontSize:'20px'}} href={'/Cottages'}>Cottages</Link>,
  <Link style={{marginLeft:'15px',marginTop:'60px', textDecoration:'none', fontSize:'20px'}} href={'/HomesInfo'}>HomesInfo</Link>,
  <Link style={{marginLeft:'15px',marginTop:'70px', textDecoration:'none', fontSize:'20px'}} href={'/Like'}>Like</Link>,
  <Link style={{marginLeft:'15px',marginTop:'80px', textDecoration:'none', fontSize:'20px'}} href={'./Login/Login'}>Login</Link>,

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
            width: '50ch',
            height:'40ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuIcon style={{width:'30px',height:'30px',color:'white'}}  onClick={handleClose}>
            {option}
          </MenuIcon>
        ))}
      </Menu>
    </div>
  );
}