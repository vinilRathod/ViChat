import React,{useState} from 'react';
import Axios from 'axios';
import './Home.css';
import { useHistory } from 'react-router';
const Home = () =>{

    const [password,setPassword] = useState('');
    const [room,setRoom] = useState('');
    const history = useHistory();
    const createRoom = () => {
        if(!room)
            alert("Enter roomname !");
        if(!password)
            alert("Enter password !")
        Axios.post("https://vi-chatting.herokuapp.com/create",{
            room:room,
            password:password
        }).then(response =>{
            if(response.data.created){
                history.push('/join');
            }
            else{
                alert(response.data.msg);
            }
        });
    };
    return(
        <div className="homeOuterContainer">
           
        <div className="homeInnerContainer">
            <div className="welcome">
                Welcome to Vi-Chat
                </div>
                <h5 className="subheading">Create a Room =&gt; Share the room details with friends =&gt; Start Chatting</h5>
            
                <h2 className="heading">
                    Create a Room
                </h2>
                <div>
                    <input type="text" placeholder="Create a Room" className="homeInput" onChange={(e)=>{setRoom(e.target.value)}} />
                </div>
                <br />
                <div>
                    <input type="password" placeholder="Create a Password" className="homeInput" onChange={(e)=>{setPassword(e.target.value)}} />   
                </div>
                <button className="button mt-20" type="submit"
                 onClick={createRoom}>Create</button>
                <br />
                <br />
                <div className="footer">
                Already have the room's name & password,  
                <a href={`/join`}>
                    Enter
                </a>
                </div>
            </div>
        </div>
    );
}
export default Home;

