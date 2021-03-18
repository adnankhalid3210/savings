
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import About from './About';
import Mission from './Mission';
import Home from './Home';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import PersonList from "./PersonList";
import Projects from "./Projects/Projects";
import AddProjects from "./AddProjects/AddProjects";

function App() {
  return (
    <Router>
    <div className="App">  
          <Header />
          <Switch>
        <Route path="/" exact component={Home}>
          <Home />
        </Route>

        <Route path="/about-us" component={About}>
          <About />
        </Route>
        <Route path="/mission" component={Mission}>
          <Mission />
        </Route>
        <Route path="/sign-in" component={SignIn}>
          <SignIn />
        </Route>
        <Route path="/sign-up" component={SignUp}>
          <SignUp />
        </Route>
        <Route path="/person-list" component={PersonList}>
          <PersonList />
        </Route>
        <Route path="/projects" component={Projects}>
          <Projects />
        </Route>
        <Route path="/addprojects" component={AddProjects}>
          <AddProjects />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
