import React from "react";

function Navbar({setActiveForm}) {
    return (
        <nav className="navbar navbar bg-dark">
            <div className="container-fluid d-flex justify-content-between p-2">
                <span className="navbar-brand mb-0 h1 text-white">My App</span>
                <div>
                    <button className="btn btn-light me-2 rounded" onClick={() => setActiveForm("login")}>Log In</button>
                    <button className="btn btn-light rounded"onClick={() => setActiveForm("register")}>Register</button>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;

