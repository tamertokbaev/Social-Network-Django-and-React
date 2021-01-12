import React from "react";
import './Aside.css'
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <aside className="col-md-3">
            <nav className="aside_menu">
                <ul className="nav_menu">
                    <li className="menu_item"><NavLink to="/profile" className="item_link">Profile</NavLink></li>
                    <li className="menu_item"><NavLink to="#" className="item_link">News</NavLink></li>
                    <li className="menu_item"><NavLink to="/dialogs" className="item_link">Dialogs</NavLink></li>
                    <li className="menu_item"><NavLink to="#" className="item_link">Friends</NavLink></li>
                    <li className="menu_item"><NavLink to="#" className="item_link">Groups</NavLink></li>
                    <li className="menu_item"><NavLink to="#" className="item_link">Music</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Aside;