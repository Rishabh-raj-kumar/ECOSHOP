import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
    <div className="flex items-center space-x-4">
      <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
      <h1 className="text-xl font-bold">ECOSHOP</h1>
    </div>
    <div className="flex-grow text-center">
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/seller">Seller</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </div>
    <div>
    {props.user ?
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={props.signOut}
        >
          Sign Out
        </button>
        :
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={props.signIn}
        >
          Sign In
        </button>

    }
    </div>
  </nav>
  )
}
