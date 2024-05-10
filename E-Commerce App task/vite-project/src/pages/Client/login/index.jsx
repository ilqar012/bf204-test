import React from 'react'
import Container from '../../../components/Client/container'
import { Button, TextField } from '@mui/material'

const ClientLogin = () => {
  return (
    <>
    <Container >
    <TextField id="outlined-basic" label="UserName" variant="outlined" />
    <TextField id="outlined-basic" label="Password" variant="outlined" />
    <Button>Login</Button>
    </Container>
    </>
  )
}

export default ClientLogin