import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main_body from "./components/Main_body";
import SideNav_Main from "./components/SideNav_Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
      </header>
      <div className="App-sidebar">
        <SideNav_Main />
      </div>
      <div className="App-body">
        <Main_body />
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
