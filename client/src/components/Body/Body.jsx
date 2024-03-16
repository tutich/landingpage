import './Body.css';

import bgMobile from '../../images/bg-intro-mobile.svg';
import bgDesktop from '../../images/bg-intro-desktop.svg';
import mockups from '../../images/image-mockups.png';
import online from '../../images/icon-online.svg';
import budgeting from '../../images/icon-budgeting.svg';
import Onboarding from '../../images/icon-onboarding.svg';
import API from '../../images/icon-api.svg';

function Body() {
    return (
        <div>
            <section className='flex flex-col-reverse lg:grid lg:grid-cols-2 lg:place-items-center'>

               <article className='px-5 py-6 text-center max-w-lg lg:text-left'>
                <h1 className='text-slate-800 text-3xl mb-6 lg:w-1/2'>Next generation digital banking</h1>
                 <p className='text-slate-900 text-sm mb-8 leading-relaxed opacity-75 lg:text-base'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
                      saving, budgeting, investing, and much more.
                 </p>
                 <button type='submit' className='btn'>Request Invite</button>
                </article>

                <article className='relative'>
                    <picture>
                        <source media="(min-width: 768px)" srcset={bgDesktop} />
                        <img src={bgMobile} alt="" className='w-full'/>
                    </picture>
                    <img src={mockups} alt="" className='absolute -top-32 lg:-right-32 ' />
                </article>

                
            </section>


            <section className='bg-gray-100 py-20 px-5 text-center lg:text-left'>
                <article className='max-w-7xl mx-auto mb-20'>
                <h2 className='text-3xl text-slate-800 mb-6'>Why choose Easybank?</h2>
                 <p className='lg:w-1/2'>We leverage Open Banking to turn your bank account into your financial hub.
                    Control your finances like never before.</p>
                </article>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto'>
                    <article>
                       <img src={online} alt="" className='block mx-auto mb-6 lg:inline' />
                        <h3 className=''>Online Banking </h3>
                        <p className='desc'>Our modern web and mobile applications allow you to keep
                            track of your finances wherever you are in the world.
                        </p>
                    </article>

                    <article>
                      <img src={budgeting} alt="" className='block mx-auto mb-6 lg:inline'  />
                        <h3>Simple Budgeting </h3>
                        <p className='desc'>See exactly where your money goes each month.
                            Receive notifications when you’re close to hitting your limits.
                        </p>
                    </article>

                    <article>
                       <img src={Onboarding} alt="" className='block mx-auto mb-6 lg:inline'  />
                        <h3>Fast Onboarding </h3>
                        <p className='desc'>We don’t do branches. Open your account in minutes online and
                            start taking control of your finances right away.
                        </p>
                    </article>

                    <article>
                       <img src={API} alt="" className='block mx-auto mb-6 lg:inline'  />
                        <h3>Open API</h3>
                        <p className='desc'> Manage your savings, investments, pension, and much more from one account.
                            Tracking your money has never been easier.
                        </p>
                    </article>
                </div>
            </section>

            
        </div>

    )
}

export default Body;