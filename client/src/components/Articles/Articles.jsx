import './Article.css';
import currency from '../../images/image-currency.jpg';
import restaurant from '../../images/image-restaurant.jpg';
import plane from '../../images/image-plane.jpg';
import confetti from '../../images/image-confetti.jpg';

function Articles() {
    return (
        <div className='art'>

            <section className='py-20 px-5 max-w-7xl mx-auto'>
              <h2 className='text-center lg:text-left'>Latest Articles</h2>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>

                <article className='rounded-lg overflow-hidden'>
                   <img src={currency} alt="" className='rounded-t-lg w-full lg:w-72 lg:h-48 object-cover' />
                    <article className='p-8 bg-white shadow'>
                    <p className=''>By Claire Robinson</p>
                     <h3 className=''>Receive money in any currency with no fees</h3>
                     <p className=''> The world is getting smaller and we’re becoming more mobile.
                         So why should you be forced to only receive money in a single …
                     </p>
                    </article>
                </article>

                <article className='rounded-lg overflow-hidden '>
                 <img src={restaurant} alt="" className='rounded-t-lg w-full lg:w-72 object-cover' />
                    <article className='p-8 bg-white shadow '>
                     <p className=''>By Wilson Hutton</p>
                     <h3 className=''>Treat yourself without worrying about money</h3>
                     <p className=''> Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.
                         That means you …
                     </p>
                    </article>
                </article>

                <article className='rounded-lg overflow-hidden'>
                 <img src={plane} alt="" className='rounded-t-lg w-full lg:w-72 object-cover' />
                    <article className='p-8 bg-white shadow '>
                     <p className=''>By Wilson Hutton</p>
                     <h3 className=''>Take your Easybank card wherever you go</h3>
                     <p className=''> We want you to enjoy your travels. This is why we don’t charge any fees on
                         purchases while you’re abroad. We’ll even show you …
                     </p>
                    </article>
                </article>

                <article className='rounded-lg overflow-hidden'>
                 <img src={confetti} alt="" className='rounded-t-lg w-full lg:w-72 object-cover' />
                    <article className='p-8 bg-white shadow '>
                     <p className=''>By Claire Robinson</p>
                     <h3 className=''>Our invite-only Beta accounts are now live!</h3>
                     <p className=''> After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                         It’s easy to request an invite through the site ...
                     </p>
                    </article>
                </article>
              </div>
            </section>
         
           
        </div>
    )
}

export default Articles;