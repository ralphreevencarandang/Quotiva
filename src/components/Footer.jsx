import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = ()=>{

    return(
        <section className="max-container padding-x py-10 ">
                <footer className="text-center  ">
                    <div className="flex justify-center gap-4 py-4">

                        <Link to='https://www.facebook.com/aint.arar999'>
                            <FaFacebook className="text-3xl text-blue-700 hover:text-blue-600"/>
                        </Link>

                        <Link to='https://github.com/ralphreevencarandang'>
                            <FaGithub className="text-3xl hover:text-stone-700"/> 
                        </Link>

                        <Link to='https://www.linkedin.com/in/ralph-reeven-carandang-273877265/'>
                            <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-600"/>
                        </Link>
                    </div>
                    <p>© 2025 Arar. All rights reserved.</p>
                </footer>
        </section>
    );
}

export default Footer;