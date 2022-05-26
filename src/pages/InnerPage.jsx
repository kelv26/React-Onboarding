import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Comments from "../components/Comments";
import LoadingSpinner from "../components/LoadingSpinner"
import Button from "../components/Button"
import AddComment from "../components/AddComment"

const InnerPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    //useState is used to define objects in a better way
    const [post, setPost] = useState([])
    const [comments, setPostComments] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [imageSource, setImageSource] = useState("");

    //Hide Add Comments on Load
    const [showAddComment, setShowAddComment] = useState(false)

    //Hook Fetched Comments into Object
    useEffect(() => {
        const getPostComments = async () => {
            setIsLoading(true);
            const commentsFromServer = await FetchPostComments()
            setPostComments(commentsFromServer)
            console.log("Comments Fetched")
        }
        getPostComments()
        const getPost = async () => {
            const commentsFromServer = await FetchPost()
            setPost(commentsFromServer)
            {commentsFromServer.id%2==0 
                ? setImageSource("newspaper.jpg")
                : setImageSource("writing.jpg")
            }
            setIsLoading(false);
            console.log("Posts Fetched")
        }
        getPost()
    }, [])
   
    //Fetch Selected Post from Rest API
     const FetchPost = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        const data = await res.json()
        return data;
    }

    //Fetch Comments from Rest API
    const FetchPostComments = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
        const data = await res.json()
        return data;
    }

    //Add Comment Function 
    //#Disclaimer: Will Reset after page reloads.
    const addComment = (comment) => {
        //Get the current post Id
        const postId = comments[0].postId
        //Get the last comment's ID and Add 1 for new comment
        const lastcomment = comments[comments.length-1]
        const id = lastcomment.id+1
        //Combine Ids with comment contents
        const newComment = {postId, id, ...comment}
        //Update the array of comments
        setPostComments([...comments, newComment])
    }

    //Store Contents of the page
    const Contents= () => {
        return (
        <div className="PostContents mx-20">
            <button onClick= {()=>{navigate(-1)}} className="mb-6 font-bold text-md">&lt; Back</button>
            <h1 className="font-bold text-3xl justify-start text-Purple">{post.title}</h1>
            <img className="mx-auto my-10 w-4/5" src={`../src/assets/${imageSource}`} alt="" />
            <p className="my-5 justify-evenly pb-5" >{post.body}</p>
            <div className="border-t border-black w-full pb-4"></div>
        
            <div className="Comments md:flex md:justify-between">
                <h1 className="font-extrabold text-Purple text-3xl">Comments ({comments.length})</h1>
                <Button 
                    color={showAddComment ? 'red' : 'green'} 
                    text={showAddComment ? 'Close' : 'Add'} 
                    onClick={() => setShowAddComment(!showAddComment)} 
                />
            </div>
            {/* If showAddComment is true then show addCommentForm */}
            {showAddComment && <AddComment onAdd={addComment}/>}
            <Comments comments={comments} />
        </div>
        )
    }

    return (
        <>
            {/* Show Contents after all the data are fetched/loaded */}
            {isLoading 
            ? <LoadingSpinner /> 
            : <Contents />
            }
        </>
    )
}

export default InnerPage