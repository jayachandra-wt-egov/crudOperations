import React from "react";
import axios from 'axios';
import Header from './Header/Header';
import Grid from '@material-ui/core/Grid';

// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateEditUser from './CreateNewUser/CreateEditUser';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';



class TableData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      rowsPerPage: 0,
      tableHeader: ['First Name', 'Last Name', 'Email', 'Edit', 'Delete'],
      isOpen: false,
      userObject:{},
      editUserObject:{},
      index: null
    }
  }

  componentDidMount() {
    // fetch data from a url endpoint
    axios.get("https://reqres.in/api/users?page=2")
      .then(resp =>
        this.setState({ data: resp.data.data, rowsPerPage: resp.data.data.length })
      ).catch(resp =>
        console.log(resp.error)
      )
  }

  onHandleDelete=(row, index)=>{
    console.log('Hello Row', row);
    this.setState(prevState => ({
      data: prevState.data.filter((item, i) => i !== index)
    }));
  };

  onHandleEdit=(row, index)=>{
    this.setState({isOpen: true, editUserObject: row, index })
  }

  handleOnChage=(e, edituserObj)=>{
    console.log('<>><><>><<>', e.target.value, edituserObj);
    if(edituserObj === undefined) {
      const key = e.target.name;
      const userobj = {...this.state.userObject};
      userobj[key] = e.target.value;
      this.setState({ userObject: userobj});
    } else {
      const editUser_copy = {...this.state.editUserObject}
      const key = e.target.name;
      editUser_copy[key] = e.target.value;
      this.setState({editUserObject: editUser_copy})
    }
  }

  handleonSave=(edituserObj)=>{
    if(edituserObj === undefined) {
      const data_copy = [...this.state.data];
      data_copy.push(this.state.userObject);
      this.setState({data : data_copy, isOpen: false  });
    } else {
      const data_copy = [...this.state.data];
      data_copy[this.state.index] = this.state.editUserObject;
      this.setState({data: data_copy, isOpen: false})
    }
  }
  handleOnClose=()=>{
    this.setState({isOpen: false});
  }

  render() {
    const { data, rowsPerPage, tableHeader } = this.state;
    console.log(data , rowsPerPage, "APIResp"); 

    return (
      console.log('Redne, rrr', this.state, this.props.location.state),
      <>
      <Header/>
      <Grid container justify="flex-end">
      <Button container justify="flex-end" onClick={()=>{this.onHandleEdit()}} color="primary">Create New User</Button>
      </Grid>
      <CreateEditUser 
        open={this.state.isOpen}
         handleOnChage={this.handleOnChage} 
         handleonSave={this.handleonSave}
         handleOnClose={this.handleOnClose}
         editUserObject={this.state.editUserObject}
         userObject={this.state.userObject}
         data={this.state.data}
         index={this.state.index}
         />
      <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
      <TableHead>
            <TableRow>
              {tableHeader && tableHeader.map((column) => (
                <TableCell
                  // align={'right'}
                  style={{minWidth: '170px'}}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        <TableBody>
          {data && data.map((row, index) => (
            <TableRow >
              <TableCell>
                {row.first_name}
              </TableCell>
              <TableCell align="left">
                {row.last_name}
              </TableCell>
              <TableCell align="left">
                {row.email}
              </TableCell>
              <TableCell align="left">
                <CreateIcon onClick={()=>{this.onHandleEdit(row, index)}}/>
              </TableCell>
              <TableCell align="left">
              <DeleteForeverIcon onClick={()=>{this.onHandleDelete(row, index)}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              //count={rows.length}
             // rowsPerPage={rowsPerPage}
              //page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              // onChangePage={handleChangePage}
              // onChangeRowsPerPage={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter> */}
      </Table>
    </TableContainer>
    </>
    )
  }
}

export default TableData;