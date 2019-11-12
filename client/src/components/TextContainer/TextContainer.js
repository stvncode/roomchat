import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 className="center">Realtime Chat Application</h1>
      <h2 className="padding">Created with React, Express, Node and Socket.IO</h2>
    </div>
    {
      users
        ? (
          <div>
            <h1 className="center padding">People currently chatting:</h1>
            <div className="activeContainer padding">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img alt="Online Icon" src={onlineIcon}/>
                    &nbsp;
                    {name}
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