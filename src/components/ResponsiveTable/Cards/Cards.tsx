import React from 'react'

import { Container, ItemContainer, ItemRow, ItemField, ItemValue } from './Cards.styles'

interface Props {
  name: string
  headers: string[]
  body: any[]
}

function Cards({ name, headers, body }: Props) {
  return (
    <Container data-testid="responsive-table-cards">
      {body.map((items, index) => (
        <ItemContainer key={`${name}-${index}`}>
          {items.map((item: any, index: number) => (
            <ItemRow key={`${name}-${headers[index]}`}>
              <ItemField>{headers[index]}:</ItemField>
              <ItemValue>{item}</ItemValue>
            </ItemRow>
          ))}
        </ItemContainer>
      ))}
    </Container>
  )
}

export default Cards
