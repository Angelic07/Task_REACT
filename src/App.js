import React from "react";
import "./App.css";
export default class App extends React.Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const url = "https://randomuser.me/api/?page=1&results=30";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }
  render() {
    return (
      <center>    <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div className="card">
            <table>
              <h1>User Profile</h1>
              <div className="image-container">
                <td>
                  <img src={this.state.person.picture.large} />
                </td>
              </div>
              <div >
                <td>Name:{this.state.person.name.first}</td>
              </div>
                <div>
                  <td>Last:{this.state.person.name.last}</td>
                </div>
                <div>
                  <td>Dob:{this.dob}</td>
                </div>
            </table>
          </div>
        )}
      </div>
      </center>
  
    );
  }
}
