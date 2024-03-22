import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'
import Header from './Components/Header/Header'



function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    const newBookmarks =[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }



  return (
    <>
     <Header></Header>
     <main className='md:flex max-w-7xl mx-auto '>
     <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
     <Bookmark bookmarks={bookmarks} ></Bookmark>
     </main>
    </>
  )
}

export default App
