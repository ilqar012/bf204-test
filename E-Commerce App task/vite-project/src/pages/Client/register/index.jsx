import React from 'react'
import Container from '../../../components/Client/container'
import { Button, TextField } from '@mui/material'

const Register = () => {
  return (
    <>
  <Container >
    <div style={{width: "100", display: "flex", justifyContent: "center",flexDirection: "column", gap: "20px"}}>
    <div style={{display: "flex", gap: "20px"}}>
    <TextField id="outlined-basic" label="UserName" variant="outlined" />
    <TextField id="outlined-basic" label="Password" variant="outlined" />
    </div>
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <TextField id="outlined-basic" label="Profil Image Src" variant="outlined" />
    <Button variant='outlined' color='error' type='submit' >Register</Button>
    </div>


  </Container>
  </>
  )
}

export default Register