import React, { useEffect, useState } from 'react'
import { getProductId } from '../../ApiService/Api'
import { Link, useParams } from 'react-router-dom'
import './ProductDetails.css'


function ProductDetails() {

    const {id}=useParams();

    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
      const fetchProductDetails=async()=>{
        const data= await getProductId(id)
        setProductDetails(data)
      }
      fetchProductDetails()
    }, [id])

    const handleBuyNow=()=>{
    window.confirm("The Product is out of Stock")
    }
    
  return (
    <div className='productdetailscontainer'>
        <img src={productDetails.image} alt="ima" className='productimage' />

        <div className='productinfo'>
            <h2 className='producttile'>{productDetails.title}</h2>
            <p className='productdesc'>
                {productDetails.description}
            </p>
            <p className='productprice'>
                ${productDetails.price}
            </p>
            <button className='buynowbtn'onClick={handleBuyNow}>Buy Now</button>
            <Link to='/'>
            <button className='gohomebtn'>Go Back Home</button>
            </Link>
            
        </div>
    </div>
  )
}

export default ProductDetails