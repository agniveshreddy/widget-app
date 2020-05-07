import React from 'react';

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
                { paginatedPosts && paginatedPosts.map(item => {
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
export default CustomTable;