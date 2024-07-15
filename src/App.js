import './App.css';
import Header from "./components/Header";
import {useState} from "react";

function App() {
  const [language, setLanguage] = useState('en');

  function changeLanguage(){
      setLanguage(language === 'en'? 'ka': 'en')
  }

  return (
    <div className="App">
      <Header version={language}/>
      <button onClick={changeLanguage}>click</button>
    </div>
  );
}

export default App;
