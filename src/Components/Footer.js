import styled from 'styled-components'
import { useCart } from "../Providers/CartContext"

function Footer() {
   let { cart, addToCart } = useCart()

   return <Foot>
      © 2024 Céline Eap / All rights reserved
   </Foot>
}

const Foot = styled.footer`
   position: relative;
   padding: 20px 30px;
   height: 5%;
   bottom: 0;
   background-color: #9caeb3;
   text-align: center;`

export default Footer;