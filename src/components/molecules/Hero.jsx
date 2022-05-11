import React from 'react'
import { HeroContainer } from '../../styles/heroStyle'
import watch from '../../images/reloj.png'
import headphones from '../../images/headphones.png'

const Hero = () => {
  return (
    <HeroContainer>
          <div className="row">

            <div className="columnLeft">
              <div className="leftCol">
                <h1>50% Discount on an Apple Watch</h1>
                <h3>Compra Ahora</h3>
              </div>

              <div className="rightCol"><img src={watch} alt=""/></div>
            </div>

            <div className="columnRight">
                <div className="leftCol">
                <h1>35% Discount on Headphones</h1>
                <h3>Compra Ahora</h3>
                </div>
                
                <div className="rightCol"><img src={headphones} alt=""/></div></div>
            </div>
    </HeroContainer>
  )
}

export default Hero