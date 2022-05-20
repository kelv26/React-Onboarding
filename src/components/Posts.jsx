import Post from "./Post"

const Posts = ({posts}) => {
  
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center mx-20 mt-10 gap-8"> 
        {posts.map((post) => (
          <Post 
            key={post.id} 
            post={post}
          />
        ))}
      </div>
  )
}

export default Posts