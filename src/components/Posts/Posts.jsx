import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postsActions';

const Posts = ({dispatch, posts = []}) => {
    useEffect(() => {
        dispatch(getPosts('token'));
    },[]);

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
                {posts.map(item => {
                const { id, title, body } = item;
                return (<tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>)
                })}
            </tbody>
        });
        </table>
    )};
const mapStateToProps = posts => posts;

export default connect(mapStateToProps)(Posts);
