import { NavLink,Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
 NavLink 
 
 const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const linkClass = ({isActive}) => {
        return isActive ? 'font-semibold' : '';
    }
    
    return (
        <section className="border-b-1 border-gray-300 w-full sticky ">
             <header className="flex justify-between py-5 items-center padding-x  max-container">
                <Link to="/" className="font-reenie text-4xl">Quotiva </Link>
                {/* Desktop Nav */}
                <nav className="hidden sm:flex gap-5 font-montserrat text-sm">
                    <NavLink to="/quotes" className={linkClass}>Quotes</NavLink>
                    <NavLink to="/inspiration" className={linkClass}>Inspiration</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                </nav>

                <button
                    className="sm:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={24} className="cursor-pointer"/> : <Menu size={24} className="cursor-pointer"/>}
                </button>

            </header>
             {/* Mobile Menu */}
             {menuOpen && (
                <nav className="sm:hidden flex flex-col gap-3 px-6 pb-4 font-montserrat text-sm bg-white ">
                    <NavLink to="/quotes" onClick={toggleMenu} className={linkClass}>Quotes</NavLink>
                    <NavLink to="/inspiration" onClick={toggleMenu} className={linkClass}>Inspiration</NavLink>
                    <NavLink to="/about" onClick={toggleMenu} className={linkClass}>About</NavLink>
                </nav>
            )}
        </section>
    );
}

export default Header;