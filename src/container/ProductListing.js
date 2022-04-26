import React, {useEffect} from 'react'
import {useDispatch } from 'react-redux'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import {setProduct} from '../redux/actions/productAction'

function ProductListing() {
  const dispatch = useDispatch()
  

  useEffect(async() => {
  const response = await axios.get('https://fakestoreapi.com/products')
    .catch(err =>{
      console.log(err , 'err');
    })
    dispatch(setProduct(response.data));
  }, []);
  return (
    <div className='container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing