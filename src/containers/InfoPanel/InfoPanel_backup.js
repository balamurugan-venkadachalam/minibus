import React, { Component } from 'react';
import { Row, Grid, Panel, Col } from 'react-bootstrap';


const infoPanel = (props) => (
    <div>
        <Grid>
            <Row className="show-grid">
                <Col xs={6} md={4}>
                    <Panel bsStyle="info">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                </Col>
                <Col xs={6} md={4}>
                    <Panel bsStyle="info">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>Panel content</Panel.Body>
                    </Panel>

                </Col>
                <Col xsHidden md={4}>
                    <Panel bsStyle="info">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>Panel content</Panel.Body>
                    </Panel>

                </Col>
            </Row>
        </Grid>

    </div>
);

export default infoPanel;