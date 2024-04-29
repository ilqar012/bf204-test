
import ProductList from '../ProductList';
import ProductItem from '../ProductItem';
import { useEffect, useState } from 'react';
import { getAll } from '../../Services';


function Product() {
  const [products, setProducts] = useState([])




  useEffect(() => {
    getAll().then((res) => {
      console.log(res);
      setProducts(res)
    })


  }, [])


  
  return (
    <ProductList>
    {products &&
      products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
  </ProductList>
  )
}


export default Product
