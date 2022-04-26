import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function ProductComponent() {
  const products = useSelector((state)=> state.allProduct.products)

  return (
    <div className='container'>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto'>
        {products?.map((product)=>{
          const {id ,title , price ,category ,image } = product;
          return(
            <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg my-12">
              <Link to={`product/${id}`}>
              <img className="h-40 mx-auto" src={image} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">Price : Rs {price}</p>
                <p className="text-gray-700 text-base">{category}</p>
              </div>
              </Link>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default ProductComponent