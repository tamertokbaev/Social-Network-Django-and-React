import React from "react";
import './Profile.css'
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <main className="col-md-9">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="profile_photo">
                            <img src={require("../../../static/frontend/img/camera_200.png").default}/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="user-info-wrapper">
                            <div className="user-full-name">
                                {props.profile.username}
                            </div>
                            <div className="user-status">
                                online
                            </div>
                        </div>
                    </div>
                    <PostsContainer/>
                </div>
            </div>
        </main>
    )
}

export default Profile;