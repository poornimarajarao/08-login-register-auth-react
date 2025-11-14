import React, { useState } from "react";

function RegistrationForm() {
    let [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
    });

    let [showRegForm, setShowRegForm] = useState(true);

    let [errors, setErrors] = useState({
        username: "",
        confirmPassword: "",
    });

    function handleChange(e) {
        let { name, value, type, checked } = e.target;
        setInputs({
            ...inputs,
            [name]: type === "checkbox" ? checked : value,
        });
        setErrors({ ...errors, [name]: "" });
    }

    function handleSubmit(e) {
        e.preventDefault();

        let newErrors = {};


        if (inputs.username.length >= 6) {
            newErrors.username = "Username should be less than 6 characters";
        }

        if (inputs.password !== inputs.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }


        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        console.log("Form Data:", inputs);
    }

    function CloseBtnRegForm(e) {
        e.preventDefault();
        setShowRegForm(false);
    }

    if (!showRegForm) return null;

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
            <form
                className="border p-5 rounded bg-light position-relative"
                onSubmit={handleSubmit}
            >
                <button
                    type="button"
                    className="btn position-absolute top-0 end-0 m-2"
                    onClick={CloseBtnRegForm}
                >
                    <i className="bi bi-x-circle-fill fs-3 text-danger"></i>
                </button>

                <h2 className="mb-4 text-center">Register</h2>

                <div className="mb-3">
                    <input
                        type="text"
                        name="username"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        value={inputs.username}
                        onChange={handleChange}
                    />
                    {errors.username && (
                        <p className="text-danger m-0">{errors.username}</p>
                    )}
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-control form-control-lg"
                        placeholder="Confirm Password"
                        value={inputs.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <p className="text-danger m-0">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>

                <div className="form-check mb-4">
                    <input
                        id="agreeTerms"
                        className="form-check-input"
                        type="checkbox"
                        name="agreeTerms"
                        checked={inputs.agreeTerms}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="agreeTerms">
                        I agree to the terms and conditions
                    </label>
                </div>

                <button type="submit" className="btn btn-dark btn-lg w-100">
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;
