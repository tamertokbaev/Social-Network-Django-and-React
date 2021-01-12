import React from 'react';
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import axios from 'axios';


class AddPostForm extends React.Component {
    textArea = React.createRef();
    handleSubmit = (event, requestType) => {
        event.preventDefault();
        let text = this.textArea.current.value;
        const postObj = {
            content: text,
            author: 1
        };
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";

        if (requestType === "post") {
            axios.post("http://127.0.0.1:8000/api/create/", postObj)
                .then(res => {
                    if (res.status === 201) {
                        let post = {
                            id: res.data.id,
                            author: {
                                avatar: res.data.author.avatar,
                                first_name: res.data.author.user.first_name,
                                last_name: res.data.author.user.last_name
                            },
                            content: res.data.content,
                            likes: res.data.likes,
                            views: res.data.views,
                            created_at: res.data.created_at
                        };
                        this.props.addPost(post);
                    }
                })
        }
    }

    render() {
        return (
            <form className="post-add" onSubmit={event => this.handleSubmit(event, this.props.requestType)}>
                <textarea ref={this.textArea} className="post-add-textarea"/>
                <button className="post-add-submit" type="submit" onClick={this.addPost}>Опубликовать</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            let action = addPostActionCreator(post);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);