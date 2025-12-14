import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Sticky header effect
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Smooth scroll handler
    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu
        const element = document.querySelector(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="logo">
                    <img src={logo} alt="Sri Lakshmi Engineering" className="logo-img" />
                    <span>Sri Lakshmi <span>Engineering</span></span>
                </a>

                <button
                    className="mobile-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle Navigation"
                >
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {['home', 'about', 'products', 'services'].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} onClick={(e) => handleNavClick(e, `#${item}`)}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="btn-nav" onClick={(e) => handleNavClick(e, '#contact')}>
                            Get a Quote
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
