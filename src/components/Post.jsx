import { Link } from 'react-router-dom'

const ShowPostContents = ({post}) => {
  var imageSource = "writing.jpg";
  {post.id%2==0 ? imageSource="newspaper.jpg" : ''}

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg h-full">
      <div href="#" className="relative">
        <img className="rounded-t-lg" src={`../src/assets/${imageSource}`} alt="" />
        <div className="news-tag absolute right-2 bottom-2 py-1 px-5 bg-Blue bg-opacity-50 rounded-xl">
          <p className="font-semibold text-white text-xs">News</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold tracking-tight">{post.title}</h3>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-2">{post.body}</p>
        <Link to={`/posts/${post.id}`} className="text-Purple font-semibold">
          Read more
        </Link>
      </div>
    </div>
  )
}

const Post = ({post}) => {
  return (
    <>
      <ShowPostContents post={post}/>
    </>
  )
}

export default Post