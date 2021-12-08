import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <nav class="py-2 bg-light border-bottom">
                <div class="container d-flex flex-wrap">
                    <ul class="nav me-auto">
                        <li class="nav-item"><Link to="/" class="nav-link link-dark px-2 active" aria-current="page">Home</Link></li>
                        <li class="nav-item"><Link to="/about" class="nav-link link-dark px-2">About</Link></li>
                        <li class="nav-item"><Link to="/pricing" class="nav-link link-dark px-2">Pricing</Link></li>
                        <li class="nav-item"><Link to="/forum" class="nav-link link-dark px-2">FAQs</Link></li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-item"><Link to="/login" class="nav-link link-dark px-2">Login</Link></li>
                        <li class="nav-item"><Link to="/registration" class="nav-link link-dark px-2">Sign up</Link></li>
                    </ul>
                </div>
            </nav>
            <header class="py-3 mb-4 border-bottom">
                <div class="container d-flex flex-wrap justify-content-center">
                    <Link to="/dashboard" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-decoration-none">
                        <span class="fs-4 px-2 rounded"><strong>Explore</strong></span>
                    </Link>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </header>
        </div>
    );
}
 
export default Navbar;