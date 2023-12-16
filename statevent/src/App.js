
import './App.css';


const messages = [
  "Fundamentos de React.js",
    "React.js Avançado",
    "React.js + Node.js",

]

function App() {

  const step = 1;
  const activeColor = 'green'; // Cor para botões ativos
  const inactiveColor = 'gray'; // Cor para botões inativos

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`number ${step >= 1 ? "active" : ""}`} style={{ backgroundColor: step >= 1 ? activeColor : inactiveColor }}>1</div>
        <div className={`number ${step >= 2 ? "active" : ""}`} style={{ backgroundColor: step >= 2 ? activeColor : inactiveColor }}>2</div>
        <div className={`number ${step >= 3 ? "active" : ""}`} style={{ backgroundColor: step >= 3 ? activeColor : inactiveColor }}>3</div>
      </div>

      <p className="message"> Step{step}: {messages[step-1]}</p>
      <div className="buttons">
         <button className="">Prev</button>
        <button className="">Next</button>

      </div>

    </div>



  );
}

export default App;
