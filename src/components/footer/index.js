import React from 'react'
import {Container, Wrapper, Row, Column, Link, Title} from './styles/footer'

export default function Footers({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Footers.Wrapper = function FootersWrapper({children, ...restProps}) {
    return<Wrapper {...restProps}>{children}</Wrapper>
}

Footers.Row = function FootersRow({children, ...restProps}) {
    return<Row {...restProps}>{children}</Row>
}

Footers.Column = function FootersColumn({children, ...restProps}) {
    return<Column {...restProps}>{children}</Column>
}

Footers.Link = function FootersLink({children, ...restProps}) {
    return<Link {...restProps}>{children}</Link>
}

Footers.Title = function FootersTitle({children, ...restProps}) {
    return<Title {...restProps}>{children}</Title>
}
