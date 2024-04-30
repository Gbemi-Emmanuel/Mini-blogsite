import BlogDetails from './component/BlogDetails'
import BlogList from './component/BlogList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/blogDetails/:id' element={<BlogDetails />} />
        <Route path='/blogList' element={<BlogList />} />
        <Route path='/' element={<BlogList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
