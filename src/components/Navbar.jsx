import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiShield, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/scam-types', label: 'Scam Types' },
    { to: '/recovery', label: 'Recovery Guide' },
    { to: '/red-flags', label: 'Red Flags' },
    { to: '/report', label: 'Report a Scam' },
    { to: '/contact', label: 'Get Help' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    useEffect(() => {
        setOpen(false)
    }, [location])

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <Link to="/" className="navbar__logo">
                    <FiShield className="navbar__logo-icon" />
                    <span>Scam<strong>vy</strong></span>
                </Link>

                <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
                    {navLinks.map(l => (
                        <Link
                            key={l.to}
                            to={l.to}
                            className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn btn-primary navbar__cta">Free Consultation</Link>
                </nav>

                <button
                    className="navbar__hamburger"
                    onClick={() => setOpen(v => !v)}
                    aria-label="Toggle menu"
                    id="hamburger-btn"
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </header>
    )
}
