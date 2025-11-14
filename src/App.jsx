import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";

function App() {
  let [activeForm,setActiveForm]=useState("");

  return (
    <div>
      <Navbar setActiveForm={setActiveForm} />
      <div className="mt-4">
        {activeForm==="login"&& <LoginForm />}
        {activeForm==="register"&& <RegisterForm />}
      </div>
    </div>
  );
}
export default App;
