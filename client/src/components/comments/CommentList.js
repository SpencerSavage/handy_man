import { link } from 'react-router-dom';
import Comment from './Comment';
import { ListGroup } from 'react-bootstrap';

const CommentList = ({ comments, updateComment, deleteComment }) => (
  <>
    <ListGroup>
      { comments.map( c =>
        <Comment
          key={c.id}
          {...c}
          updateComment={updateComment}
          deleteComment={deleteComment}
        />
      )}
    </ListGroup>
  </>
)
export default CommentList;