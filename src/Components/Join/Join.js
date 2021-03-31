import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import './Join.css';
const Join = () =>{

    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [passwd,setPassword] = useState('');
    const history = useHistory();
    const enterRoom = () =>{
        if(!name)
            alert("Enter name !");
        if(!room)
            alert("Enter roomname !");
        if(!passwd)
            alert("Enter password !");
            Axios.post("https://vi-chatting.herokuapp.com/enter",{
                room:room,
                password:passwd,
            }).then(response =>{
                if(response.data.entered){
                            history.push(`/chat?name=${name}&room=${room}`)
                }else{
                    alert(response.data.msg);
                }
            });
    }
    return(
        <div className="joinOuterContainer">
        <div className="joinInnerContainer">
                <h2 className="heading">
                    Enter the Room
                </h2>
                <div>
                    <input type="text"  placeholder="Name" className="joinInput" onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Room" className="joinInput" onChange={(e)=>{setRoom(e.target.value)}} />   
                </div>
                <br />
                <div>
                    <input type="password"  placeholder="Create a Password" className="joinInput" onChange={(e)=>{setPassword(e.target.value)}} />   
                </div>
                    <button className="button mt-20" type="submit" onClick={enterRoom}>Enter</button>
            </div>
        </div>
    );
}
export default Join;

