import React, { Component } from 'react';
import { Row, Grid, Panel } from 'react-bootstrap';
import {connect} from 'react-redux';

import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import CustomNavbar from '../../components/UI/Navbar/CustomNavbar';
import Carousel from '../../components/UI/Carousel/Carousel';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Login from '../../containers/Login/Login';
import Income from '../../containers/Income/Income';
import InfoPanel from '../../containers/InfoPanel/InfoPanel';

import * as action from '../../store/actions/index';

class Home extends Component {

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
    
    render(){

        let homePage = '';
        let content = '';
        if(!this.props.login){
          homePage = ( <div>                     
                        <Carousel />     
                        <br/>
                        <InfoPanel/>
                   
                    </div>
          );
    
          //content = <Login />;
        }else{
          homePage = <Jumbotron title={this.state.jumbotron.title} content={this.state.jumbotron.content}/>;
          content= <Income />;
        }

        return(
            <div>
            {homePage}                 
            <Grid>
              <Row className="container">              
                {content}
              </Row>            
            </Grid>
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
  
  
  export default connect(mapStateToProps)(Home);