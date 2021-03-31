import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';
//import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

let socket;
const Chat = ({location}) =>{

    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const [users,setUsers] = useState([]);
    const endpoint ="https://vi-chatting.herokuapp.com/";
    useEffect(()=>{
        const {name,room} = queryString.parse(location.search);

        socket = io(endpoint, {
             withCredentials: true,
        });

        setName(name);
        setRoom(room);
        
        socket.emit('join',{name,room});
        socket.on('roomData',({room,users})=>{
            setUsers(users);
            console.log(users);
        })
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    }, [endpoint,location.search] );

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message]);

        })
    },[messages]);
    const sendMessage = (e) =>{
        e.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''));
        }
    }
    console.log(message,messages);
    return(
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />
        </div>
    );
}
export default Chat;