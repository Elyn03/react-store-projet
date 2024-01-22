import { useGetProductsQuery } from "../Services/API"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Foot from '../Components/Footer'

import { useCart } from "../Providers/CartContext"

export default function () {

  let { data, isFetching } = useGetProductsQuery()

  return <div>
    <Header />

    <Home>
      <h1>Products</h1>
      {
        isFetching ? <p>Pas de products</p> : <Content>
          <ProductsList />
        </Content>
      }
    </Home>

    <Foot />
    
  </div>
}

function ProductsList() {

  let { cart, addToCart } = useCart()

  let { data, isFetching } = useGetProductsQuery()

  return data.map((product) => {
    return <Card key={product.id}>
        <ImgCard src={product.image} />
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <span>{product.price}€</span>
          <Button onClick={() => {
               addToCart([`${product.id}`, `${product.image}`, `${product.title}`, `${product.price}`])
            }}> Add to cart </Button>
        </div>
        <Link style={{color: "#010822", textDecoration: "none"}} to={`/product/${product.id}`}>{product.title}</Link>
    </Card>
  })

}

const Home = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Content = styled.div`
  display: grid;
  grid: auto-flow / repeat(5, 1fr);
  gap: 20px;
`

const Card = styled.div`
  padding: 20px;
  background-color: white;
  display:flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
`

const ImgCard = styled.img`
  height: 100px;
  width: auto;
  object-fit: contain;
`

const Button = styled.button`
  padding: 5px;
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