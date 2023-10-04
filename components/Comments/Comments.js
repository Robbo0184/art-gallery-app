export default function Comments({ comments }) {
  return (
    <>
      <ul>
        {comments && comments.length > 0
          ? comments.map((obj) => (
              <li key={obj.id}>
                {obj.text} <br></br>
                {obj.date}
              </li>
            ))
          : "No comments available"}
      </ul>
    </>
  );
}
