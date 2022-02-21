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
import Adb from '@mui/icons-material/Adb';
import uuid from 'react-uuid'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const messageList = [];
const chatList = [
  {name: 'Chat1', id: uuid()},
  {name: 'Chat2', id: uuid()},
  {name: 'Chat3', id: uuid()},
]

//Just forgot to create new branch
function App() {
  const theme = useTheme();

  const [list, setList] = useState(messageList);
  const [message, setMessage] = useState('');

  const localAuthor = 'me';
  const [author, setAuthor] = useState(localAuthor);

  //Creating ref for input
  const messageInput = useRef(null);
  const authorInput = useRef(null);

  const BotAnswerDelayMicrosec = 1500;
  const botAuthor = 'Bot'
  const botMessage = 'Just a simple bot want to chat you'


  const setNewMessage = () =>{
    if(!author) { setAuthor(localAuthor)};
    //Toast instead alert, much better
    if(!message){ toast('No message specified!'); return;}
    setList([...list,{ message: message, author:author }]);
    //Focus after sending
    messageInput.current.focus();
  }

  const messageHandler = (event) => {
    setMessage(event.target.value);
  }
  const authorHandler = (event) => {
    setAuthor(event.target.value);
  }

  //Focusing input on app start
  useEffect(() => { messageInput.current.focus(); }, []);

  useEffect(()=>{},[message, author])

  useEffect(() => {
    if(!message || !author){ return; }
    if(author !== botAuthor){ //Something about bot
      setTimeout(() => { setList([...list,{ message: botMessage, author: botAuthor }]); }, BotAnswerDelayMicrosec);
    }

    //Clear message, reset author
    setMessage('');
    setAuthor(localAuthor);  
  },[list]);

  return (
    <div className="App">
      <ToastContainer />
      <div className={'messenger'}>
        <div className={'chatList'}>
          <List>
              { chatList.map( (item,index) => ( 
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Chat />
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ) )}
          </List>
        </div>
        <div className={'chat'}>
          <div className={'chatSheet'}>
            <List>
                { list.map( (item,index) => ( 
                    <ListItem key={uuid()} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {(item.author !== botAuthor ? <AccountCircle /> : <Adb />)}
                        </ListItemIcon>
                        <ListItemText primary={item.message} secondary={item.author} />
                      </ListItemButton>
                    </ListItem>
                  ) )}
            </List>
          </div>
          <div className={'chatInputs'}>
            <TextField 
              inputRef={messageInput}
              label="Enter message" 
              variant="outlined"
              type="text"
              autoFocus
              value={message} 
              onChange={messageHandler}
            />
            <Fab color='secondary' style={{borderColor: theme.palette.primary, marginLeft: '10px'}} onClick={setNewMessage}><Send/></Fab>
            <br/>
            <br/>
            <TextField 
              inputRef={authorInput}
              id="outlined-basic" 
              label="Author" 
              variant="outlined"
              type="text"
              value={author} 
              onChange={authorHandler}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
