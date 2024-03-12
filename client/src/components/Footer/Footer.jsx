import './Footer.css'

import facebook from '../../images/icon-facebook.svg';
import youtube from '../../images/icon-youtube.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';
import close from '../../images/logo.svg'

function Footer () {
    return (
        <div className='footer'> 
          <div className="top">
              <div className="social">
                  <div className="nav-img"><img className='nav-img-footer' src={close} alt="" style= {{ filter: 'brightness(0) invert(1)' }} /></div>
                  <div className="iconss">
                      <img className='iconn' src={facebook} alt="" />
                      <img src={youtube} alt="" />
                      <img src={twitter} alt="" />
                      <img src={pinterest} alt="" />
                      <img src={instagram} alt="" />
                  </div>
              </div>
              <div className="about">
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
              </div>
              <div className="career">
                  <ul>
                    <li><a href="*">Career</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
              </div>
          </div>

          <div className="rights">
              <div className="request"><button type='submit'>Request Invite</button></div>
              <p className='all'>© Easybank. All Rights Reserved</p>
          </div>
        </div>
    )
}

export default Footer;