import './App.css'
import Blog from './Components/Blog'
import Bookmarks from './Components/Bookmarks'
import Headar from './Components/Headar'


function App() {


  return (
    <>
        <Headar ></Headar>
        <div className='md:flex'>
        <Blog></Blog>
        <Bookmarks></Bookmarks>
        </div>
    </>
  )
}

export default App
