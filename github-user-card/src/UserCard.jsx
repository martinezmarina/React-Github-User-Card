import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  
function UserCard(props) {
    const classes = useStyles();
    return(
  <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container spacing={2}>
          <Grid item>
      <ButtonBase className={classes.image}>
    <img className={classes.img} src={props.image} alt={"User avatar"} />
    </ButtonBase>
    <h3 className="name">{props.name}</h3>
    </Grid>
    <div>
    <p className="username">Username: {props.username}</p>
    <p>Location: {props.location}</p>
    <p>
      Profile: 
      <a href={props.url}> {props.url}</a>
    </p>
    <p>Bio: {props.bio}</p>
    </div>
    
    </Grid>
    </Paper>
  </div>
    )
};
export default UserCard