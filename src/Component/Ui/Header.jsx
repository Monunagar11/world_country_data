import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <div className="container">
                <div className="nav-grid">
                    <div className="logo">
                        <NavLink to="/">
                            <h1>WorldDT</h1>
                        </NavLink>
                    </div>

                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <IoMdMenu className="h-icon" />
                    </div>

                    <nav className={isMenuOpen ? "active" : ""}>
                        <ul>
                            <li>
                                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="about" onClick={closeMenu}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="country" onClick={closeMenu}>Country</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact" onClick={closeMenu}>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
