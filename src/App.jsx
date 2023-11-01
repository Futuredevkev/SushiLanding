import './App.css'
import { Products } from './components/Products.jsx'
import { products } from './mocks/products.json'
import Navbar from './components/Navbar'
import Landing from './components/Landing'



function App() {
 

  return (
    <>
       <Navbar /> 
       <Landing />
        <Products products={products}/>
       </>
    )
  }
  
  export default App
  
 