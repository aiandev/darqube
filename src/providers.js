import { BrowserRouter as Router } from "react-router-dom"
import { Provider as StoreProvider } from "react-redux"
import store from "./store/store"

function Providers({ children }) {
  return (
    <Router>
      <StoreProvider store={store}>{children}</StoreProvider>
    </Router>
  )
}

export default Providers
