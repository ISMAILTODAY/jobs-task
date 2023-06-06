
import { Outlet } from 'react-router-dom'
import NavigationBar from './Component/NavigationBar/NavigationBar'

function App() {


  return (
    <>
    <NavigationBar></NavigationBar>
     <Outlet></Outlet>
    </>
  )
}

export default App
