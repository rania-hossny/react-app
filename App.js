import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './pages/Profile';
import Teams from './pages/Teams';
import Calendar from './pages/Calendar';
import Message from './pages/Message';
import Setting from './pages/Setting';
import Team1 from './pages/Team1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './pages/Posts';
import Files from './pages/Files';






function App() {
  return (
    <>
    <Router>
      <Navbar/>

      <switch>
        <Route path="/" exact component={Profile}/>
        <Route path="/Teams" component={Teams}/>
        <Route path="/Calendar" component={Calendar}/>
        <Route path="/Message" component={Message}/>
        <Route path="/Setting" component={Setting}/>
        <Route  path="/team1" component={Team1}/>
        <Route path="/posts" component={Posts}></Route>
        <Route path="/files" component={Files}></Route>
      </switch>
    </Router>
      
    </>
  );
}

export default App;
