import Navbar from "./navbar";
import '../css/register.css'

const Register = () => {
    return ( 
        <>
            <Navbar />
            <div className="Register">
            <div className="log-bg">
                    <form action="/login" method="post">
                        <div className="email-login">
                            <label htmlFor="email">Email:</label>
                            <input
                                name="email"
                                type="text"
                                required
                                placeholder="enter email..."
                                // value=""
                            />
                        </div>
                        <div className="pass-login">
                            <label htmlFor="password">Password:</label>
                            <input
                                name="password"
                                type="text"
                                required
                                placeholder="enter password..."
                                // value=""
                            />
                        </div>
                        <div className="log-btn">
                            <button type="submit">Join Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default Register;