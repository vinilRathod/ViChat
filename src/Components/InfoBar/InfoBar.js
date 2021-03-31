import React from 'react';
import './InfoBar.css';
import icon from '../../icons/onlineIcon.png';
import close from '../../icons/closeIcon.png';
const InfoBar = ({room}) =>{
    return(
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src ={icon} alt="online" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/join" ><img src={close} alt="close" /></a>
            </div>
        </div>
    );
}
export default InfoBar;