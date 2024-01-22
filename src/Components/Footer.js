import styled from 'styled-components'
import { useCart } from "../Providers/CartContext"

function Footer() {
   let { cart, addToCart } = useCart()

   return <Foot>
      © 2024 Céline Eap / 13 / All rights reserved
   </Foot>
}

const Foot = styled.footer`
   position: relative;
   padding: 20px 30px;
   height: 5%;
   bottom: 0;
   border-top: 2px solid #0B1E3B;
   background-color: #010822;
   color: #F1E4CA;
   text-align: center;`

export default Footer;