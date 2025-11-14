import React, { useState } from "react";

function LoginForm() {
    let[inputs, setInputs]=useState({ username: "", password: "" })
    let[showLogForm, setShowLogForm]=useState(true);
    let[UsnLeg,setUsnLeg]=useState("");

    function handleChange(e){
        setInputs({ ...inputs,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Username:",inputs.username)
        console.log("Password:",inputs.password)
    }

    function CloseBtnLogForm(e){
        e.preventDefault()
        setShowLogForm(false)
    }

    if (!showLogForm) return null

    function CheckUsnLeg(e) {
        e.preventDefault()
        setUsnLeg(inputs.username)
    }

    if (inputs.username.length<8) {
        console.log("Username should be of minimum 8 characters");
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form
                className="border p-5 rounded bg-light position-relative"
                style={{ width: "400px", maxWidth: "90%" }}
                onSubmit={handleSubmit}
            >

                <button
                    type="button"
                    className="btn position-absolute top-0 end-0 m-2"
                    onClick={CloseBtnLogForm}
                >
                    <i className="bi bi-x-circle-fill fs-3 text-danger"></i>
                </button>

                <h2 className="mb-4 text-center">Login</h2>

                <div className="mb-4">
                    <input
                        type="text"
                        name="username"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        value={inputs.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4 text-center">
                    <a href="#" className="link-primary">Forgot password?</a>
                </div>
                
                <button type="submit" className="btn btn-dark btn-lg w-100">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
