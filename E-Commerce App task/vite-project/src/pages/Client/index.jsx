import React from 'react'
import ClientHeader from '../../components/Client'
import { Outlet } from 'react-router'

const ClientRoot = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    </>
  )
}

export default ClientRoot