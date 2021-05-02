import React, { useState, useEffect } from "react";
import "./InfoUser.css";
import { useParams } from "react-router-dom";
import db from "./Firebase";
function InfoUser() {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  // useEffect(() => {
  //   if (userId) {
  //     db.collection("users")
  //       .doc(userId)
  //       .onSnapshot((snapshot) => setUser(snapshot.data()));
  //   }
  // }, [userId]);
  return (
    <div className="info_user bg-white shadow-lg">
      <div
        className="accordion accordion-flush shadow-none"
        id="accordionFlushExample"
      >
        <div className="accordion-item ">
          <h2 className="accordion-header " id="flush-heading-1">
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
                    className="form-control-plaintext pl-2 shadow-none"
                    id="name"
                    // defaultValue={user.name}
                    defaultValue="ac"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control pl-2 shadow-none"
                    id="email"
                    aria-describedby="emailHelp"
                    // defaultValue={user.email}
                    defaultValue="sfs@dg"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone No.</label>
                  <input
                    type="text"
                    className="form-control pl-2 shadow-none"
                    id="phone"
                    // defaultValue={user.phone}
                    defaultValue="9855658"
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
  );
}

export default InfoUser;
