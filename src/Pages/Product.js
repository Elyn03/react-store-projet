import { useGetProductsQuery, useGetCommentsQuery } from "../Services/API"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"

export default function() {

   let { id } = useParams()

  return <div>
   <h1>Product n°{ id }</h1>


  </div>
}

