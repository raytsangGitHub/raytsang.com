import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // or use SVGs if you prefer

function TopBar()
{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const menuRef = useRef();

    useEffect(() =>
    {
        const handleClickOutside = (event) =>
        {
            if (menuRef.current && !menuRef.current.contains(event.target))
            {
                setIsOpen(false);
            }
        };

        if (isOpen)
        {
            document.addEventListener("mousedown", handleClickOutside);
        } else
        {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () =>
        {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


    const navLinks = (
        <>
            <li onClick={() => setIsOpen(false)}><Link to="/skills" className="hover:underline hover:text-yellow-300">Skills</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/Work-Experiences" className="hover:underline hover:text-yellow-300">Experiences</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/Projects" className="hover:underline hover:text-yellow-300">Projects</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/Resume" className="hover:underline hover:text-yellow-300">Resume</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/ContactMe" className="hover:underline hover:text-yellow-300">Contact</Link></li>
        </>
    );

    return (
        <header className="bg-gradient-to-r from-blue-500 via-purple-300 to-pink-200 text-white px-4 py-3 flex justify-between items-center">
            <Link to="/" className="font-semibold text-lg whitespace-nowrap hover:underline hover:text-yellow-300">
                Raymond M. Tsang | Software Engineer
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
                <ul className="flex space-x-8 list-none">
                    {navLinks}
                </ul>
            </nav>

            {/* Mobile Hamburger */}
            <button onClick={toggleMenu} className="md:hidden text-white">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <ul ref={menuRef} className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-gradient-to-r from-blue-500 via-purple-300 to-pink-200 p-2 space-y-2 text-white flex flex-col md:hidden z-50 rounded-lg shadow-lg">
                    {navLinks}
                </ul>
            )}
        </header>
    );
}

export default TopBar;