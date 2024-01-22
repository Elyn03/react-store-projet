import { useGetProductsQuery, useGetCommentsQuery, useCreateCommentMutation } from "../Services/API"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import Header from '../Components/Header'
import Foot from '../Components/Footer'
import { useCart } from "../Providers/CartContext"


export default function() {

   let { id } = useParams()
   let { cart, clearCart } = useCart()    

   return <div>
      <Header />

      <Home>
         <button onClick={() => {
               clearCart()
         }}> Clear cart </button>

         <h1>Articles</h1>

         <ListCart>{cart.map((product) => {
            console.log(product);
               return <Product>
                  <ImgCard style={{height: "100%", width: "auto"}} src={product[1]}/>
                  <p>{product[2]}</p>
                  <p>{product[3]}€</p>
                  <Link style={{color: "#010822", textDecoration: "none"}} to={`/product/${product[0]}`}>See more</Link>
               </Product>
         })}</ListCart>
         
      </Home>

      <Foot />
   </div>
   
}
 
const Home = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;`

const ImgCard = styled.img`
   object-fit: cover`

const ListCart = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   gap: 20px;`

const Product = styled.div`
   padding: 20px;
   height: 75px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: white;`