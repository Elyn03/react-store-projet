import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCart } from "../Providers/CartContext"

function Header() {
   let { cart, addToCart } = useCart()

   return <Head>
      <Link style={{color: "black", textDecoration: "none"}} to="/">Home</Link>
      <Link style={{color: "black", textDecoration: "none"}} to="/cart">Cart : {cart.length}</Link>
   </Head>
}

const Head = styled.header`
   padding: 20px 30px;
   height: 5%;
   position: sticky;
   top: 0;
   display: flex;
   background-color: #9caeb3;
   justify-content: space-between;
   align-items: center;`

export default Header;