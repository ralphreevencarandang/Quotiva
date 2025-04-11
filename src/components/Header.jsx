import { NavLink,Link } from "react-router-dom";

 NavLink 
 
 const Header = () => {

    const linkClass = ({isActive}) => {
        return isActive ? 'font-semibold' : '';
    }
    
    return (
        <section className="border-b-1 border-gray-300 w-full sticky ">
             <header className="flex justify-between py-5 items-center padding-x  max-container">
                <Link to="/" className="font-reenie text-4xl">Quotiva </Link>
                <nav className="hidden sm:flex gap-5 font-montserrat text-sm  ">
                        <NavLink to="/quotes" className={linkClass}>Quotes</NavLink>
                        <NavLink to="/inspiration" className={linkClass}>Inspiration</NavLink>
                        <NavLink to="/about" className={linkClass}>About</NavLink>
                </nav>
            </header>
        </section>
    );
}

export default Header;