import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Layout(props) {
    return (
        <div>
            <header>
                <Link to={"/users"}>back to users</Link>
                <div style={{height: "10px"}}></div>
            </header>
            <Outlet />
            <footer>new-m5h3</footer>
        </div>
    );
}

export default Layout;