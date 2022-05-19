import React from 'react'

const Comment = ({comment}) => {
  return (
    <div className="max-w">
        <h1 className="font-bold pt-3">{comment.email}</h1>
        <p className="font-normal mt-1 mb-3">{comment.body}</p>
        {/* Remove last horizontal line */}
        {comment.id%5==0 
        ? '' 
        :<div class="border-t border-gray-400 w-full "></div>
        }
        
    </div>
  )
}

export default Comment