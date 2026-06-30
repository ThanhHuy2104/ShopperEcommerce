import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App