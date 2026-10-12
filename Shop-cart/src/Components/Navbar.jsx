import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <h2>MyWebsite</h2>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Login'>Login</Link>
        </div>
    );
}