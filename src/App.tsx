/* JSX Elements */
import Header from './containers/Header'
import RestaurantsList from './containers/RestaurantsList'
/* Styles */
import GlobalStyle from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main className="container">
        <RestaurantsList />
      </main>
    </>
  )
}

export default App
