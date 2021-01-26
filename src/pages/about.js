import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"

const HeadingContainer = styled.div`
    width:80%;
    display:flex;
    position: relative;
    margin: 0 auto;
    align-items:center;

    h1{    
        font-weight:700;
        color:blue;
        margin-top:40px;   
    }

    h4{
        color: blue;
        font-weight: bold;
        text-align: center;
    }
`

const Paragraph = styled.div`
    width:80%;
    display:flex;
    position: relative;
    margin: 0 auto;
    align-self:center;
    justify-self:center;
    p, li{
        font-size:16px;
        font-weight:500;
    }
    
`

const AboutPage = () => (
  <Layout>
      <HeadingContainer><h1>How Pictor Works</h1> </HeadingContainer>
        <Paragraph>
            <p>The world is moving towards a “the easier, the better” approach and doing things online, quickly and easily is the new way to go. Why should the acting industry be any different?


            Pictor allows production companies or casting agents to upload their Casting briefs and scripts directly on the platform, with the ability to specify race, gender, average age, language, skill sets, body type, location and more on the briefs, sending them directly to actors whose profiles match the specified character description. The actors can then submit their self-made casting tapes directly to production companies, via our website. Thus saving both the actor and the company time and money.</p>
        </Paragraph>
        <Paragraph> 
            <p>
            Additionally, as actors create profiles, Pictor grows as a database for South African actors, making it easier to find the agents that the actors are with or contacting them directly, should they be open to that. Pictor also keeps it’s readers up to date with what’s happening in the industry. 
            </p>
        </Paragraph>
        <HeadingContainer>

         <h4>IMPORTANT DISCLAIMERS</h4>

        </HeadingContainer>
        <Paragraph>
            <ul>
                <li>Pictor does not act as an agent and is not involved in the contracting and payments between parties, should the actors get the roles.</li>
                <li>It is the responsibility of the company to contact the actor via their agent if they do not respond to company requests via the application</li>
                <li>Since it is the responsibility of the company to send briefs, Pictor is not responsible for lack of audition requests to actors. It is simply a tool that the industry may use.
</li>
                <li>If you suspect that actors are not receiving any of your briefs, please let us know.
</li>
                <li>If you suspect that someone is copying your profile, please let us know.
</li>
                <li>Read more on Pictor’s terms and conditions</li>
            </ul>
        </Paragraph>
  </Layout>
)

export default AboutPage