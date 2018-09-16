import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import {theme} from './Theme';

//import { Layout, Header, Drawer, Navigation, Content, HeaderRow, Grid, Cell } from 'react-mdl';

import About from './components/About';
import Home from './components/Home';

import {
  Button,
  colors,
  createMuiTheme,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  MuiThemeProvider,
  Typography} from '@material-ui/core';

const RouteHideDrawer = ({ component: Component, ...rest }) => (
  <Route {...rest} render={() => {
    if (document.querySelector('.mdl-layout__drawer')) {
      document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
      document.querySelector('.mdl-layout__drawer').classList.remove('is-visible');
    }
    return <Component/>
  }}/>
)

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  icon: {
    marginRight: theme.spacing.unit,
  },
};

export default class App extends Component{

  constructor(){
    super();

    this.state = {
      open: false,
    };
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render(){
    const { open } = this.state;


    return(
      <MuiThemeProvider theme={theme}>

    {/*<Router>
    <Layout fixedHeader>
      <Header title="PWA">
        <HeaderRow title="PWA"></HeaderRow>
        <HeaderRow>
          a
        </HeaderRow>
        <HeaderRow>
          <p>v</p>
        </HeaderRow>
      </Header>
      <Drawer title="PWA">
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Navigation>
      </Drawer>
      <Content>
        <RouteHideDrawer exact path="/" component={ Home } />
        <RouteHideDrawer path="/about" component={ About } />
      </Content>
    </Layout>
  </Router>*/}
        <div className={styles.root}>
          <CssBaseline />
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography variant="display1" gutterBottom>
            Material-UI
          </Typography>
          <Typography variant="subheading" gutterBottom>
            example project
          </Typography>
          <Button variant="raised" color="secondary" onClick={this.handleClick}>
            <Icon className={styles.icon}>fingerprint</Icon>
            Super Secret Password
          </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}
/*
export default () => (

  
);
*/