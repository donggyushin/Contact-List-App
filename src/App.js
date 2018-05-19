import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contact</Link>
        </li>
      </ul>
    </nav>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
);

const Welcome = () => <h1>Welcome to the best Contects app!</h1>;

const Contacts = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.path}/lynn`}>Lynn</Link>
      </li>
      <li>
        <Link to={`${match.path}/jisu`}>Jisu kimchi</Link>
      </li>
      <li>
        <Link to={`${match.path}/japan`}>Japan Guy</Link>
      </li>
    </ul>
    <Route
      exact
      path={`${match.path}`}
      render={() => <h3>please select your friend</h3>}
    />
    <Route path={`${match.path}/:contactName`} component={Contact} />
  </div>
);

const Contact = ({ match }) => (
  //console.log(match)
  <h3>your friends name is {`${match.params.contactName}`}</h3>
);

export default App;
