import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemContainer = styled.div`
  background: var(--white);
  padding: 1em;
  border: 1px solid var(--gray);
  margin-bottom: 1rem;
  box-shadow: 5px 5px 5px var(--light-gray);
`

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
`

export const ItemField = styled.b`
  margin-right: 0.5rem;
`

export const ItemValue = styled.p``
