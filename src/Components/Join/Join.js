import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';
const Join = () =>{

    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">
                    Enter the Room
                </h1>
                <div>
                    <input type="text" placeholder="Name" className="joinInput" onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Room" className="joinInput" onChange={(e)=>{setRoom(e.target.value)}} />   
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Enter</button>
                </Link>
            </div>
        </div>
    );
}
export default Join;