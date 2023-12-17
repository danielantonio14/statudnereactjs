
import './App.css';
import {useState} from "react";


const messages = [
  "Fundamentos de React.js",
    "React.js Avançado",
    "React.js + Node.js",

]

function App() {


  const activeColor = 'green'; // Cor para botões ativos
  const inactiveColor = 'gray'; // Cor para botões inativos

    const [step,setStep] = useState(0);

    function HandlePrevious(){

       if ( step > 1) setStep(step-1);
    }

    function HandleNext(){
        if ( step < 3) setStep(step+1);
    }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`number ${step >= 1 ? "active" : ""}`} style={{ backgroundColor: step >= 1 ? activeColor : inactiveColor }}>1</div>
        <div className={`number ${step >= 2 ? "active" : ""}`} style={{ backgroundColor: step >= 2 ? activeColor : inactiveColor }}>2</div>
        <div className={`number ${step >= 3 ? "active" : ""}`} style={{ backgroundColor: step >= 3 ? activeColor : inactiveColor }}>3</div>
      </div>

      <p className="message"> Step{step}: {messages[step-1]}</p>
      <div className="buttons">
         <button className=""
         onClick={HandlePrevious}>Prev</button>
        <button className=""
        onClick={HandleNext}>Next</button>

      </div>

    </div>



  );
}

export default App;
