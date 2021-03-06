import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import PostForm from './components/PostForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <Post />
        <hr />
        <PostForm />
        </div>
      </header>
     
    </div>
  );
}

export default App;
