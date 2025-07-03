import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-bl from-purple-600 to-fuchsia-600 via-purple-400">
    <form>
      <div className="flex flex-col items-center justify-center px-6 py-20 mx-auto">
        <div className="w-full bg-white/70 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className='flex text-3xl text-purple-500 font-[Diphylleia] font-bold items-center justify-center'>LiftUP</div>
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Welcome Back!
            </p><div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your username
              </label>
              <input placeholder="JohnDoe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password" />
            </div>
            {/* <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Confirm password
              </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="confirmPassword" type="password" />
            </div> */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input className="w-4 h-4 border  rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" type="checkbox" aria-describedby="terms" id="terms" />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-light text-gray-500">
                  I accept the
                  <a href="#" className="font-medium text-primary-600 hover:underline text-primary-500">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-400 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-purple-600 text-white" type="submit" onClick={()=>{nav('/TrackSkills')}}>
              Login
            </button>
          </div>
        </div>
      </div></form>
      </div>
  );
}

export default Login;
