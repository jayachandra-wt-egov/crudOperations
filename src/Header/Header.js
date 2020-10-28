import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title1: {
    // flexGrow: 20,
  },
}));

 function Header(props) {


  let logOut=(e)=>{

    if(window.confirm("are you sure you want to log out"))
    {
      localStorage.clear();

      props.history.push("/");
    }

  }
    let userName = localStorage.getItem("username");

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Hello {userName}
          </Typography>
          <Button style= {{marginLeft :"1100px"}} className={classes.title1} color="inherit" onClick={logOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);