import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Main from './pages/Main'
import Notfound from './pages/notfound/Notfound'
export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </Router> 
  )
}