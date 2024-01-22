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
        <div style={{display: "flex"}}>
          <span>{product.price} €</span>
          <button onClick={() => {
              addToCart(`${product.title}`)
          }}> Add to cart </button>
        </div>
        <Link style={{color: "black", textDecoration: "none"}} to={`/product/${product.id}`}>{product.title}</Link>
    </Card>
  })

}

const Home = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;`

const Content = styled.div`
  display: grid;
  grid: auto-flow / repeat(3, 1fr);
  gap: 20px;`

const Card = styled.div`
  padding: 20px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #9a9a9a;`

const ImgCard = styled.img`
  height: 100px;
  width: auto;
  object-fit: contain;
`;