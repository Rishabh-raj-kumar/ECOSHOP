import SellerPage from '@/components/SellerPage'
import React from 'react'

export default function Seller(props) {
    
  return (
    <div>

    {props.user ?
       <>
       <SellerPage />
       </>
        :
        (
        <>
        <h1>
         "Please Sign In to Continue"

        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={props.signIn}
        >
          Sign In
        </button>

        </>
        )
    }
    </div>
  )
}
