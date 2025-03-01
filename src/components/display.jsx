import React, { Component } from 'react';

const Display = ({value}) => {
    return <div className="display" role="status">{value}</div>;
};

export default Display;