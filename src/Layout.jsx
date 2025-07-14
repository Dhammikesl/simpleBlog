import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="layout">
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout