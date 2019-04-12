import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {NavLink, withRouter} from "react-router-dom";
import "./header.css";
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



class Navigation extends React.Component{
    state = {
        value: 0,
      };

      handleChange = (event, value) => {
        this.setState({ value });
      };

      
  render(){
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Paper className={classes.root} style={{backgroundColor:"hsl(231, 48%, 48%)"}}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <NavLink exact to="/"><Tab label="Home" /> </NavLink>
          <NavLink exact activeClassName={"active"} to="/aboutus"><Tab label="About Us" /> </NavLink>
          <NavLink exact  to="/services"><Tab label="Services" /> </NavLink>

        </Tabs>
      </Paper>
            <NavLink exact to="/signin"><Button color="inherit">Login</Button></NavLink>
            <NavLink exact to="/signup"><Button color="inherit">Sign Up</Button></NavLink>
            </Toolbar>
          </AppBar>
        </div>
      );

  }  
  
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Navigation);