import React,{useState,useEffect} from 'react'
import './Home.css'
import { getAllProducts } from '../../ApiService/Api'
import { Link } from 'react-router-dom'

function Home() {

  const [products, setproducts] = useState([])

  useEffect(() => {
    const fetchProucts= async()=>{
      const data= await getAllProducts();
      setproducts(data)
      
    }
    fetchProucts()
  }, [])
  

  return (
    <div className='productgrid'>

      {
        products.map((product)=>(
        <div className='product' key={product.id}>
          <img src={product.image} alt="alternative" />
          <h2>{product.title}</h2>
          <p>
            <span className='price'>${product.price}</span>
          </p>

          <Link to={`/product/${product.id}`}>
            <button className='productbtn'>Product Details</button>
          </Link>
          
        </div>
        ))
      }

    </div>
  )
}

export default Home