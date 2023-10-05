export default function CommentForm({ onSubmit }) {

  return (
    <form onSubmit={onSubmit}>
      <label>Add comment:</label>
      <input
        name="comment"
        required
        type="text"
      />
      <button>Send</button>
    </form>
  );
}
