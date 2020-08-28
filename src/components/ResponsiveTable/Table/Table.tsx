import React from 'react'

import { Wrapper, Container, Head, Header, Body, Row, Data } from './Table.styles'

interface Props {
  name: string
  headers: string[]
  body: any[]
}

function Table({ name, headers, body }: Props) {
  return (
    <Wrapper>
      <Container data-testid="responsive-table">
        <Head>
          <Row>
            {headers.map(header => (
              <Header key={`${name}-${header}`}>{header}</Header>
            ))}
          </Row>
        </Head>
        <Body>
          {body.map((items, index) => (
            <Row key={`${name}-{index}`}>
              {items.map((item: any, index: number) => (
                <Data key={index}>{item}</Data>
              ))}
            </Row>
          ))}
        </Body>
      </Container>
    </Wrapper>
  )
}

export default Table
