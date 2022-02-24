import {useState, useEffect, useRef} from "react";
import {TextField, Fab} from "@mui/material";
import {Send} from "@mui/icons-material";
import {useTheme} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import Adb from '@mui/icons-material/Adb';
import Delete from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';
import uuid from 'react-uuid'
import { useLocation, useParams, Routes, Route, Link, useHistory  } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chat from '../components/Chat';
import Undef from '../pages/Undef';
 
const chatList = {
  default: {name: 'default', messages: [{ message: 'Enter your message please in default', author: 'bot' }]},
  chat1: {name: 'Chat1', messages: [{ message: 'Enter your message please in chat1', author: 'bot' }]},
  chat2: {name: 'Chat2', messages: [{ message: 'Enter your message please in chat2', author: 'bot' }]},
  chat3: {name: 'Chat3', messages: [{ message: 'Enter your message please in chat3', author: 'bot' }]},
}

              
const Chats = () => { 

  const location  = useLocation();
  const [list, setList] = useState(chatList);
  const {uid} = useParams();
  useEffect(()=>{},[uid]);

  const deleteFromChats = () => {
  	if(uid === 'default'){
  		toast('Unable to delete default chat!')
  		return;
  	}
    delete chatList[uid];
    setList(chatList);
  }

  const addChat = () => {
  	const newChatUid = uuid();
  	chatList[newChatUid] = chatList['default'];
  	chatList[newChatUid].name = 'New chat '+newChatUid;
  }

  if(!chatList[uid]){
  	return <Undef/>
  }

  return (
  		<>
	  		<div className={'chatList'}>
	  			
	  			{ 
		  			Object.keys(chatList).map( index => ( 
				          <ListItem key={index} disablePadding>
				            <Link to={'/chats/'+index} state={{ uid:index, messages:list[index].messages }}>
				              <ListItemButton>
				                <ListItemIcon>
				                  <ChatIcon />
				                </ListItemIcon>
				                <ListItemText primary={list[index].name} secondary={index === uid?'Selected':''} />
				              </ListItemButton>
				            </Link>
				          </ListItem>
		        		) 
		        	)
			  	}
			  	<ListItem key={uuid()} onClick={addChat} disablePadding>
	              <ListItemButton>
	                <ListItemIcon>
	                  <Add />
	                </ListItemIcon>
	                <ListItemText primary='Add new chat' />
	              </ListItemButton>
	          	</ListItem>
			  	<ListItem key={uuid()} onClick={deleteFromChats} disablePadding>
	              <ListItemButton>
	                <ListItemIcon>
	                  <Delete />
	                </ListItemIcon>
	                <ListItemText primary='Delete current chat' secondary={list[uid].name} />
	              </ListItemButton>
	          	</ListItem>
	        </div>

	    	<div className={'chat'}>
	    		<Chat messages={list[uid].messages} />
		    </div>
    	</>
  	);
}

export default Chats;