import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


//Admin@123

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }
  ValidateUserCred = (e) => {

    if (this.state.username === "jai" && this.state.password === "Admin@123") {
      this.props.history.push("/TableData");

     let usereData = this.state.username;

      localStorage.setItem("username", this.state.username);    
    }
    else{
      alert("Invalid Credintails !!");
    }

  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, ()=>{console.log('<>><>><. helloo puaer,msnd,a', this.state.username)})
  }

  render() {
    return (
      <div>
        <h2>Welcome to Electrum IT Solutions</h2>

        {/* <Grid container> */}
          <Grid >
            <TextField name="username" label="Email" variant="outlined" onChange={this.handleChange}/>
          </Grid>
          <Grid spacing= {3}>
            <TextField style = {{marginTop:"15px"}} type="password" name="password" label="password" variant="outlined" onChange={this.handleChange}/>
          </Grid>

        {/* </Grid> */}


        <Button variant="contained" style = {{marginTop:"35px"}} onClick={this.ValidateUserCred} color="primary">Log In</Button>

      </div>
    )
  }
}

export default Login;