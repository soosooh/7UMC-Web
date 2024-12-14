import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Todo from './components/todo'
import Pages from './pages/pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pages />
    </>
  )
}

export default App
