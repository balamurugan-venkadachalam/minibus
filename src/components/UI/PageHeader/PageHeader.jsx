import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import PropTypes from 'prop-types';

const pageHeader = (props) => (
    <PageHeader>
        {props.pageTitle} <small>{props.pageSubTitle}</small>
    </PageHeader>
);

export default pageHeader;

pageHeader.propTypes = {
    pageTitle: PropTypes.string.isRequired    
}


