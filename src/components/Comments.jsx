import Comment from "./Comment"

const Comments = ({comments}) => {
  
  return (
      <>
        <div class="grid grid-flow-row auto-rows-max mx-10 my-10 w-fit ">
            {comments.map((comment) => (
            <Comment 
                key={comment.id} 
                comment={comment}
            />
            ))}

            
        </div>
        <div class="border-t border-black w-full"></div>
    </>
  )
}

export default Comments