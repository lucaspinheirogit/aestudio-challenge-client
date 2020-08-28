import styled from 'styled-components'

import { breakpoints } from 'utils'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;

  @media ${breakpoints.md} {
    padding: 2rem;
  }
`

export const ButtonsContainer = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;

  button {
    margin: 0.25rem;
  }
`
