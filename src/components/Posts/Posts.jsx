import React from 'react';
import { connect } from 'react-redux';
import { getPosts, resetPosts } from '../../actions/postsActions';
import CustomTable from './CustomTable.jsx';
import {MAX_ROWS, ROWS_PER_PAGE, INITIAL_START, INITIAL_END} from '../../constants'

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            paginatedPosts:[],
            rowCount:{
                start: INITIAL_START,
                end: INITIAL_END
            }
        }
        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.paginatePosts =  this.paginatePosts.bind(this);
    }
    onNext(){
        const { start, end } = this.state.rowCount;
        if(end < MAX_ROWS)
            this.paginatePosts(start + ROWS_PER_PAGE, end + ROWS_PER_PAGE);
    }
    onPrev(){
        const { start, end } = this.state.rowCount;
        if(start > ROWS_PER_PAGE-1)
            this.paginatePosts(start-ROWS_PER_PAGE, end-ROWS_PER_PAGE);
    }
    paginatePosts(start, end){
        const {posts} = this.props;
        let i = start + 1;
        const newPaginatedPosts=[];
        while(i <= end){
            newPaginatedPosts.push(posts[i-1]);
            i++;
        }
        this.setState({rowCount: {start: start, end: end}, paginatedPosts: newPaginatedPosts});
    }
    componentDidMount(){
        this.props.dispatch(getPosts('token'));
    }
    componentDidUpdate(){
        const { paginatedPosts }= this.state;
        const { posts }= this.props;
        if(paginatedPosts.length === 0 && posts.length === MAX_ROWS)
            this.paginatePosts(INITIAL_START, INITIAL_END);
    }
    componentWillUnmount(){
        this.props.dispatch(resetPosts(''));
    }
    render(){
        const { paginatedPosts }= this.state;
        return(
            <>
                <div>
                    <button onClick={this.onPrev}>prev</button>
                    <button onClick={this.onNext}>next</button>
                </div>
                <CustomTable paginatedPosts={paginatedPosts}/>
            </>
            
        )
    };
}
const mapStateToProps = posts => posts;

export default connect(mapStateToProps)(Posts);
