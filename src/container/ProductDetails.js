import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import {selectedProduct , removeSelectedProduct} from '../redux/actions/productAction'
import axios from 'axios'

function ProductDetails() {
   const {productId} = useParams()
   const product = useSelector(state =>state.product)
   const dispatch = useDispatch()
   useEffect(async()=>{
     if(productId && productId !== ''){
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => console.log(err))
    dispatch(selectedProduct(response.data));
     }
     return ()=>{
       dispatch(removeSelectedProduct());
     }
   },[productId])
  const {title, price, category, image} = product;
  return (
    <div className='flex justify-center content-center'>
      {Object.keys(product).length === 0 ?
        (<h2>Loading....</h2>):(
          <div className="max-w-sm rounded overflow-hidden shadow-lg my-12">
              <img className="h-40 mx-auto" src={image} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{price}</p>
                <p className="text-gray-700 text-base">{category}</p>
              </div>
      </div>
        )
      }
      
    </div>
  )
}

export default ProductDetails