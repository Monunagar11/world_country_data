import { NavLink } from "react-router-dom";

import { IoMdMenu } from "react-icons/io";

export const Header= ()=>{
    
    return(
        <header>
            <div className="container">
            <div className="nav-grid grid">
                <div className="logo">
                    <NavLink to="/">
                        <h1>WorldDT</h1>
                    </NavLink>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="country">Country</NavLink>
                        </li>
                        <li>
                            <NavLink to="contact">Contact</NavLink>
                        </li>
                        
                    </ul>
                        <div className="hamburger-menu"><IoMdMenu /></div>
                </nav>
            </div>
            </div>
        </header>
    )
}