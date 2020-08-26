import styled from 'styled-components'

import { breakpoints } from 'utils'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--greyish-white);
`

export const Body = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 1rem;

  @media ${breakpoints.lg} {
    padding: 0;
  }
`
