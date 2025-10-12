import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route} from 'react-router'
import './index.css'
import App from './App.jsx'
import Homee from './views/Homee.jsx'
import Add from './views/Add.jsx'
import Edit from './views/Edit.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Homee/>}/>
   <Route path="/add" element={<Add/>}/>
  <Route path="/edit/:userId" element={<Edit/>}/>
</Routes>

</BrowserRouter>
)
