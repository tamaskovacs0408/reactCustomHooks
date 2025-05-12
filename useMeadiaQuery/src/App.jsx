import './App.css'
import useMediaQuery from './useMediaQuery'

function App() {

  const isSmallDevice = useMediaQuery('(max-width: 600px)')
  const isLargeDevice = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <h1>useMediaQuery</h1>
      <section>
        <div className={`container ${isSmallDevice ? "active" : ""}`}>Small</div>
        <div className={`container ${isLargeDevice ? "active" : ""}`}>Large</div>
      </section>
    </>
  )
}

export default App
