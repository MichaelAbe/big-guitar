import logo from './logo.svg';
import './App.css';
import TestingContainer from './components/TestingContainer';
import Login from './components/Login';
import LoginContainer from './components/LoginContainer';
import NavBarContainer from './components/NavBarContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarContainer/>
        <LoginContainer/>
        
      </header>
    </div>
  );
}

export default App;
