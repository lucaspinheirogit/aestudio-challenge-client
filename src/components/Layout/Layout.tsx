import React from 'react'

import Loading from 'components/Loading'

import { Container, Body } from './Layout.styles'

interface Props {
  loading?: boolean
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ loading = false, children }: Props) => (
  <Container data-testid="layout">
    <Body>{loading ? <Loading /> : children}</Body>
  </Container>
)

export default Layout
