import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/contact/100">Contact</Link>
                        </li>
                    </ul>
                </nav>
                {/* Outlet is the content section */}
                <Outlet></Outlet>
            </>
        </div>
    )
}

export default Layout