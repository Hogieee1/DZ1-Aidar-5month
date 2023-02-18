import './App.css'
import { HeaderWithMouseHover } from './components/withMouseHover/withMouseHover'
import { MainWithMouseHover } from './components/withMouseHover/withMouseHover'
import { FooterWithMouseHover } from './components/withMouseHover/withMouseHover'

function App() {

  return (
    <div className="App">
      <HeaderWithMouseHover/>
      <MainWithMouseHover/>
      <FooterWithMouseHover/>
    </div>
  )
}

export default App
