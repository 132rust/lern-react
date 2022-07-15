import React from "react"
import Classes from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={Classes.navbar}>
            <nav className={Classes.nav_links}>
                <ul>
                    <li><a href="#">My profile</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">Friends</a></li>
                    <li><a href="#">Communities</a></li>
                    <li><a href="#">Photo</a></li>
                    <li><a href="#">Music</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;