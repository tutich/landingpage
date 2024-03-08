import bgMobile from '../../images/image-mockups.png';
import bgDesktop from '../../images/bg-intro-desktop.svg';

function Body() {
    return (
        <>
         <div className="mobile"><img src={bgMobile} alt="bg" /></div>
         <h2>Next generation digital banking</h2>
         <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
              saving, budgeting, investing, and much more.
         </p>
         <div className="request"><button type='submit'>Request Invite</button></div>
        </>
    )
}

export default Body;