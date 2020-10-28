import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
// import './CreateEditUser.css'

function CreateEditUser(props) {
  console.log('New Ueser Props', props);
  return (
    <div>
      <Dialog
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Create/ Edit User"}</DialogTitle>
        <DialogContent>
        <Grid >
          <Grid >
            <TextField  name="first_name" value={props.editUserObject !== undefined ? props.editUserObject['first_name']: null} label="First Name" variant="outlined" onChange={(e)=>{props.handleOnChage(e, props.editUserObject)}}/>
          </Grid>
          <Grid >
            <TextField style = {{marginTop:"15px"}} name="last_name"  value={props.editUserObject !== undefined ? props.editUserObject['last_name']: null} label="Last Name" variant="outlined" onChange={(e)=>{props.handleOnChage(e, props.editUserObject)}}/>
          </Grid>
          <Grid >
            <TextField style = {{marginTop:"15px"}} name="email"  value={props.editUserObject !== undefined ? props.editUserObject['email']: null} label="Email" variant="outlined" onChange={(e)=>{props.handleOnChage(e, props.editUserObject)}}/>
          </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button style = {{marginTop:"15px"}}  onClick={()=>{props.handleonSave(props.editUserObject)}} color="primary">
            Save
        </Button>
          <Button style = {{marginTop:"15px"}}  onClick={props.handleOnClose} color="primary" autoFocus>
            Cancel
        </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateEditUser;
