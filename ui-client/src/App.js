import './App.css';
import DynamicForm from './components/dynamicForm';
import headerImage from './images/Header.png'
import footerImage from './images/Footer.png'
import calculatorImage from './images/calculator.png'
import homeImage from './images/home.png'
import personolImage from './images/personal.png'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <img src={headerImage} />
      </header>
      <div style={{ display: "flex", width: "1620px" }}>
        <div style={{ display: "block", width: "60%" }}>
          <DynamicForm></DynamicForm>
        </div>
        <div style={{ display: "block", width: "100px" }}>
          <img src={personolImage} />
          <img src={homeImage} />
          <img style={{padding: "40px"}}src={calculatorImage} />
        </div>
      </div>
      <footer className='footer'>
        <img src={footerImage} />
      </footer>
    </div>
  );
}

export default App;
