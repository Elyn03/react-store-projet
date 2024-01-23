import { useGetProductsQuery, useGetCommentsQuery, useCreateCommentMutation } from "../Services/API"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import Header from '../Components/Header'
import Foot from '../Components/Footer'
import { useCart } from "../Providers/CartContext"
import { useState } from 'react'

export default function() {

   let { id } = useParams()
   let { data, isFetching } = useGetProductsQuery()

   let [ username, setUsername ]  = useState("")
   let [ comment, setComment ]  = useState("")
   let [ createComment, { isLoading } ] = useCreateCommentMutation() 

   return <div>
      <Header />

      <Home>
         <h1>Product n°{ id }</h1>

         <div>
         {
            isFetching ? <p>Pas de products</p> : <div>
               <TheProduct />
            </div>
         }
         </div>

         <div>
            <h1>Comments :</h1>
            <div style={{padding: "10px 0", display: "flex", flexDirection: "column", gap: "40px"}}>
            <Form>
               <input style={{padding: "5px", border: "none", borderBottom: "2px solid #000"}}
               placeholder="Username"
               value={username}
               onChange={(event) => {
                  setUsername(event.target.value)
               }} required />
            
               <textarea style={{padding: "5px", border: "none", "&:focus": {outline: "none"}}}
                  rows="2"
                  value={comment}
                  onChange={(event) => {
                     setComment(event.target.value)
                  }} required />
                           
               <button onClick={() => {
                  console.log("jjjjjjj");
                  createComment(id, username, comment)
                  setUsername('')
                  setComment('')
               }}>Post</button>
            </Form>

            <ListComments />
            </div>
         </div>         
         
      </Home>
      
      <Foot />
   </div>
}

function TheProduct() {

   let { id } = useParams()
   let { cart, addToCart } = useCart()

   let { data, isFetching } = useGetProductsQuery()
 
   return data.map((product) => {
     return <div key={product.id}>
      {
         product.id == id ? <Card>
            <ImgCard>
               <img style={{width: "100%"}} src={product.image} />
            </ImgCard>
            
            <Info>
               <p>Name : {product.title}</p>
               <p>Date : {product.date}</p>
               <p>Price : {product.price}€</p>
               <p>Quantity : {product.quantity}</p>
               { product.unit_of_measurement ? <p>Unit of measurement : {product.unit_of_measurement}</p> : <p>Unit of measurement : /</p> }
               { product.measure ? <p>Measure : {product.measure}</p> : <p>Measure : /</p> }
               { product.price_per_measure ? <p>Price per measure : {product.price_per_measure}</p> : <p>Price per measure : /</p> }
            
            <Button onClick={() => {
               addToCart([`${product.id}`, `${product.image}`, `${product.title}`, `${product.price}`])
            }}> Add to cart </Button>
            </Info>
         </Card> : <p></p>
      }
         
     </div>
   })

}

 function ListComments() {
   let { id } = useParams();
   const { data, isFetching } = useGetCommentsQuery(id);

   if (isFetching) {
      return <div>Loading...</div>;
   }

   if (!data) {
      return <div>No comments available.</div>;
   }

   return (
      <Comment>
         {data.map((comment) => (
            <TheComment key={comment.id}>
               <h3>{comment.username}</h3>
               <span>{comment.comment}</span>
            </TheComment>
         ))}
      </Comment>
   );
}
 
const Home = styled.div`
   padding: 10px 40px;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: space-around;`

const Form = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   padding: 20px;
   border: 2px solid #7692A7;
   background: #95B0B7;`

const Card = styled.div`
   display: flex;
   justify-content: space-around`

const ImgCard = styled.div`
   width: 20%;`

const Info = styled.div`
   width: 70%;`

const Comment = styled.div`
   display: grid;
   grid: auto-flow / repeat(5, 1fr);
   gap: 10px;`

const TheComment = styled.div`
   display: flex;
   flex-direction: column;
   padding: 10px;
   border-radius: 5px;
   border: 2px solid #7692A7;
`

const Button = styled.button`
   padding: 10px;
   border: none;
   background-color: #F1E4CA;
   color: #060D28;
   border-radius: 5px;
   border: 2px solid white;

   &:hover {
      background-color: #060D28;
      color: #F1E4CA;
   }
`