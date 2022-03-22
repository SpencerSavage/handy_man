import { useState, useEffect } from 'react';

const CommentForm = ({ addComment, id, subject, body, updateComment, setEdit }) => {
  const [comment, setComment] = useState({ subject: '', body: '' })

  useEffect(() => {
    if (id) {
      setComment({ subject, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id, comment)
      setEdit(false)
    } else {
      addComment(comment)
    }
    setComment({ subject: '', body: '' })
  }

  return (
    <>
      <h1>{ id ? "Update" : "Create" } Comment</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='subject'
          value={comment.subject}
          onChange={(e) => setComment({...comment, subject: e.target.value })}
          required
          placeholder='Subject'
        />
        <textarea
          name='body'
          value={comment.body}
          onChange={(e) => setComment({...comment, body: e.target.value })}
          required
          placeholder='Body'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default CommentForm;