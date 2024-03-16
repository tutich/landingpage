import './Footer.css'

import facebook from '../../images/icon-facebook.svg';
import youtube from '../../images/icon-youtube.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';
import close from '../../images/logo-copy.svg'

function Footer () {
    return (
        <div className='footer'> 
          <footer className='py-10 px-5  '>
            <div className=" grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto">
              <div className='lg:justify-start lg:items-start'>
                <article>
                  <img className='block mx-auto p-2 ' src={close} alt=""  />
                </article>
                <article className='flex flex-wrap items-center justify-center p-6 gap-4 '>
                  <img className='' src={facebook} alt="" />
                  <img src={youtube} alt="" />
                  <img src={twitter} alt="" />
                  <img src={pinterest} alt="" />
                  <img src={instagram} alt="" />
                </article>
              </div>
                <article>
                 <ul className='text-center flex  flex-col items-center justify-center gap-2 lg:justify-start lg:items-start'>
                      <li className='text-white hover:text-green-500'><a href="#">About Us</a></li>
                      <li className='text-white hover:text-green-500'><a href="#">Contact</a></li>
                      <li className='text-white hover:text-green-500'><a href="#">Blog</a></li>
                  </ul>
               </article>
              
              <article className='mb-6 lg:m-0'>
                 <ul className='text-center flex  flex-col items-center justify-center gap-2 lg:justify-start lg:items-start'>
                      <li className='text-white hover:text-green-500'><a href="*">Career</a></li>
                      <li className='text-white hover:text-green-500'><a href="#">Support</a></li>
                      <li className='text-white hover:text-green-500'><a href="#">Privacy Policy</a></li>
                  </ul>
              </article>
              <div className='lg:m-0'>
                <article className='text-center'>
                 <button type='submit' className='btn  text-center'>Request Invite</button>
                </article>
                <article>
                 <p className='text-slate-400 text-center text-xl my-8'>© Easybank. All Rights Reserved</p>
                </article>
              </div>
            </div>
          </footer>

        </div>
    )
}

export default Footer;