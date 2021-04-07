import logo from 'assets/logo.svg';
import './hello-react.css';

function Hello() {
  return (
    <div className="hello">
      <header className="hello-header">
        <img src={logo} className="hello-logo" alt="logo" />
        <p>
          Edit <code>src/hello-react.js</code> and save to reload.
        </p>
        <a
          className="hello-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Hello;
