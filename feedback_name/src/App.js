import logo from "./logo.svg";
import "./App.css";

function App() {
  const title = "My Blog";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "Comment One" },
    { id: 2, text: "Comment Two" },
    { id: 3, text: "Comment Three" },
  ];
  return (
    <div className='container'>
      <h3>{title.toUpperCase()}</h3>
      <p>{body}</p>
      <div className='comments'>
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
