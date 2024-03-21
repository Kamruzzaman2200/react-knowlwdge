import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'
import Header from './Components/Header/Header'



function App() {


  return (
    <>
     <Header></Header>
     <main className='md:flex '>
     <Blogs></Blogs>
     <Bookmark></Bookmark>
     </main>
    </>
  )
}

export default App
