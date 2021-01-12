import React from "react";
import './Dialogs.css'

const Dialogs = () => {
    return (
        <main className="col-md-9">
            <div className="container">
                <div className="row">
                    <a href="#" className="message-link">
                        <div className="message">
                            <img src={require("../../../static/frontend/img/camera_200.png")} alt="" className="message-sender-avatar"/>
                                <div className="message-content">
                                    <div className="message-author">
                                        Тамерлан Токбаев
                                    </div>
                                    <div className="message-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, et quam! Modi odit
                                        quis esse aliquam voluptate beatae quisquam cupiditate numquam. Fugit accusamus
                                        nulla quod sequi cupiditate molestiae tempora! Laudantium.
                                    </div>
                                </div>
                        </div>
                    </a>
                    <a href="#" className="message-link">
                        <div className="message">
                            <img src={require("../../../static/frontend/img/camera_200.png")} alt="" className="message-sender-avatar"/>
                            <div className="message-content">
                                <div className="message-author">
                                    Тамерлан Токбаев
                                </div>
                                <div className="message-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, et quam! Modi odit
                                    quis esse aliquam voluptate beatae quisquam cupiditate numquam. Fugit accusamus
                                    nulla quod sequi cupiditate molestiae tempora! Laudantium.
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="message-link">
                        <div className="message">
                            <img src={require("../../../static/frontend/img/camera_200.png")} alt="" className="message-sender-avatar"/>
                            <div className="message-content">
                                <div className="message-author">
                                    Тамерлан Токбаев
                                </div>
                                <div className="message-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, et quam! Modi odit
                                    quis esse aliquam voluptate beatae quisquam cupiditate numquam. Fugit accusamus
                                    nulla quod sequi cupiditate molestiae tempora! Laudantium.
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="message-link">
                        <div className="message">
                            <img src={require("../../../static/frontend/img/camera_200.png")} alt="" className="message-sender-avatar"/>
                            <div className="message-content">
                                <div className="message-author">
                                    Тамерлан Токбаев
                                </div>
                                <div className="message-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, et quam! Modi odit
                                    quis esse aliquam voluptate beatae quisquam cupiditate numquam. Fugit accusamus
                                    nulla quod sequi cupiditate molestiae tempora! Laudantium.
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Dialogs;