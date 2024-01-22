import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCart } from "../Providers/CartContext"

function Header() {
   let { cart, addToCart } = useCart()

   return <Head>
      <Link style={{color: "#F1E4CA", textDecoration: "none"}} to="/">Home</Link>
      <Link style={{color: "#F1E4CA", textDecoration: "none"}} to="/cart">Cart : {cart.length}</Link>
   </Head>
}

const Head = styled.header`
   padding: 20px 30px;
   height: 5%;
   position: sticky;
   top: 0;
   display: flex;
   background-color: #060D28;
   color: #F1E4CA;
   border-bottom: 2px solid #0B1E3B;
   justify-content: space-between;
   align-items: center;`

export default Header;