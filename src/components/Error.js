import React from 'react'

const Error = () => {
    return (
        <div className="container h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-red-500 mb-4">
            An error occurred creating the Shortened URL
          </h1>
          <p>
            The URL has not been shortened, possible errors:
            {/* Add the provided error messages here */}
          </p>
        </div>
      </div>
    )
}

export default Error
