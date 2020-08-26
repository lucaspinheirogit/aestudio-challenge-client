import React from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { Home } from './pages'
import GlobalStyle from './styles'

const App = () => (
  <>
    <ToastContainer />
    <GlobalStyle />
    <Home />
  </>
)

export default App
