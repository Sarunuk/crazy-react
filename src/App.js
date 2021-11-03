import './App.css';
import { AccountList } from './comonents/accounts/accountList';
import { CounterWrapper } from './comonents/counter/counter';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './common/routes/routes';
import { AccountProvider } from './comonents/context/accountContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AccountProvider>
          <Routes />
        </AccountProvider>
      </Router>
    </div>
  );
}

export default App;

// const RouterDemo = () => <AccountList />
// const ContextDemo = () => <CounterWrapper />
