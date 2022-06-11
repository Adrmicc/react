import React from 'react'
import {Stopka, Copy, Social, Instagram, Facebook, Twitter} from './styles'

const Footer = () => {
  return (
    <Stopka>
        <Copy>
            <>&copy; Adrian Michalik</>
        </Copy>
        <Social>
            <a name="Instagram" href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
            <   Instagram aria-hidden="true"/>
            </a>
            <a name="Facebook" href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                <Facebook aria-hidden="true"/>
            </a>
            <a name="Twitter" href='https://www.twitter.com/' target="_blank" rel="noopener noreferrer">
            <Twitter aria-hidden="true"/>
            </a>
        </Social>
    </Stopka>
  )
}

export default Footer