import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    pageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }): JSX.Element => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const openNav = () => {
        if (sidebarRef.current) {
            sidebarRef.current.style.width = "20rem";
            setIsSidebarOpen(true);
        }
    };

    const closeNav = () => {
        if (sidebarRef.current) {
            sidebarRef.current.style.width = "0";
            setIsSidebarOpen(false);
        }
    };


    useEffect(() => {
        const closeOffClick = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                closeNav();
            }
        }

        if (isSidebarOpen) {
            document.addEventListener('mousedown', closeOffClick);
        } else {
            document.removeEventListener('mousedown', closeOffClick);
        }

        return () => {
            document.removeEventListener('mousedown', closeOffClick);
        };
    }, [isSidebarOpen]);

    return (
        <header className="app-header">
            <button
                onClick={openNav}
                className="bars-btn"
                aria-label="menu"
            >
                <FontAwesomeIcon icon={faBars} className="bars-icon" />
            </button>
            <div ref={sidebarRef} className="sidebar">
                <div className="nav-list">
                    <button onClick={closeNav} className="close-btn" aria-label="close-menu">
                        <FontAwesomeIcon icon={faXmark} className="x-icon" />
                    </button>
                    <Link to="/" onClick={closeNav} className="page-link">Home</Link>
                    <Link to="/about" onClick={closeNav} className="page-link">About Me</Link>
                    <Link to="/experience" onClick={closeNav} className="page-link">Experience</Link>
                    <Link to="/projects" onClick={closeNav} className="page-link">Projects</Link>
                    <Link to="/photos" onClick={closeNav} className="page-link">Photos</Link>
                    <Link to="/art" onClick={closeNav} className="page-link">Art</Link>
                </div>
            </div>
            <div className="flex-spacer" />
            <h1 className="header-title">{pageTitle}</h1>
        </header>
    );
}

export default Header;
