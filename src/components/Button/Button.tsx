import React from 'react'

import { Touchable } from './Button.styles'

interface Props {
  title: string
  onClick: (e: React.MouseEvent) => void
}

const Button: React.FC<Props> = ({ title, onClick }: Props) => (
  <Touchable onClick={onClick}>{title}</Touchable>
)

export default Button
