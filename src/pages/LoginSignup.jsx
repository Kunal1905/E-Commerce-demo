import React from 'react'

const LoginSignup = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8'>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6 md:mb-8">Sign Up</h1>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder='Your Name'
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          />
          <input
            type="email"
            placeholder='Your Email'
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          />
          <input
            type="password"
            placeholder='Password'
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          />
        </div>

        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium text-lg transition-colors mb-4">
          Continue
        </button>

        <p className='text-center text-gray-600 mb-6'>
          Already have an account?
          <span className="text-red-500 cursor-pointer hover:text-red-600 font-medium ml-1">Login here</span>
        </p>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agreement"
            className="mt-1 w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
          />
          <label htmlFor="agreement" className="text-sm text-gray-600 leading-relaxed">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
