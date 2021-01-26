import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import styled from "styled-components"



const Paragraph = styled.div`
    width:80%;
    display:flex;
    position: relative;
    margin: 0 auto;
    align-self:center;
    justify-self:center;
    p{
        font-size:16px;
        font-weight:500;
        &:nth-child(1){
            margin-top:40px;
        }
    }
`

const AboutPage = () => (
  <Layout>
    <Paragraph><p>The world is moving towards a “the easier, the better” approach and doing things online, quickly and easily is the new way to go. Why should the acting industry be any different?


Pictor allows production companies or casting agents to upload their Casting briefs and scripts directly on the platform, with the ability to specify race, gender, average age, language, skill sets, body type, location and more on the briefs, sending them directly to actors whose profiles match the specified character description. The actors can then submit their self-made casting tapes directly to production companies, via our website. Thus saving both the actor and the company time and money.</p></Paragraph>
<Paragraph> Additionally, as actors create profiles, Pictor grows as a database for South African actors, making it easier to find the agents that the actors are with or contacting them directly, should they be open to that. Pictor also keeps it’s readers up to date with what’s happening in the industry.</Paragraph>

  </Layout>
)

export default AboutPage