import React, { Component } from "react";
import ChatRomm from "../components/ChatRomm";

class Chat extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-primary">
          <a href="/" className="navbar-brand text-white">
            Chat React
          </a>
        </nav>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <ChatRomm></ChatRomm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
