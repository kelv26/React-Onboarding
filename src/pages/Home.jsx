import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Posts from "../components/Posts"
import InnerPage from "./InnerPage"

function Home() {

//useState is used to update array in a better way
const [posts, setPosts] = useState([])

//Insert Server Posts into Web
  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await FetchPosts()
      setPosts(postsFromServer)
    }
    getPosts()
  }, [])

//Fetch Data from Rest API
  const FetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return data;
  }

  const Header = () => {
    return (
      <div className="mx-56">
        <h1 className="w-full text-center text-Purple font-extrabold text-4xl">
          Latest News
        </h1>
        <p className="py-5 w-full text-center text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliq.</p>
      </div>
    )
  }


  return (
    <Router>
      <div className="container bg-Bg py-14 w-screen">
        <div className="max-w-screen-lg mx-auto">
        <Routes>
          <Route path='/posts/:id' 
            element={
              <>
                <InnerPage posts={posts} />
              </>
          }
          />
          <Route path='/'
            element={
              <>
                <Header />
                <Posts posts={posts} />
              </>
            }
          />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;
