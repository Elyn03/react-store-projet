import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCart } from "../Providers/CartContext"

function Header() {

   let { cart, addToCart } = useCart()

   return <Head>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart : {cart.length}</Link>
   </Head>
}

const Head = styled.header`
   padding: 20px 30px;
   height: 70px;
   display: flex;
   background-color: #9caeb3;
   justify-content: space-between;
   font-size: 24px;`

export default Header;