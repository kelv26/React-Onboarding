import { useState, useEffect } from 'react'
import Posts from "../components/Posts"

function MainPage() {

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
      <div className="mx-auto">
        <h1 className="w-full text-center text-Purple font-extrabold text-4xl">
          Latest News
        </h1>
        <p className="py-5 w-full text-center text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliq.</p>
      </div>
    )
  }


  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
  );
}

export default MainPage;
