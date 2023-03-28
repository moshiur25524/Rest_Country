import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Countries from './components/Countries/Countries'
import CountryDetails from './components/CountryDetails/CountryDetails'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import Main from './Layout/Main/Main'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/home', element: <Home /> },
        {
          path: '/countries',
          loader: async () => {
            return fetch('https://restcountries.com/v3.1/all')
          },
          element: <Countries />
        },
        {
          path: `/name/:Countryname`,
          loader: async({params}) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.Countryname}`)
          },
          element: <CountryDetails/>
        },
        { path: '/about', element: <About /> },
      ]
    },

    { path: '/contact', element: <Contact /> },
    { path: '*', element: <NotFound /> },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
