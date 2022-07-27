import './App.css';

function App() {
const myCity = {
  city: 'New-York',
  country: "USA"
}
let a = JSON.stringify(myCity)
console.log(JSON.parse(a ));
  return (
    <div className="App">
       <h1>Hallo</h1>

       
    </div>
  );
}

export default App;
