import React, { Component } from 'react';
import { Row, Jumbotron, Col, Button } from 'react-bootstrap';
import './Footer.css'

const footer = (props) => (
    <Row>
        <Row className="footer">
        <Row className="footer-block">
            <span className="footer-text">{props.footerText}</span>
        </Row>
        </Row>
    </Row>
);

export default footer;

