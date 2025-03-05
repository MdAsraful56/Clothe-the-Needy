import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import HomeLayout from './layout/HomeLayout'
import Dashbord from './components/Dashbord'
import Register from './components/Register'
import AuthProvider from './AuthProvider/AuthProvider'




function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path='/login' element={<Dashbord />} />
        <Route path='/register' element={<Register />} />
        
      </Route>
    )
  )


  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
