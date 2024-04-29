import React from 'react'
import PropTypes from 'prop-types'

function Logout({setIsLogged}) {
  return (
    <button onClick={() =>{
      setIsLogged(false) 
    }}>Logout</button>
  )
}

Logout.propTypes = {}

export default Logout
