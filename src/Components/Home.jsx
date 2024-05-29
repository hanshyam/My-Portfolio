import "../Css/Home.css"
import Header from "./Header"

const Home = () => {
    return(
        <>
          <div className="home">
             <Header/>
             <div className="home-other-parts">
                 <div className="home-info">
                  <h2>I'm<span> Ghanshyam Patidar</span></h2>
                 <h2>Frontend developer &<br/>Problem Solver</h2>
                 </div>
             </div>
          </div>
        </>
    )
}
export default Home