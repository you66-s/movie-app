import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {

    return (
        <nav className={"navbar flex flex-row justify-between items-center p-4"}>
            <div className={"Logo"}>Movie App</div>
            <ul className={"navList flex flex-row items-center gap-10"}>
                <li className={"navItem hover:text-blue-700 hover:font-bold hover:cursor-pointer"}>Home</li>
                <li className={"navItem hover:text-blue-700 hover:font-bold hover:cursor-pointer"}>Pricing</li>
                <li className={"navItem hover:text-blue-700 hover:font-bold hover:cursor-pointer"}>How it Works</li>
                <li className={"navItem hover:text-blue-700 hover:font-bold hover:cursor-pointer"}>About</li>
            </ul>
            <div className={"Buttons flex flex-row items-center gap-4"}>
                <Link to={"/login"}>
                    <button className={"text-white border-2 border-blue-700 bg-blue-700 hover:bg-blue-800 rounded-lg p-2"}>Login</button>
                </Link>
                <Link to={"/register"}>
                    <button className={"border-2 border-blue-700 rounded-lg p-2 hover:bg-blue-800 hover:text-white"}>Signup</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;