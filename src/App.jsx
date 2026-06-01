import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LandingLayout from "./components/layout/layout"
import { Header } from './components/Header'
import { VStack } from '@chakra-ui/react'
function App() {

  return (
    <LandingLayout>
      <Header/>
    </LandingLayout>
  )
}

export default App
