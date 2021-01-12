import React from "react";
import Aside from "./Aside";
import Route from "react-router-dom/es/Route";
import './Main.css'
import ProfileContainer from "./profile/ProfileContainer";
import Dialogs from "./dialogs/Dialogs";

const Main = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <Aside/>
                    <Route path={'/profile'} render={() => <ProfileContainer/>} />
                    <Route exact path={'/dialogs'} render={() => <Dialogs />} />
                </div>
            </div>
        </section>
    )
}

export default Main;