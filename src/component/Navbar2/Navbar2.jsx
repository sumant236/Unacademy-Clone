import React from 'react'
import style from './Navbar2.module.css';
import Search from './Search';
import SelectAutoWidth from './Select';
import Avatar from '@mui/material/Avatar';

function Navbar2() {
  return (
    <div className={style.navbar_border}>
      <div>
        <img src='https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256' alt='nav_logo_img' />
        <div className={style.selector_nda}>
          <SelectAutoWidth />
        </div>  
      </div>  
      <div className={style.day_hour_logo}>
        <Search />
        <button>
          <img className={style.notice_icon} src='https://uxwing.com/wp-content/themes/uxwing/download/37-communication-chat-call/notification.png' alt='well_notification'  width="30px" />
        </button>  
        <div>
          <button><img className={style.notice_icon} src='https://pngimg.com/uploads/circle/circle_PNG26.png' alt='0_min' width="30px" /> 0 min</button>
          <button><img className={style.notice_icon} src='https://static.uacdn.net/production/_next/static/images/layout/header/no_streak.svg?q=75&w=32' alt='0_min' /> 0 days</button>
        </div>
        <div>
          <Avatar>S</Avatar>
        </div>
      </div>
    </div>
  )
}
export default Navbar2;

