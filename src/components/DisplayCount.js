import React from 'react';
import { connect } from 'react-redux';

function DisplayCount() {
    return (
        <div style={{ fontSize: '36px' }}>
            10
        </div>
    )
}

export default connect()(DisplayCount);