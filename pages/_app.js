import '@/styles/globals.css'
import Login from "../components/Login"
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [isloggedin, setIsloggedin] = useState(false)
  return <>

{isloggedin? <Login log = {setIsloggedin}/>
:
<Component {...pageProps} />

}

  </> 
}
