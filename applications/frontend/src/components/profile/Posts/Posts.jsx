import React from "react";
import './Posts.css';
import AddPostForm from "../Forms/AddPostForm";
import DeletePostForm from "../Forms/DeletePostForm";

const Posts = (props) => {
    let posts = props.posts.map((post_item) => {
        return (
            <div className="post-item">
                <div className="post-item-header">
                    <img src={require("../../../../static/frontend/img/camera_200.png").default} alt="" className="post-item-header-photo"/>
                    <div className="post-item-info">
                        <div className="post-item-author">
                            {post_item.author.first_name} {post_item.author.last_name}
                        </div>
                        <div className="post-item-created">
                            {post_item.created_at}
                        </div>
                    </div>
                    <div className="dropdown-arrow">
                        <img src={require("../../../../static/frontend/img/down-arrow.svg").default} alt=""/>
                        <div className="dropdown-child">
                            <DeletePostForm id={post_item.id} />
                        </div>
                    </div>
                </div>
                <div className="post-item-content">
                    {post_item.content}
                </div>
            </div>
        )
    });
    return(
        <div className="col-md-12">
            <AddPostForm requestType="post" />
            <div className="posts">
                {posts}
            </div>
        </div>
    )
}

export default Posts;