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
            color:white;
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
                    <Link to="/about/"> About Us</Link></li>
                   <li> <Link to="/actors/"> Actors</Link></li>
                   <li> <Link to="/contact/"> Contacts</Link></li>
                </ul>
            </LinksContainer>
        </Container>
    )
} 

export default Navbar

