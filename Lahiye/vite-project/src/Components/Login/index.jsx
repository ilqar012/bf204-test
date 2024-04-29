import React from 'react'
import PropTypes from 'prop-types'

function Login({setIsLogged}) {
  return (
    <>
    <button onClick={() =>{
      setIsLogged(true) 
    }}>Login</button>
    <p style={{fontSize: "18px", color: "red"}}>You should login to see products</p>
    </>
  )
}

Login.propTypes = {}

export default Login
