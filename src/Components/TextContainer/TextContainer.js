  
import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Vi - Chat <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with  <span role="img" aria-label="emoji">❤️</span> by Vinil </h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
      Do not refresh once entered , else  &#x26A0;
    </div>
    {
      
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({pname}) => (
                  <div key={pname} className="activeItem">
                    {pname}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);
export default TextContainer;