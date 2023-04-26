/* npm */
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
/* routes */
import Routes from './routes'
/* store */
import { store } from './store/store'
/* JSX Elements */
import Header from './containers/Header'
/* Styles */
import GlobalStyle from './styles'
import Footer from './containers/Footer'

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}


export default App
