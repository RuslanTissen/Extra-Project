import './App.css';


function App() {
const newPost =(post, addedAt = Date())=>{
  const c = {
    ...post,
    addedAt
  }
  return c
}

const firstPost = {
  id:1,
  author:"Ruslan",
}
newPost(firstPost)
console.log(newPost);






  return (
    <div className="App">
       <h1>Hallo</h1>

       
    </div>
  );
}

export default App;
