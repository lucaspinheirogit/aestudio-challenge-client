import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
`

export const Container = styled.table`
  margin-top: 2rem;
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--gray);
  padding: 0;
  border-collapse: collapse;
  color: var(--dark-gray);
  font-weight: 400;
  box-shadow: 5px 5px 5px var(--light-gray);
`

export const Head = styled.thead`
  background-color: var(--light-gray);
  border-bottom: 1px solid var(--gray);
  font-weight: 500;
`

export const Header = styled.td`
  padding: 1rem;
`

export const Row = styled.tr`
  border-bottom: 1px solid var(--light-gray);

  &:last-child {
    border: 0;
  }
`

export const Data = styled.td`
  padding: 1rem;
  border-right: 1px solid var(--light-gray);

  &:last-child {
    border: 0;
  }
`

export const Body = styled.tbody`
  tr {
    &:hover {
      background-color: var(--greyish-white);
    }
  }
`
