import { useGetProductsQuery, useGetCommentsQuery, useCreateCommentMutation } from "../Services/API"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import Header from '../Components/Header'
import { useCart } from "../Providers/CartContext"

export default function() {

   let { id } = useParams()
   let { data, isFetching } = useGetProductsQuery()
   let [ createComment, { isLoading } ] = useCreateCommentMutation() 

   return <div>
      <Header />

      <h1>Product n°{ id }</h1>

      {
         isFetching ? <p>Pas de products</p> : <Home>
         <ProductsList />
         </Home>
      }

      <h1>Commentaires :</h1>

      <p>Créer un commentaire</p>
      <button onClick={()=> {
         createComment(id,{username: "Didi", comment: "Tomate bio"})
      }}>Create Comment</button>

      <ListComments />
   </div>
}

function ListComments() {
   let { id } = useParams();
   const { data, isFetching } = useGetCommentsQuery(id);

   // Check if data is still being fetched
   if (isFetching) {
      return <div>Loading...</div>;
   }

   // Check if data is available
   if (!data) {
      return <div>No comments available.</div>;
   }

   // Map over the data
   return (
      <div>
         {data.map((comment) => (
            <div key={comment.id}>
               {comment.comment}
            </div>
         ))}
      </div>
   );
}


function ProductsList() {

   let { id } = useParams()
   let { cart, addToCart } = useCart()

   let { data, isFetching } = useGetProductsQuery()
 
   return data.map((product) => {
     return <div>
      {
         product.id == id ? <Home>
            <ImgCard src={product.image} />
            <div>
               <p>ID : {product.id}</p>
               <p>Nom : {product.title}</p>
               <p>Date : {product.date}</p>
               <p>Prix : {product.price}</p>
               <p>Quantité : {product.quantity}</p>
               <p>Unité de mesure : {product.unit_of_measurement}</p>
               <p>Mesure : {product.measure}</p>
               <p>Prix au poids : {product.price_per_measure}</p>
            </div>
            <button onClick={() => {
            addToCart(`${product.title}`)
        }}> Add to cart </button>
         </Home> : <p></p>
      }
         
     </div>
   })
 
 }
 
const Home = styled.div`
   padding: 10px 40px;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: space-around;`
 
 
const ImgCard = styled.img`
   object-fit: cover`