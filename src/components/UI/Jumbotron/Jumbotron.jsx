import React, { Component } from 'react';
import { Row, Jumbotron, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import  './Jumbotron.css';

const jumbotron = (props) => (
    <Row>
        <Col md={12} >
        <Jumbotron > 
            <h1>{props.title}</h1>
            <p>
                {props.content}
            </p>
            <p>
                <Button bsStyle="primary">Learn more</Button>
            </p>
        </Jumbotron>
        </Col>
    </Row>
);

export default jumbotron;

jumbotron.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

