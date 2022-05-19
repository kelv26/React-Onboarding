import Post from "./Post"

const Posts = ({posts}) => {
  
  return (
    <div className="container">
      <div className="grid grid-cols-3 place-items-center mx-20 mt-10 gap-8"> 
        {posts.map((post) => (
          <Post 
            key={post.id} 
            post={post}
          />
        ))}
      </div>
    </div>
  )
}

export default Posts