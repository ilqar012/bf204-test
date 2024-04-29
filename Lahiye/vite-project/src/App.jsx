import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Welcome from './Components/Welcome'
import Product from './Components/Product'


function App() {
  const [islogged, setIsLogged] = useState(false)


  return (
    <>
      {
        !islogged ? (<>
          <Login setIsLogged={setIsLogged} />
        </>)
          : (
            <>
              <Welcome />
              <Logout setIsLogged={setIsLogged} />
              <Product/>
            </>)
      }


    </>
  )
}

export default App
