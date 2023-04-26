/* npm */
import { BrowserRouter } from 'react-router-dom'
/* routes */
import Routes from './routes'
/* JSX Elements */
import Header from './containers/Header'
/* Styles */
import GlobalStyle from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main className="container">
        <Routes />
      </main>
    </BrowserRouter>
  )
}

export default App
