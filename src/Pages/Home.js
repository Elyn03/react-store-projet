import { useGetProductsQuery } from "../Services/API"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function () {

  let { data, isFetching } = useGetProductsQuery()

  return <div>
    <header className="App-header">        
         <Link to="/">Home</Link>
      </header>

    <h1>Products</h1>
    {
      isFetching ? <p>Pas de products</p> : <Home>
        <ProductsList />
      </Home>
    }
  </div>
}

function ProductsList() {

  let { data, isFetching } = useGetProductsQuery()

  return data.map((product) => {
    return <Card>
        <ImgCard src={product.image} />
        {product.title}
        <Link to={`/product/${product.id}`}>Plus de détails</Link>
    </Card>
  })

}

const Home = styled.div`
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around;`

const Card = styled.div`
  height: 400px;
  width: 300px;
  padding: 10px 20px;
  display:flex;
  align-item: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  border: 2px solid #000;`

const ImgCard = styled.img`
  height: 90%;
  object-fit: cover`