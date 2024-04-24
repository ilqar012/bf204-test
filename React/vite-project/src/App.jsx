import './App.css'

import Header from "./layouts/header" 

import Footer from "./layouts/footer"

import Cards from "./components/Cards"

function App() {
 let fullName = "Ilqar Nuriyev"
  return (
    <>
      <Header fullName ={fullName} /> 
      <Cards products={products}/>
      <Footer />
    </>
  )
}

export default App

