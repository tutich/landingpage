import './Article.css';
import currency from '../../images/image-currency.jpg';
import restaurant from '../../images/image-restaurant.jpg';
import plane from '../../images/image-plane.jpg';
import confetti from '../../images/image-confetti.jpg';

function Articles() {
    return (
        <div className='art'>
         <h2 className='latest'>Latest Articles</h2>

         <article className='container'> 
             <div className="card">
                 <img src={currency} alt="" />
                 <p className='para'>By Claire Robinson</p>
                 <h3 className='intro'>Receive money in any currency with no fees</h3>
                 <p className='para'> The world is getting smaller and we’re becoming more mobile.
                     So why should you be forced to only receive money in a single …
                 </p>
             </div>
             <div className="card">
                 <img src={restaurant} alt="" />
                 <p className='para'>By Wilson Hutton</p>
                 <h3 className='intro'>Treat yourself without worrying about money</h3>
                 <p className='para'> Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.
                     That means you …
                 </p>
             </div>
             <div className="card">
                 <img src={plane} alt="" />
                 <p className='para'>By Wilson Hutton</p>
                 <h3 className='intro'>Take your Easybank card wherever you go</h3>
                 <p className='para'> We want you to enjoy your travels. This is why we don’t charge any fees on
                     purchases while you’re abroad. We’ll even show you …
                 </p>
             </div>
             <div className="card">
                 <img src={confetti} alt="" />
                 <p className='para'>By Claire Robinson</p>
                 <h3 className='intro'>Our invite-only Beta accounts are now live!</h3>
                 <p className='para'> After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                     It’s easy to request an invite through the site ...
                 </p>
             </div>
         </article>

                 
           
        </div>
    )
}

export default Articles;