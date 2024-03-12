import './Body.css';

import bgMobile from '../../images/image-mockups.png';
import bgDesktop from '../../images/image-mockups.png';
import online from '../../images/icon-online.svg';
import budgeting from '../../images/icon-budgeting.svg';
import Onboarding from '../../images/icon-onboarding.svg';
import API from '../../images/icon-api.svg';

function Body() {
    return (
        <>
         <section className="int">
             <div className="desktop"><img className='desk' src={bgDesktop} alt="bg" /></div>
             <div className="introduc">
                 <h2 className='home-title'>Next generation digital banking</h2>
                 <p className='home-text'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
                      saving, budgeting, investing, and much more.
                 </p>
                 <div className="request"><button type='submit'>Request Invite</button></div>
             </div>
             
         </section>

         <section className='content'>
             <div className="sect">
                 <h2 className='section-title'>Why choose Easybank?</h2>
                 <p className='section-text'>We leverage Open Banking to turn your bank account into your financial hub.
                    Control your finances like never before.</p>
             </div>
                <div className="cont">
                    <div className="api">
                        <img src={online} alt="" />
                        <h2>Online Banking </h2>
                        <p>Our modern web and mobile applications allow you to keep
                            track of your finances wherever you are in the world.
                        </p>
                    </div>
                    <div className="api">
                        <img src={budgeting} alt="" />
                        <h2>Simple Budgeting </h2>
                        <p>See exactly where your money goes each month.
                            Receive notifications when you’re close to hitting your limits.
                        </p>
                    </div>
                    <div className="api">
                        <img src={Onboarding} alt="" />
                        <h2>Fast Onboarding </h2>
                        <p>We don’t do branches. Open your account in minutes online and
                            start taking control of your finances right away.
                        </p>
                    </div>
                    <div className="api">
                        <img src={API} alt="" />
                        <h2>Open API</h2>
                        <p> Manage your savings, investments, pension, and much more from one account.
                            Tracking your money has never been easier.
                        </p>
                    </div>
                </div>
           </section>
            
            
                
                
        </>

    )
}

export default Body;