import React from "react";
import "./App.css";
import facebook from "./image/facebook.png";
import twitter from "./image/twitter.png";

function App() {
  return (
    <div className="App flex justify-center items-center mt-60 self-center">
      <div className=" first  bg-slate-100 flex-col flex justify-center items-center md:w-96 max-sm-w-64 rounded-s-lg ">
        <h1 className="text-2xl font-bold mt-8 ">Login</h1>
        <div className="flex-row flex justify-center items-center m-3 gap-x-4">
          <img className="md:w-9 cursor-pointer  " src={facebook}></img>
          <img className="md:w-9  cursor-pointer" src={twitter}></img>
        </div>
        <p className="mt-6">or use your account</p>
        <div className="flex-col  flex justify-center items-center">
          <input className="mt-4 w-64 p-2" placeholder="Email" />
          <input className="mt-2 w-64 p-2 " placeholder="Password" />

         
        </div>
        <p className="mt-8">
        Forgot your password?
        </p>
        <button className="bg-red-500 p-2 text-center mt-3 mb-7 font-bold  text-white rounded-3xl h-9">LOG IN</button>
      </div>
      <div className=" second  bg-red-500 flex-row flex justify-center items-center md:w-96 max-sm:w-64 rounded-r-lg ">
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default App;
