import logo from './logo.svg';
import './App.css';
import {useState, setState, useEffect} from "react";

let messageList = [];

function App() {
  const [list, setList] = useState(messageList);
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');

  const BotAnswerDelayMicrosec = 1500;
  const botAuthor = 'Bot'
  const botMessage = 'Just a simple bot want to chat you'

  const setNewMessage = () =>{
    if(!message || !author){ alert('No author or message specified!'); return;}
    setList([...list,{ message: message, author:author }]);
  }

  const messageHandler = (event) => {
    setMessage(event.target.value);
  }
  const authorHandler = (event) => {
    setAuthor(event.target.value);
  }

  useEffect(()=>{},[author,message])

  useEffect(() => {
    if(!message || !author){ return; }
    if(author === botAuthor) return;
    else{ 
      setTimeout(() => { setList([...list,{ message: botMessage, author: botAuthor }]); }, BotAnswerDelayMicrosec);
    };

    setMessage('');
    setAuthor('');
  },[list]);

  return (
    <div className="App">
      <div>
          <ul>
            {list.map( (item,index) => ( <ul><li>Message: {item.message} <br/> Author: {item.author}</li></ul> ) )}
          </ul> 


          Message:  <textarea value={message} onChange={messageHandler}></textarea><br/>
          Author:   <input value={author} onChange={authorHandler}></input><br/>
          <button onClick={setNewMessage}>Send message</button>
      </div>

    </div>
  );
}

export default App;
