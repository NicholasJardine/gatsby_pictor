import React from 'react'
import Footers from '../components/footer'


export function FooterContainer() {
    return(
        <Footers>
          <Footers.wrapper>
            <Footers.Row>


          <Footers.Column>
                <Footers.Title> About Us </Footers.Title>
                <Footers.Link href="#">Story</Footers.Link>
                <Footers.Link href="#">Clients</Footers.Link>
                <Footers.Link href="#">Testimonials</Footers.Link>
              </Footers.Column>

              <Footers.Column>
                <Footers.Title> About Us </Footers.Title>
                <Footers.Link href="#">Story</Footers.Link>
                <Footers.Link href="#">Clients</Footers.Link>
                <Footers.Link href="#">Testimonials</Footers.Link>
              </Footers.Column>

              <Footers.Column>
                <Footers.Title> About Us </Footers.Title>
                <Footers.Link href="#">Story</Footers.Link>
                <Footers.Link href="#">Clients</Footers.Link>
                <Footers.Link href="#">Testimonials</Footers.Link>
              </Footers.Column>
              </Footers.Row>
          </Footers.wrapper>

        </Footers>
    )
}