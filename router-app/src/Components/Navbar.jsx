import {link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <link to = '/'>Home</link>
            <link to = '/Contact'>Contact</link>
            <link to = '/Login'>Login</link>
        </nav>
    )
}