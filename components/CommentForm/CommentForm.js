export default function CommentForm({ slug, onSubmitComment }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitComment(slug);
      }}
    >
      <label>Add comment:</label>
      <input name="formInput" type="text-box"></input>

      <button>Send</button>
    </form>
  );
}
