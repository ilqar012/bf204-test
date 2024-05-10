import React from 'react'
import AdminHeader from '../../components/Admin'
import { Outlet } from 'react-router'

const AdminRoot = () => {
  return (
    <>
      <AdminHeader/>
      <Outlet/>
    </>
  )
}

export default AdminRoot