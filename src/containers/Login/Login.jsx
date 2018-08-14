import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, ControlLabel, FormControl, Checkbox} from 'react-bootstrap';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { Row, Grid, Panel } from 'react-bootstrap';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import * as action  from '../../store/actions/index';


class Login extends Component {

    state = {
        email:null,
        password:null
    }

    submitForm=(event)=>{
        console.log('submitForm', this.state);
        event.preventDefault();
        this.props.login(this.state.email, this.state.password);
    }

    handleChange=(e)=>{
        console.log('handleChange', this.state);
        const updatedState = {
            ...this.state,
            [e.target.name]: e.target.value
        }
        this.setState(updatedState);
        console.log(this.state);
      }

    render (){
        const loginSuccess = this.props.login ? <Redirect to="/income" /> : null;

        return (
            <Grid>
            <Row className="container">  
            {loginSuccess}

            <PageHeader pageTitle="Login" />
            <Form horizontal onSubmit={(event)=>this.submitForm(event)}>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl name='email' type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl 
                            name='password' 
                            type="password" 
                            placeholder="Password" 
                            value={this.state.password} 
                            onChange={this.handleChange} />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" >Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
            </Row>            
            </Grid>

        );
    }
}

const mapStateToProps=(state)=>{
    return {
      login: state.auth.login,
      token: state.auth.authToken,
      loading: state.auth.loading
    }
  }
  
  const mapDispatchToProps = (dispatch)=> {
    return {
      login: (userName, password)=> dispatch(action.login(userName, password))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);

