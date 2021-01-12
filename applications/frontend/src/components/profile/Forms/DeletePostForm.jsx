import React from 'react';
import axios from 'axios'
import {connect} from "react-redux";
import {deletePostActionCreator} from "../../../redux/profile-reducer";

class DeletePostForm extends React.Component{
    handleDelete = (event) => {
        event.preventDefault();
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            "Method": "POST"
        };
        axios.delete(`http://127.0.0.1:8000/api/delete/${this.props.id}`)
            .then(res => {
                if(res.status === 204){
                    this.props.deletePost(this.props.id);
                }
            }
        )
    }

    render() {
        return <a onClick={this.handleDelete}>Удалить запись</a>
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            let action = deletePostActionCreator(id);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeletePostForm);