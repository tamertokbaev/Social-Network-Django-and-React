import './Profile.css'
import Profile from "./Profile";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profiles[0]
    }
};

// If you don't specify the second argument to connect(), your component will receive dispatch by default.
const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;