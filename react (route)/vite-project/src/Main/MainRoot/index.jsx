import React from 'react'
import Navbar from '../../Components/Main/Navbar'
import { Container } from '@mui/material'
import { Outlet } from 'react-router'
// import Footer from '../../Components/Main/Footer'

const MainRoot = () => {
  return (
    <>
    <Navbar/>
    <Container>
    <Outlet/>
    {/* <Footer/> */}
    </Container>
    </>
  )
}

export default MainRoot