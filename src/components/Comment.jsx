import React from 'react'

const Comment = ({comment, lastcommentid}) => {
  return (
    <div className="max-w">
        <h1 className="font-bold pt-3">{comment.email}</h1>
        <p className="font-normal mt-1 mb-3">{comment.body}</p>
        {/* Remove last comment's horizontal line #DesignPurpose */}
        {comment.id==lastcommentid
        ? '' 
        :<div class="border-t border-gray-400 w-full "></div>
        }
        
    </div>
  )
}

export default Comment