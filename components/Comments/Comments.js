export default function Comments({ comments }) {
    return (
      <>
        <ul>
          {comments && comments.length > 0
            ? comments.map((comment, index) => (
                <li key={index}>{comment.text} <br></br>{comment.date}</li>
              ))
            : "No comments available"}
        </ul>
      </>
    );
  }
  