import React, { useState, useEffect } from 'react'

import { isMobile as checkMobile } from 'utils'

interface Props {
  desktop?: React.ReactNode
  mobile?: React.ReactNode
}

const Responsive = ({ desktop, mobile }: Props) => {
  const [isMobile, setIsMobile] = useState(checkMobile())

  useEffect(() => {
    const resizeHandler = () => {
      const stillMobile = checkMobile()

      if (isMobile !== stillMobile) {
        setIsMobile(stillMobile)
      }
    }

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [isMobile])

  return <>{isMobile ? mobile : desktop}</>
}

export default Responsive
