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

      <button onClick={() => {
            clearCart()
      }}> Clear cart </button>

      Articles {id}
      {cart.map((product) => {
            return <h2>{product}</h2>
      })}

      <Foot />
   </div>
   
}
 
const Home = styled.div`
   padding: 10px 0;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: space-around;`
 
 
const ImgCard = styled.img`
   object-fit: cover`