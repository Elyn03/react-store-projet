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
               return <Product>
                  <ImgCard src={product[0]}/>
                  <p>{product[1]}</p>
                  <p>{product[2]}</p>
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
   display: grid;
   gap: 10px;
   grid-column: 1;`

const Product = styled.div`
   padding: 20px;
   display: flex;
   justify-content: space between;
   border: 2px solid #9a9a9a;`