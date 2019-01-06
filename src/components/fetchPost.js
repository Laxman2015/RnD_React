import React, { Component } from 'react';
import {connect} from 'react-redux';
import {frtchPosts} from '../actions/fetchPostAction';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';

class FetchPost extends Component {
    componentDidMount(){
        this.props.frtchPosts();
    }
    renderPosts(){
        return _.map(this.props.posts, posts =>{
            return(
                <li className="list-group-item" key={posts.id}>{posts.title}</li>
            )
        })
    }
    render() { 
        console.log(this.props.posts);
        return ( 
        <div>
            <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                Post New Data
                </Link>
            </div>
            <h3>Post Data</h3>
            <ul className="list-group">
            {this.renderPosts()}
            </ul>
        </div> 
        );
    }
}
function mapStateToProps(state){
   return {posts:state.posts}
}
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({frtchPosts:frtchPosts}, dispatch);
// }
 
export default connect(mapStateToProps, {frtchPosts})(FetchPost);