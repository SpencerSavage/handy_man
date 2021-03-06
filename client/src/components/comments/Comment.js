import { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({ id, subject, body, updateComment, deleteComment}) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
        <>
          <CommentForm
            id={id}
            subject={subject}
            body={body}
            updateComment={updateComment}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <h1>Comment # {id} {subject}</h1>
          <p>{body}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteComment(id)}>Delete</button>
        </>
      }
    </>
  )
}

export default Comment;