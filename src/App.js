import React from 'react';

import logo from './logo.svg';
import './App.css';
import {useState, setState, useEffect, useRef, createRef} from "react";
import {TextField, Fab} from "@mui/material";
import {Send} from "@mui/icons-material";
import {useTheme} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Chat from '@mui/icons-material/Chat';
import uuid from 'react-uuid'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Profile from './pages/Profile';
import Home from './pages/Home';
import Chats from './pages/Chats';
import Undef from './pages/Undef';


export const MyThemeContext = React.createContext({ theme: 'dark' });


const menu = [
  {path:'/'             , name: 'Home'},
  {path:'/profile'      , name: 'Profile'},
  {path:'/chats/default', name: 'Chats'},
]

//Just forgot to create new branch
function App() {

  return (
    <div className="App">
      <MyThemeContext.Provider value={{theme: 'dark'}} />
      <ToastContainer />
      <div className={'messenger'}>
        <div>
            {Object.keys(menu)?.map(index => (
                <div className={'menuitem'} ><Link to={menu[index].path}>{menu[index].name}</Link></div>
              ))}
        </div>
        <div>
          <Routes>
              <Route path='/profile' element={<Profile />}/>
              <Route exact path='/chats/:uid' element={<Chats />}/>
              <Route path='/' element={<Home />}/>
              <Route path='*' element={<Undef />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
