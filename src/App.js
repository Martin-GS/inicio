import logo from './inicio.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo inicio" />
        <h1>
          inicio
        </h1>
        <p>
          🇬🇧 Customizable homepage for web browser.<br />
          🇫🇷 Page d'accueil personnalisable pour navigateur web.<br />
          🇪🇸 Página de inicio personalisable para navegador web.
        </p>
        <h3>
          <code>👷 Work in progress 👷</code>
        </h3>
      </header>
    </div>
  );
}

export default App;
