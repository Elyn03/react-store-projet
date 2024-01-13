import { useGetProductsQuery } from "../Services/API"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

import { useCart } from "../Providers/CartContext"

export default function () {

  let { data, isFetching } = useGetProductsQuery()

  return <div>
    <Header />

    <h1>Products</h1>
    {
      isFetching ? <p>Pas de products</p> : <Home>
        <ProductsList />
      </Home>
    }
  </div>
}

function ProductsList() {

  let { cart, addToCart } = useCart()

  let { data, isFetching } = useGetProductsQuery()

  return data.map((product) => {
    return <Card>
        <ImgCard src={product.image} />
        {product.title}
        <Link to={`/product/${product.id}`}>Plus de détails</Link>
        <button onClick={() => {
            addToCart(`${product.title}`)
        }}> Add to cart </button>
    </Card>
  })

}

const Home = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around;`

const Card = styled.div`
  height: 400px;
  width: 400px;
  padding: 30px 20px;
  display:flex;
  align-item: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  border: 2px solid #000;`

const ImgCard = styled.img`
  height: 90%;
  object-fit: contain;`