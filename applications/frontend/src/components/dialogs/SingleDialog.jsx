import React from "react";

const SingleDialog = () =>{
    return (
        <main className="col-md-9">
            <div className="message-panel">
                <div className="back-btn">
                    <img src="icons/left-arrow.svg" alt="" className="left-arrow"/>
                        <div className="back-text">Назад</div>
                </div>
                <div className="dialog-author">
                    <div className="author-name">
                        Натали Портман
                    </div>
                    <div className="author-status">
                        online
                    </div>
                </div>
                <img src="img/camera_200.png" alt="" className="dialog-avatar"/>
            </div>
            <div className="message-list">
                <div className="dialog-message">
                    <img src="img/camera_200.png" alt="" className="dialog-message-avatar"/>
                        <div className="dialog-message-wrapper">
                            <div className="dialog-message-author">Натали</div>
                            <div className="dialog-message-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Doloribus nisi molestias nesciunt beatae, fuga voluptates velit alias quis
                                architecto voluptatum, mollitia distinctio repudiandae aspernatur incidunt. Repellendus
                                similique iure expedita nihil?
                            </div>
                        </div>
                </div>

                <div className="dialog-message">
                    <img src="img/camera_200.png" alt="" className="dialog-message-avatar"/>
                        <div className="dialog-message-wrapper">
                            <div className="dialog-message-author">Тамерлан</div>
                            <div className="dialog-message-text">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Doloribus nisi molestias nesciunt beatae, fuga voluptates velit alias quis
                                architecto voluptatum, mollitia distinctio repudiandae aspernatur incidunt. Repellendus
                                similique iure expedita nihil?
                            </div>
                        </div>
                </div>
            </div>
        </main>
    )
};

export default SingleDialog;