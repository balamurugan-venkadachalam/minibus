import React, { Component } from 'react';
import { Row, Grid, Panel } from 'react-bootstrap';
import {connect} from 'react-redux';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Jumbotron from './components/UI/Jumbotron/Jumbotron';
import Footer from './components/UI/Footer/Footer';
import jumbotron from './components/UI/Jumbotron/Jumbotron';
import CustomNavbar from './components/UI/Navbar/CustomNavbar';
import Carousel from './components/UI/Carousel/Carousel';
import PageHeader from './components/UI/PageHeader/PageHeader';
import Login from './containers/Login/Login';
import Income from './containers/Income/Income';
import InfoPanel from './containers/InfoPanel/InfoPanel';

import * as action from './store/actions/index';
import './App.css';
import Home from './containers/home/home';
import Logout from './containers/Logout/Logout';

class App extends Component {
  state = {
      navbar:{
        navbarBand: 'My Bus Service'
      },
      jumbotron: {
        title: 'My Bus Service',
        content: 'Connect All Remote Village'
      },
      pageTitles: {
        incomePage: 'Income',
        expensePage: 'Expense',
        adminPage: 'Today Collection'
      },
      footer: {
        text: 'Copyright 2018 by My bus service. All Rights Reserved.'
      },
      showHome: false
  }

  logOut=()=>{
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    

    return (
      <div className="App">
        <Row className="container-fluid">
        <CustomNavbar navbarBand = {this.state.navbar.navbarBand}/>
        
        <Switch> 
            <Route path="/about" exact render={ ()=> <h2>React developer community</h2> }/>    
            <Route path="/login" exact component ={Login}/>
            <Route path="/home" exact component ={Home} />
            <Route path="/income" exact component ={Income} />
            <Route path="/logout" exact component ={Logout} />
            <Route path="/" exact component ={Home} />
        </Switch>
         <Footer footerText={this.state.footer.text} />
        </Row>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    login: state.auth.login,
    token: state.auth.authToken
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    logout: ()=> dispatch(action.logout())
  }
}


export default connect(mapStateToProps)(App);
