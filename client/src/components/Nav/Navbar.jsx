import '../Nav/Navbar.css';
import close from '../../images/logo.svg'
import { FaBars } from "react-icons/fa6";
import { HiX } from "react-icons/hi";
import { useState } from 'react';


function Navbar() {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = (e) => {
        e.preventDefault();
        setToggleIcon(!toggleIcon);
    };

    const handleLinkClick = () => {
        setToggleIcon(false);
      };
    return (
        <div>
        <div className="nav">
            <div className="nav-img"><img src={close} alt="" /></div>
            <div className="links">
                <ul className={`link ${toggleIcon ? "active" : ""}`}>
                    <li onClick={handleLinkClick}><a className="nav-link" href="#">Home</a></li>
                    <li onClick={handleLinkClick} ><a className="nav-link" href="#">About</a></li>
                    <li onClick={handleLinkClick} ><a className="nav-link" href="#">Contact</a></li>
                    <li onClick={handleLinkClick}><a className="nav-link" href="#">Blog</a></li>
                    <li onClick={handleLinkClick} ><a className="nav-link" href="#">Careers</a></li>
                </ul>
            </div>
            <div className="requestt hidden lg:block"><button type='submit' className='btn'>Request Invite</button></div>
            <div className="nav-icon" onClick={handleToggleIcon}>
            { toggleIcon ? <HiX size={28}/> : <FaBars size={28}/>}
            </div>
        </div>
        </div>
    )
}

export default Navbar;