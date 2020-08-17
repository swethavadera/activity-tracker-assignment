import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import UsersListComponent from "./components/UsersListComponent";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h2
          style={{
            fontFamily: "Segoe Script",
            marginTop: "3%",
            textAlign: "center",
           
          }}
        >
          Activity Tracker
        </h2>
        <UsersListComponent />
      </div>
    );
  }
}
export default App;