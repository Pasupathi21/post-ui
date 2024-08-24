import './App.css'


// router
import { RouterProvider } from 'react-router-dom'
import { GET_APP_ROUTES } from './routes/route.index'

function App() {
  return (
    <>
      <main className="h-[100vh] flex flex-1 justify-center  bg-[#161616] p-[2rem] ">
        <RouterProvider router={GET_APP_ROUTES({})} />
      </main>
    </>
  )
}

export default App