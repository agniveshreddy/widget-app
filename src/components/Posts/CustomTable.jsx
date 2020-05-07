import React from 'react';
import PropTypes from 'prop-types';

const CustomTable = ({paginatedPosts}) =>{
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
            </thead>
            <tbody> 
                { (paginatedPosts.length > 0) && paginatedPosts.map(item => {
                const { id, title, body } = item;
                return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>)
                })}
            </tbody>
        </table>
    )
};
CustomTable.propTypes = {
    paginatedPosts: PropTypes.array
};
CustomTable.defaultProps = {
    paginatedPosts: []
};
export default CustomTable;