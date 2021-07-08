import './App.css';

function App(props) {
  return (
    <>
      <h1>{props.title} {props.user}</h1>
      <input name="user" id="user" className="userInput" placeholder="User"/>
      <button type="button">Search</button>
    </>

  
  );
}

export default App;
