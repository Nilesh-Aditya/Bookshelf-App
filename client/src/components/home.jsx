import { useNavigate } from "react-router";
import home_banner from "../img/home-banner.jpg";
import arrow from "../img/arrow.svg";
import '../css/Home.css'
import Navbar from "./navbar";
import img_99 from '../img/img_bg_2.jpg'

const Home = () => {
    let navigate = useNavigate();

    return ( 
        <>
            <Navbar />
            <div className="Home">
                <div className="home-text">
                    <h2>Welcome To BookShelf App</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores cum non perferendis molestiae odio tempore vel nobis repellendus mollitia, ad saepe excepturi aut labore vero porro reiciendis beatae dolorem, earum ipsam? Est dolores sapiente earum dolor praesentium ea distinctio eius aut doloremque quidem error, fuga tenetur ducimus molestias similique totam?
                    </p>

                    <button onClick={() => navigate('/dashboard')}>Get Started</button>
                    <div className="home-arrow" onClick={() => navigate('/dashboard')}>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className="home-img">
                    <img src={home_banner} alt="home-banner" />
                </div>
            </div>
        </>
    );
}
 
export default Home;