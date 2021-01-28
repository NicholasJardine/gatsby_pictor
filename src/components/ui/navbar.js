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
const LogoContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:350px;
height:150px;
    img{
        flex-shrink: 1;
        min-width: 100%;
        height: 350px;
    }
`
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
            <LogoContainer>
            </LogoContainer>
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

