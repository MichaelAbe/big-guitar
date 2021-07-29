import logo from './logo.svg';
import './App.css';
import TestingContainer from './components/TestingContainer';
import Login from './components/Login';
import LoginContainer from './components/LoginContainer';
import NavBarContainer from './components/NavBarContainer';
import FooterContainer from './components/FooterContainer';
import BodyContainer from './components/BodyContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarContainer/>
        <LoginContainer/>
        <BodyContainer/>
        <FooterContainer/>
      </header>
    </div>
  );
}

export default App;
