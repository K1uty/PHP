import "./assets/css/App.css";
import Login from "./components/Login";
import ListaPaciente from "./components/ListaPaciente";


import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact render= { props => ( <Login {...props} />)} ></Route>
          <Route path='/pacientes' exact render= { props => ( <ListaPaciente {...props} />)} ></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
