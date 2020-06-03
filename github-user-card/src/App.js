import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from './UserCard'
import Followers from './Followers'

import { makeStyles } from '@material-ui/core'


class App extends React.Component {
  state = {
    user:{},
    followers:[],
  }
  componentDidMount() {
    axios.get(' https://api.github.com/users/martinezmarina')
    .then(res => {
      console.log(res.data)
      this.setState({
        user: res.data
      })
    })
    .catch(err => {
      console.log("error, could not find user")
    })
    axios.get('https://api.github.com/users/martinezmarina/followers')
    .then(res => {
      console.log(res.data)
      this.setState({
        followers:res.data,
      })
    })
    .catch(err => {
      console.log("error, could not find followers")
    })
  }
  render(){
  return(
    
    <div className = "App" >
      <header>
        <h1>Github Users</h1>
      </header>
       <UserCard 
       image={this.state.user.avatar_url} 
       name={this.state.user.name} 
       username={this.state.user.login} 
       location={this.state.user.location} 
       url={this.state.user.html_url} 
       bio={this.state.user.bio}/> 

      {this.state.followers.map(follower => (
        <Followers follower={follower.login} key={follower.id} followerAvatar={follower.A} />
      ))}
      
    </div>
  );
  }
}

export default App;
