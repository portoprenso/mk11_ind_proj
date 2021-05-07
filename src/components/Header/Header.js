import React from 'react';
import "./Header.css"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MKLogo from '../../assets/mortal-kombat-11-vector-logo.svg';
import {Link} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function Header() {
  // const classes = useStyles();

  return (
      <div className="nav-bar">
        <div className='nav-bar__wrapper'>
            <img src={MKLogo} alt="asd" className="top-logo-mk" />
          {/*<Typography variant="div" className='nav-bar__title'>*/}
              <ul className="header__ul">
                  <li className="ul__item">
                      <div className="dropdown">
                          <button className="dropbtn">Dropdown</button>
                          <div className="dropdown-content">
                              <Link >Link 1</Link>
                              <Link >Link 2</Link>
                              <Link >Link 3</Link>
                          </div>
                      </div>
                  </li>
                  <li className="ul__item">Roster</li>
                  <li className="ul__item">#MKKOLLECTIVE</li>
                  <li className="ul__item">Сообщество</li>
                  <li className="ul__item">Галлерея</li>
                  <li className="ul__item">ESports</li>
                  <li className="ul__item"><button className='btn-buy'>Войти</button></li>
              </ul>
          {/*</Typography>*/}
          <button variant="contained" color="primary" className="btn-buy"><Link className="hover-animated-link">Купить сейчас</Link></button>
        </div>
      </div>
  );
}