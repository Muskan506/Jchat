import { Avatar } from "@material-ui/core";
import React from "react";
import "../App.css";
const Chat = () => {
  return (
    <div className="container-fluid bg-white chatbox" id="chats">
      <div className="row h-100">
        <div className="col-md-3 pr-0">
          <div className="card">
            <div className="card-header">
              <div className="row size">
                <div className="col-md-5">My Chats</div>
                <div className="col-md-4">All chats</div>
                <div className="col-md-3">
                  <i className="fas fa-search" />
                </div>
              </div>
            </div>
            <div id="playlist">
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item list-group-item-action"
                  style={{ cursor: "pointer" }}
                >
                  <div className="row">
                    <div className="col-md-2">
                      <Avatar />
                    </div>
                    <div className="col-md-10">
                      <div className="name">Any Name</div>
                      <div className="under-name">
                        {" "}
                        This is some msg text...
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 pl-0 pr-0">
          <div id="chatPanel" className="card">
            <div className="card-header">
              <div className="row size">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1">
                  <Avatar />
                </div>
                <div className="col-6 col-sm-6 col-md-7 col-lg-9">
                  <div className="name">Any Name</div>
                  <div className="under-name"> Last seen 13/3/2020 9:30 Am</div>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-2 icon">
                  <div className="row">
                    <div className="col-md-4">
                      <i id="closeChat" className="fas fa-times-circle" />
                    </div>
                    <div className="col-md-4">
                      <i id="call" className="fas fa-phone-alt " />
                    </div>
                    <div className="col-md-4">
                      <i id="info" className="fas fa-info-circle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body" id="messages">
              <div className="row">
                <div className="col-2 col-sm-1 col-md-1">
                  <Avatar />
                </div>
                <div className="col-6 col-sm-7 col-md-7">
                  <p className="recieve">
                    This is some text from anywhere{" "}
                    <span className="time float-right">7:30 AM</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <form className="input-area">
                <input
                  type="text"
                  name
                  id="txtMessage"
                  onclick="OnKeyDown()"
                  placeholder="Type here.."
                />
                <button className="emoji-btn">🌝</button>
                <button onclick="SendMessage()" className="submit" id="send">
                  <i className="material-icons"> send</i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-3 pl-0">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading-1">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse-1"
                  aria-expanded="false"
                  aria-controls="flush-collapse-1"
                  style={{
                    outline: "none",
                    textDecoration: "none",
                    boxShadow: "none",
                  }}
                >
                  <i className="fas fa-address-book"> Profile</i>
                </button>
              </h2>
              <div
                id="flush-collapse-1"
                className="accordion-collapse collapse"
                aria-labelledby="flush-heading-1"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="name"
                        defaultValue="Any Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="abc@gmail.com"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone No.</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder={9999999999}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading-2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse-2"
                  aria-expanded="false"
                  aria-controls="flush-collapse-2"
                  style={{
                    outline: "none",
                    textDecoration: "none",
                    boxShadow: "none",
                  }}
                >
                  <i className="fas fa-photo-video"> Shaired Media</i>
                </button>
              </h2>
              <div
                id="flush-collapse-2"
                className="accordion-collapse collapse"
                aria-labelledby="flush-heading-2"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span style={{ fontSize: 14 }}>No record found..</span>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading-3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse-3"
                  aria-expanded="false"
                  aria-controls="flush-collapse-3"
                  style={{
                    outline: "none",
                    textDecoration: "none",
                    boxShadow: "none",
                  }}
                >
                  <i className="fas fa-chalkboard-teacher"> Chat History</i>
                </button>
              </h2>
              <div
                id="flush-collapse-3"
                className="accordion-collapse collapse"
                aria-labelledby="flush-heading-3"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span style={{ fontSize: 14 }}>No previous chat found..</span>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading-4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse-4"
                  aria-expanded="false"
                  aria-controls="flush-collapse-4"
                  style={{
                    outline: "none",
                    textDecoration: "none",
                    boxShadow: "none",
                  }}
                >
                  <i className="fas fa-chart-line"> Channel Timeline</i>
                </button>
              </h2>
              <div
                id="flush-collapse-4"
                className="accordion-collapse collapse"
                aria-labelledby="flush-heading-4"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span style={{ fontSize: 14 }}>No record found..</span>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-heading-5">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse-5"
                  aria-expanded="false"
                  aria-controls="flush-collapse-5"
                  style={{
                    outline: "none",
                    textDecoration: "none",
                    boxShadow: "none",
                  }}
                >
                  <i className="fas fa-user-plus"> Members</i>
                  <i className="fas fa-plus-circle" />
                </button>
              </h2>
              <div
                id="flush-collapse-5"
                className="accordion-collapse collapse"
                aria-labelledby="flush-heading-5"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <span style={{ fontSize: 14 }}>No record found..</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
