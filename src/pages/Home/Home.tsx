import React from 'react'

import { Location } from 'types'

interface Props {
  locations: Location[]
}

const Home: React.FC<Props> = ({ locations }: Props) => {
  console.log(locations)

  return <h1>Home</h1>
}

export default Home
