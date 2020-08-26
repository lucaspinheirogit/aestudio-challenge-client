import React from 'react'

import { Container, Head, Header, Body, Row, Data } from './Table.styles'

interface Props {
  headers: string[]
  body: any[]
}

function Table({ headers, body }: Props) {
  return (
    <Container data-testid="responsive-table">
      <Head>
        <Row>
          {headers.map(header => (
            <Header key={header}>{header}</Header>
          ))}
        </Row>
      </Head>
      <Body>
        {body.map((items, index) => (
          <Row key={index}>
            {items.map((item: any, index: number) => (
              <Data key={index}>{item}</Data>
            ))}
          </Row>
        ))}
      </Body>
    </Container>
  )
}

export default Table