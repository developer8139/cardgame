import './App.css';
import {StartingScreen} from './components/StartingScreen'
import {Board} from './components/Board';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={StartingScreen}/>
        <Route exact={true} path="/Board" component={Board}/>
      </Switch>
    </div>
  );
}

export default App;
