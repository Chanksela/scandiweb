import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome ti the Scandiweb Page</h1>
        <h3>Shop by categories</h3>
        <ul>
          <li>
            <a href="/tech">ALL</a>
          </li>
          <li>
            <a href="/tech">CLOTHES</a>
          </li>
          <li>
            <a href="/tech">TECH</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
