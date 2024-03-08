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
                    <li onClick={handleLinkClick}><a href="#">Home</a></li>
                    <li onClick={handleLinkClick} ><a href="#">About</a></li>
                    <li onClick={handleLinkClick} ><a href="#">Contact</a></li>
                    <li onClick={handleLinkClick}><a href="#">Blog</a></li>
                    <li onClick={handleLinkClick} ><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className="request"><button type='submit'>Request Invite</button></div>
            <div className="nav-icon" onClick={handleToggleIcon}>
            { toggleIcon ? <HiX size={28}/> : <FaBars size={28}/>}
            </div>
        </div>
        </div>
    )
}

export default Navbar;