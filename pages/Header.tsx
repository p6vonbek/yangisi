import Link from "next/link";
import Styles from "../pages/Hedrs/Headrs.module.scss"
import Burger from "./Burger/Burger";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

interface Props {
    window?: () => Window;}
  const navItems = ['DOMIKTUT.RU', 'HomeInfo','Cottager', 'Houses', 'Header', ];
  export default function DrawerAppBar(props: Props) {
    return<header  className={Styles.header} >
       <Box sx={{ display: 'flex' , backgroundColor:'#161623'}}>
      <AppBar component="nav">
        <Toolbar>
        <nav style={{display:'flex',}}>
            <Link style={{fontSize:'30px',marginLeft:'150px'}} className={Styles.link}  href={'/'}>DOMIKTUT.RU </Link>
            <Link className={Styles.link}  href={'/Houses'}>Mockba</Link>
            <Link className={Styles.link}  href={'/Cottages'}>Каталог</Link>
            <Link className={Styles.link}  href={'/HomesInfo'}>Частые вопросы</Link>
            <Link className={Styles.link}  href={'/Like'}>Сотрудничество</Link>
            <Link className={Styles.link}  href={'./Login/Login'}>Login</Link>
            <Burger/>
        </nav>
        </Toolbar>
      </AppBar>
    </Box>
    </header>
}