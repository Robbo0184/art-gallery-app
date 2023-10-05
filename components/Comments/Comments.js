export default function Comments({ comments: commentsObject }) {
  return (
    <>
      <ul>
        {commentsObject.comments.map((comment) => (
          <li key={comment.id}>
            {comment.text} <br></br>
            {comment.date}
          </li>
        ))
        }
      </ul>
    </>
  );
}
