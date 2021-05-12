import React, { useState } from 'react';
import "./Header.css"
import { fade, makeStyles } from '@material-ui/core/styles';
import MKLogo from '../../assets/mortal-kombat-11-vector-logo.svg';
import {Link, useHistory} from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { useProducts } from '../../contexts/ProductsContext';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


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
      search: {
        color: "black",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        display: 'flex'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        color: "#ff3c20",
        height: '100%',
        position: 'relative',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));





export default function Header() {
  const classes = useStyles()
  let history = useHistory()
  const { currentUser } = useAuth()
  const { nulifyDataLimit, getProductsData } = useProducts()
  const [searchValue, setSearchValue] = useState(getSearchValue())

  function getSearchValue(e) {
    const search = new URLSearchParams(history.location.search)
    // console.log(history.location.pathname);
    return search.get('q')
}

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search)
    search.set('q', e.target.value)
    history.push(`${history.location.pathname}?${search.toString()}`)
    setSearchValue(e.target.value)
    getProductsData(history)
  }

  return (
      <div className="nav-bar">
        <div className='nav-bar__wrapper'>
            <Link exact to='/'><img src={MKLogo} alt="asd" className="top-logo-mk" /></Link>
                    <nav role="navigation">
                      <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                        <Link exact to="/roster"><li className="ul__item">Roster</li></Link>
                  <Link exact to ='/chat'><li className="ul__item">Чат</li></Link>
                  <li className="ul__item">Сообщество</li>
                  <Link exact to="/gallery"><li className="ul__item">Галлерея</li></Link>
                  <Link><li onClick={() => nulifyDataLimit()} className="ul__item">Продукция</li></Link>
                  { currentUser ? 
                    (
                      <Link exact to="/profile"><li className="ul__item"><button className='btn-buy'>Мой профиль</button></li></Link>
                    )
                    :
                    (
                      <Link exact to="/login"><li className="ul__item"><button className='btn-buy'>Войти</button></li></Link>
                    )
                  }

                  {history.location.pathname=='/store/' ? (
                      <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            value={searchValue}
                            onChange={handleValue}
                            placeholder="Поиск игр..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                      </div>
                  
                  ) 
                  : 
                  (<></>)
                  }
                        </ul>
                      </div>
                    </nav>
              <ul className="header__ul">
                  {/* <li className="ul__item">
                      <div className="dropdown">
                          <button className="dropbtn">Dropdown</button>
                          <div className="dropdown-content">
                              <Link >Link 1</Link>
                              <Link >Link 2</Link>
                              <Link >Link 3</Link>
                          </div>
                          
                      </div>
                  </li> */}
                  <Link exact to="/roster"><li className="ul__item">Roster</li></Link>
                  <Link exact to ='/chat'><li className="ul__item">Чат</li></Link>
                  <li className="ul__item">Сообщество</li>
                  <Link exact to="/gallery"><li className="ul__item">Галлерея</li></Link>
                  <Link><li onClick={() => nulifyDataLimit()} className="ul__item">Продукция</li></Link>
                  { currentUser ? 
                    (
                      <Link exact to="/profile"><li className="ul__item"><button className='btn-buy'>Мой профиль</button></li></Link>
                    )
                    :
                    (
                      <Link exact to="/login"><li className="ul__item"><button className='btn-buy'>Войти</button></li></Link>
                    )
                  }

                  {history.location.pathname=='/store/' ? (
                      <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            value={searchValue}
                            onChange={handleValue}
                            placeholder="Поиск игр..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                      </div>
                  
                  ) 
                  : 
                  (<></>)
                  }

              </ul>
          {/* <button variant="contained" color="primary" className="btn-buy"><Link className="hover-animated-link">Купить сейчас</Link></button> */}
        </div>
      </div>
  );
}