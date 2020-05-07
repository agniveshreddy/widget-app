import React, { memo } from 'react';
import PropTypes from 'prop-types'; 

const CompB = memo(({value}) => {
    return(
        <input type='text' value={value}></input>
    )});
CompB.propTypes = {
    value: PropTypes.string
};
CompB.defaultProps = {
    value: ''
};
export default CompB;