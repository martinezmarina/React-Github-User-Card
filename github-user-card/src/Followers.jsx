import React from 'react';

function Followers(props) {
    console.log(props)
    return(
  <div className="followersCard">
      <h2>Follower:</h2>
      <div>
          <h3>{props.follower}</h3>
      <img src={props.followerAvatar}/>
    
    </div>
  </div>
    )
};
export default Followers