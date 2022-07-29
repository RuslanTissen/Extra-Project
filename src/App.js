import './App.css';

function App() {
 function myFn(a,b){
  let c
  a=a+1
  c = a+b
  return c
 }
 console.dir(myFn.name);
 let d = myFn(14,25)
 console.log(d);

  return (
    <div className="App">
       <h1>Hallo</h1>

       
    </div>
  );
}

export default App;
