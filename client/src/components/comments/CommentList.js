import Comment from './Comment';

const CommentList = ({ comments, updateComment, deletComment }) => (
  <>
    { comments.map( n=> 
      <Comment
        key={comments.id}
        {...c}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    )}
  </>
)
export default CommentList;