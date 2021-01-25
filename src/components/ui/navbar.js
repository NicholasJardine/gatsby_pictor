import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby'

const Container = styled.nav`
    width:100%;
    height:80px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    background-color:blue;
`
const LogoContainer = styled.div``
const LinksContainer = styled.div`
    ul {
        display:flex;
        align-items: center;
        list-style:none;
        li{
            margin: 0 8px;
        }
    }
`

const Navbar = () => {
    return (
        <Container>
            <div>This is the logo</div>
            <LinksContainer>
                <ul>
                    <li>
                    <Link> About Us</Link></li>
                   <li> <Link> Actors</Link></li>
                   <li> <Link> Contacts</Link></li>
                </ul>
            </LinksContainer>
        </Container>
    )
} 

export default Navbar

