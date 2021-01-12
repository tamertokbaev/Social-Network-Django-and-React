import React from 'react';
import './Posts.css';
import {addPostActionCreator, setPostsActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import axios from 'axios';
import {withRouter} from "react-router-dom";

class PostsContainer extends React.Component {
    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/')
            .then(
                response => {
                    let posts = [];
                    response.data.map((post) => {
                        posts.push({
                            id: post.id,
                            author: {
                                avatar: post.author.avatar,
                                first_name: post.author.user.first_name,
                                last_name: post.author.user.last_name
                            },
                            content: post.content,
                            likes: post.likes,
                            views: post.views,
                            created_at: post.created_at
                        });
                    });
                    this.props.setPosts(posts);
                }).catch(err => {
            console.log(err)
        });
    }

    render() {
        return (
            <Posts posts={this.props.posts}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPosts: (posts) => {
            dispatch(setPostsActionCreator(posts))
        }
    }
}


let WithURLDataContainer = withRouter(PostsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainer);
