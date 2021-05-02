// 'use strict'
import React, { useState } from "react";
import {
  Tab,
  Row,
  Col,
  Nav,
  Modal,
  Button,
  Accordion,
  Card,
  OverlayTrigger,
  Tooltip,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
  Pagination,
  Form,
  Table,
} from "react-bootstrap";
import { SketchPicker } from "react-color";
import ColorPicker from "./ColorPicker";
import Razorpay from "../assets/Images/Razorpay.png";
import Payt from "../assets/Images/Payt.png";
import stripe from "../assets/Images/stripe.png";
import commerce from "../assets/Images/commerce.png";
// import Allusers from "./components/Settings/Allusers";

const ActiveContent = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [agent, setAgent] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5252/api/getagent")
      .then((res) => res.json())
      .then(({ agent }) => {
        setAgent(agent);
      });
  }, []);
  return (
    <div>
      <div>
        <div className="ml-0">
          <Table
            responsive
            hover
            size="sm"
            style={{ width: 1200 }}
            className="text-center"
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th>Tag</th>
                <th>Grouping Tag</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {agent.map((u) => (
                <tr>
                  <td>{u.sno}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{u.role}</td>
                  <td>{u.tags}</td>
                  <td>{u.groupingtag}</td>
                  <td>{u.status}</td>
                  <td>{u.action}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="flex justify-between m-4 items-center">
          <div>
            <p className="text-gray-700 font-semibold text-sm">
              Showing 1 to 37 of 37 entries
            </p>
          </div>
          <div>
            <Pagination>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Item></Pagination.Item>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};
const InActiveContent = () => {
  const [agent, setAgent] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5252/api/getagent")
      .then((res) => res.json())
      .then(({ agent }) => {
        setAgent(agent);
      });
  }, []);

  return (
    <div>
      <div className="h-full mt-2">
        <div className="mt-0">
          <Table
            responsive
            hover
            size="sm"
            style={{ width: 1200 }}
            className="text-center"
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th>Tag</th>
                <th>Grouping Tag</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {agent.map((u) => (
                <tr>
                  <td>{u.sno}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{u.role}</td>
                  <td>{u.tagg}</td>
                  <td>{u.group}</td>
                  <td>{u.status}</td>
                  <td>{u.action}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="flex justify-between m-4 items-center">
          <div>
            <p className="text-gray-700 font-semibold text-sm">
              Showing 1 to 37 of 37 entries
            </p>
          </div>
          <div>
            <Pagination>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Item></Pagination.Item>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};
const Invited = () => {
  const [agent, setAgent] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5252/api/getagent")
      .then((res) => res.json())
      .then(({ agent }) => {
        setAgent(agent);
      });
  }, []);

  return (
    <div>
      <div className="h-full mt-2">
        <div className="mt-0">
          <Table
            responsive
            hover
            size="sm"
            style={{ width: 1200 }}
            className="text-center"
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th>Tag</th>
                <th>Grouping Tag</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {agent.map((u) => (
                <tr>
                  <td>{u.sno}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{u.role}</td>
                  <td>{u.tags}</td>
                  <td>{u.groupingtag}</td>
                  <td>{u.status}</td>
                  <td>{u.action}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="flex justify-between m-4 items-center">
          <div>
            <p className="text-gray-700 font-semibold text-sm">
              Showing 1 to 37 of 37 entries
            </p>
          </div>
          <div>
            <Pagination>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Item></Pagination.Item>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};
function ImportModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Invite Member
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>INVITE TEAM MEMBERS (AGENTS/ADMIN)</span>

        {/* <a href="sample.csv">Click here</a> */}
        {/* <span>to download CSV file template with sample values.</span> <br /> */}
        <br />
        <form>
          <input
            type="text"
            placeholder="To invite multiple members,enter email ids seperated by comma or space"
          />
          {/* <input type="submit" /> */}
          <span style={{ color: "lightgray" }}>PERMISSION</span>
          <br></br>

          <span>Invite with full access(Admin)</span>
          <br></br>
          <span>Invite with restricted access(agent)</span>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            textDecoration: "none",
            outline: "none",
            boxShadow: "none",
            fontSize: 14,
          }}
        >
          Invite
        </button>
      </Modal.Footer>
    </Modal>
  );
}
function ExportModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Export Data
        </Modal.Title>
      </Modal.Header>

      <form>
        <Modal.Body>
          <input
            type="email"
            name="emailExport"
            placeholder="Enter your email address"
            style={{
              border: "1px solid black",
              borderRadius: 5,
              width: "90%",
              textDecoration: "none",
              boxShadow: "none",
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cancel</Button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              textDecoration: "none",
              outline: "none",
              boxShadow: "none",
              fontSize: 14,
            }}
          >
            Export
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

function AddModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Channel
        </Modal.Title>
      </Modal.Header>

      <form>
        <Modal.Body>
          <span style={{ fontSize: "14px", paddingRight: 10 }}>
            Channel Name
          </span>
          <br />
          <input
            type="text"
            name="sagmentName"
            placeholder="Enter new Channel"
            style={{
              border: "1px solid black",
              textDecoration: "none",
              width: "50%",
              boxShadow: "none",
              paddingLeft: 10,
            }}
          />
          <br />
          <br />
          <span style={{ fontSize: "14px", paddingRight: 10 }}>Icon</span>
          <span>(Image should beof the minimum 90x90)</span>
          <br />{" "}
          <img
            src="/images/razorpay.jpg"
            alt=""
            style={{ height: "50px", width: "35px" }}
          />
          <Button
            style={{ textDecoration: "none", outline: "none", fontSize: 14 }}
          >
            Upload icon
          </Button>
          <br /> <span>WELCOME MESSAGE</span>
          <input type="text"></input>
          {/* <span>CHOOSE BOT GROUP</span> */}
          <br />
          <br />
          <label htmlFor="Lanuages">CHOOSE BOT GROUP</label>
          <br />
          <select
            id="LANGUAGES"
            style={{
              marginRight: "1%",
              width: "60%",
              height: "5%",
              borderColor: "lightgrey",
            }}
            placeholder="English"
            disaled
          >
            <option value="LANGUAGES">-None-</option>
            <option value="skp">hindi</option>
            <option value="skp">malay</option>
            <option value="skp">french</option>
          </select>
          <br />
          <br />
          <label htmlFor="Lanuages">APP TYPE</label>
          <br />
          <select
            id="LANGUAGES"
            style={{
              marginRight: "1%",
              width: "60%",
              height: "5%",
              borderColor: "lightgrey",
            }}
            placeholder="English"
            disaled
          >
            <option value="LANGUAGES">All</option>
            <option value="skp">hindi</option>
            <option value="skp">malay</option>
            <option value="skp">french</option>
          </select>
          <br />
          <br /> <span>website Url</span>
          {/* <InputGroup className="mb-3"> */}
          <InputGroup size="sm" style={{ marginRight: "10px" }}>
            <span>all</span>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <span>is</span>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <span>contains</span>
            <InputGroup.Radio aria-label="Radio button for following text input" />
          </InputGroup>
          {/* <button type="submit" className="btn btn-primary"></button> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              textDecoration: "none",
              outline: "none",
              boxShadow: "none",
              fontSize: 14,
            }}
          >
            Submit
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default function Settings() {
  const [addshow, setAddShow] = React.useState(false);
  const [color, setColor] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [exportShow, setExportShow] = React.useState(false);
  const [agent, setAgent] = React.useState([]);
  const [currency, setCurrency]=React.useState();
  const [addplan,setAddplan]= React.useState();

  const exportfile = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export Agents List
    </Tooltip>
  );

  const handleInput = (e) => {
    setColor(e.target.value);
  };
  const Currency = () =>{
    setCurrency(!currency);
  }
  const AddPlan = () =>{
    setAddplan(!addplan);
  }

  React.useEffect(() => {
    fetch("http://localhost:5252/api/getAgent")
      .then((res) => res.json())
      .then(({ agent }) => {
        setAgent(agent);
      });
  }, []);
  return (
    
    <div className="container-fluid bg-white setting users">
      
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
        <Row>
          <Col sm={3}>
            <div className="card" style={{ height: 44 }}>
              <div className="card-header">Settings</div>
            </div>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="1">
                  <i className="fas fa-comment-dots"></i>All Users{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">
                  <i className="fas fa-user-tie"></i>Visitor Info
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">
                  <i className="fab fa-stack-exchange"></i>Default Channel
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">
                  <i className="fas fa-circle-notch"></i>Web Widget Appearance
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">
                  {" "}
                  <i className="fas fa-star-half-alt"></i>Automated Visitor
                  Messages
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="6">
                  {" "}
                  <i className="far fa-clock"></i>Office Hours
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="7">
                  {" "}
                  <i className="fas fa-clipboard-check"></i>Saved Replies
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="8">
                  <i className="fas fa-user-tie"></i>Business Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="9">
                  <i className="fas fa-puzzle-piece"></i>Add-Ons
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="10">
                  <i className="far fa-folder"></i>User Rights
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="11">
                  {" "}
                  <i className="fas fa-ticket-alt"></i>Ticket Support
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="12">
                  <i className="fas fa-tags"></i>Muli Channel Messaging
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="13">
                  <i className="fas fa-puzzle-piece"></i>Business Payments Plans
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="14">
                  <i className="fas fa-puzzle-piece"></i>SMS Settings
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="15">
                  {" "}
                  <i className="fas fa-puzzle-piece"></i>Payment Methods
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {/*all users  */}
              <Tab.Pane eventKey="1">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div className="row " style={{ marginBottom: 0 }}>
                        <span style={{ fontWeight: "bold" }}>Agents</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-9">
                          {/* style="margin-top: 0; display: flex;"> */}
                          <div className="search">
                            <button>
                              <i className="fa fa-search" />
                            </button>
                            <input type="text" placeholder="Search" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <OverlayTrigger overlay={exportfile}>
                            <button
                              className="btn btn-info"
                              onClick={() => setExportShow(true)}
                              style={{
                                boxShadow: "none",
                                border: "none",
                                backgroundColor: "white",
                              }}
                            >
                              <i
                                className="fas fa-clone"
                                style={{ fontSize: 24, padding: 5 }}
                              />
                            </button>
                          </OverlayTrigger>
                          ,
                          <ExportModal
                            show={exportShow}
                            onHide={() => setExportShow(false)}
                          />
                          <button
                            type="button"
                            className="btn btn-info"
                            onClick={() => setModalShow(true)}
                            style={{ marginLeft: 10 }}
                          >
                            Invite Members
                          </button>
                          <ImportModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </div>
                      </div>
                      <hr style={{ marginTop: 0 }} />
                      {/* <div className="h-20 shadow-lg m-4 border border-blue-600"> */}
                      <Tab.Container defaultActiveKey="first">
                        <div>
                          <Nav className="flex-row">
                            <Nav.Item>
                              <Nav.Link
                                eventKey="first"
                                className="font-bold text-base rounded focus:outline-none ml-4 mt-4 hover:underline"
                              >
                                Active
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                eventKey="second"
                                className="font-bold text-base rounded focus:outline-none ml-4 mt-4 hover:underline"
                              >
                                Inactive
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                eventKey="third"
                                className="font-bold text-base rounded focus:outline-none ml-4 mt-4 hover:underline"
                              >
                                Invited
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                        <div>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <ActiveContent />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <InActiveContent />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              <Invited />
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Tab.Container>
                    </div>

                    {/* </div> */}
                  </div>
                </div>
              </Tab.Pane>

              {/* visitor */}
              <Tab.Pane eventKey="2">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div className="row">
                        <div className="row">Display Visitor Info</div>
                      </div>
                    </div>
                    <div className="card-body" style={{ padding: "0%" }}>
                      <div
                        className="row"
                        style={{ padding: 10, paddingBottom: "0%" }}
                      >
                        <div className="col-md-3">UTM Source</div>
                        <div className="col-md-3">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                        <div className="col-md-4">UTM Medium</div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ padding: 10, paddingBottom: "0%" }}
                      >
                        <div className="col-md-3">Product</div>
                        <div className="col-md-3">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                        <div className="col-md-4">Continent Code</div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ padding: 10, paddingBottom: "0%" }}
                      >
                        <div className="col-md-3">Referrer</div>
                        <div className="col-md-3">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                        <div className="col-md-4">Vertical Page</div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ padding: 10, paddingBottom: "0%" }}
                      >
                        <div className="col-md-3">Previous Page</div>
                        <div className="col-md-3">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                        <div className="col-md-4">UTM Term</div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ padding: 10, paddingBottom: "0%" }}
                      >
                        <div className="col-md-3">Web Referrer</div>
                        <div className="col-md-3">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                        <div className="col-md-4">UTM Old Source</div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ padding: 10, paddingBottom: "0%" }}
                      >
                        <div className="col-md-3">Old Campaign</div>
                        <div className="col-md-3">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                        <div className="col-md-4">Current Campaign</div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ padding: 10, paddingBottom: "0%" }}
                      >
                        <div className="col-md-3">Session Ip</div>
                        <div className="col-md-3">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                        <div className="col-md-4">UTM Content</div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ padding: 10, paddingBottom: "0%" }}
                      >
                        <div className="col-md-3">UTM Old Medium</div>
                        <div className="col-md-3">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                        <div className="col-md-4">Gclid</div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              {/*default channel*/}
              <Tab.Pane eventKey="3">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div className="row" style={{ marginBottom: 0 }}>
                        <span style={{ fontWeight: "bold" }}>
                          Default Channels
                        </span>
                      </div>
                    </div>
                    <div
                      className="card-body"
                      style={{ padding: 0, marginTop: 15 }}
                    >
                      <div className="row">
                        <div className="col-md-9" style={{ marginLeft: 10 }}>
                          {/* style="margin-top: 0; display: flex;"> */}
                          <div className="search">
                            <button>
                              <i className="fa fa-search" />
                            </button>
                            <input type="text" placeholder="Search" />
                          </div>
                        </div>
                        <div
                          className="col-md-3"
                          style={{ marginLeft: "-10px" }}
                        >
                          <button
                            type="button"
                            onClick={() => setAddShow(true)}
                            className="btn btn-info"
                            data-toggle="modal"
                            data-target="#myModal"
                            style={{ marginLeft: 10 }}
                          >
                            Add Channel
                          </button>
                          <AddModal
                            show={addshow}
                            onHide={() => setAddShow(false)}
                          />
                        </div>
                        <div
                          className="table-responsive"
                          style={{ height: "80%", overflow: "auto" }}
                        >
                          <table className="table table-hover">
                            <thead>
                              <tr className="red">
                                <th>Status</th>
                                <th>Id</th>
                                <th>Icon</th>
                                <th>Name</th>
                                <th>Welcome Message</th>
                                <th>Bot Group ID</th>
                                <th>Bot Group ID</th>
                              </tr>
                            </thead>
                          </table>
                          No record found...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              {/* web widget appearance */}
              <Tab.Pane eventKey="4">
                <div className="mt-12">
                  <ColorPicker value={color} onChange={handleInput} />
                </div>
              </Tab.Pane>
              {/* <ColorPicker value={colorpicker} onChange={handleInput}/> */}
              {/*                       
                       <DropdownButton>
                            <Dropdown.Item>
                            <div>
                            <SketchPicker
                            color={color}
                            onChangeComplete={ (color) =>
                            {setColor(color.hex)} } 
                            />
                             <div style={{
                            backgroundColor: color,
                             height:'300px',
                             transition:'ease all 500ms'
                             }}>
                                hello world
                            
                             </div>
                         </div> 
          
                        </Dropdown.Item>  */}
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
              {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
              {/* </DropdownButton>
</Tab.Pane> */}
              {/* dropdown */}

              <Tab.Pane eventKey="5">hi</Tab.Pane>
              <Tab.Pane eventKey="6">hi2</Tab.Pane>
              <Tab.Pane eventKey="7">hi</Tab.Pane>
              <Tab.Pane eventKey="8">
                {/* Business Profile */}
                <div>
                  <div className="card" style={{ padding: 2 }}>
                    <div className="card-body" style={{ overflow: "scroll" }}>
                      <span>
                        Business Logo (Image should be of the minimum 90x90
                        pixels)
                      </span>
                      <br /> <span>eboyo image</span>
                      <br />
                      <br />{" "}
                      <button
                        type="submit"
                        className="m-2 h-8 w-40"
                        style={{ backgroundColor: "blue", borderRadius: 5 }}
                      >
                        Edit Your Profile
                      </button>
                      <br />
                      <br />
                      <label>BUSINESS ID</label>
                      <br />{" "}
                      <input
                        type="text"
                        style={{ width: "60%" }}
                        placeholder={1412345}
                        disabled
                      />
                      <br />
                      <br />
                      <label>BUSINESS NAME</label>
                      <br />{" "}
                      <input
                        type="text"
                        style={{ width: "60%" }}
                        placeholder="eBOYO"
                        disabled
                      />
                      <br />
                      <br />
                      <label>CONTACT NAME</label>
                      <br />{" "}
                      <input
                        type="text"
                        style={{ width: "60%" }}
                        placeholder="CUSTOMER SUPPORT eBOYO"
                        disabled
                      />
                      <br />
                      <br />
                      <label>BUSINESS profile link</label>{" "}
                      <i id="info" className="fas fa-info-circle" />
                      <br />{" "}
                      <input
                        type="text"
                        style={{ width: "45%", marginRight: "5%" }}
                        placeholder="eBOYO"
                        disabled
                      />
                      <input
                        type="text"
                        placeholder=".hippochat.io"
                        style={{ width: "15%", marginLeft: "-5.5%" }}
                      />
                      <br />
                      <span>Share your business profile link:</span>
                      <span style={{ color: "blue" }}>eboyo.hippochat.io</span>
                      <br />
                      <br />
                      <label>PHONE NUMBER</label>
                      <br />{" "}
                      <input
                        type="text"
                        style={{ width: "60%" }}
                        placeholder={123456}
                        disabled
                      />
                      <br />
                      <br />
                      <label>ADDRESS</label>
                      <br />{" "}
                      <input
                        type="text"
                        style={{ width: "60%" }}
                        placeholder="Enter your Address"
                        disabled
                      />
                      <br />
                      <br />
                      <label htmlFor="Lanuages"> CHOOSE LANUAGE</label>
                      <br />
                      <select
                        id="LANGUAGES"
                        style={{
                          marginRight: "1%",
                          width: "60%",
                          height: "5%",
                          borderColor: "lightgrey",
                        }}
                        placeholder="English"
                        disaled
                      >
                        <option value="LANGUAGES">English</option>
                        <option value="skp">hindi</option>
                        <option value="skp">malay</option>
                        <option value="skp">french</option>
                      </select>
                      <br />
                      <br />
                      <label htmlFor="Lanuages"> DEFAULT LANUAGE</label>
                      <br />
                      <select
                        id="LANGUAGES"
                        style={{
                          marginRight: "1%",
                          width: "60%",
                          height: "5%",
                          borderColor: "lightgrey",
                        }}
                        placeholder="English"
                        disaled
                      >
                        <option value="LANGUAGES">English</option>
                        <option value="skp">hindi</option>
                        <option value="skp">malay</option>
                        <option value="skp">french</option>
                      </select>
                      <br />
                      <br />
                      <button
                        type="submit"
                        style={{ backgroundColor: "lightgrey" }}
                      >
                        cancel
                      </button>
                      <button type="submit" style={{ backgroundColor: "blue" }}>
                        submit
                      </button>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n        input[type="text"]::placeholder{\n          text-align:left;\n        }\n      ',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="9">
                {/* add ons */}
                <div>
                  <div className="card" style={{ overflow: "scroll" }}>
                    <div className="card-header">
                      <span style={{ fontSize: "medium", fontWeight: "bold" }}>
                        Additonal Features
                      </span>
                    </div>
                    <div className="card-body" style={{ padding: "0%" }}>
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Auto assignment</b>
                        </div>
                        <div className="col-md-7">
                          No more hassles to assign new incoming chat. Activate
                          this feature to enable auto assignment of chats to
                          available agents based on smart load-balancing
                          algorithm.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Agent to customer chat</b>
                        </div>
                        <div className="col-md-7">
                          Agents can initiate chats with customers.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Show default channels</b>
                        </div>
                        <div className="col-md-7">
                          Show default channels for visitors in web widget. For
                          logged in users default channels are always displayed
                          in the widget.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Jchat Tickets</b>
                        </div>
                        <div className="col-md-7">
                          Administrator can give Ticket support to customers to
                          provide the appropriate solution to their problems by
                          Integrating with Bulbul. It allows Administrator to
                          easily add/update/delete the content of Tickets.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Buldul Deal</b>
                        </div>
                        <div className="col-md-7">
                          Administrator can make deals and manage it on powerful
                          sales CRM i.e. Bulbul.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Upscope Integration</b>
                        </div>
                        <div className="col-md-7">
                          Upscope is a screensharing tool built into your
                          website. This add-on will allow screen sharing to your
                          agents.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Edit User Info</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Audio/Video Call for Customers</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Audio Call for Agents</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Video Call for Agents</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Accept Online Payments</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Restrict Personal Information</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Enale Announcement Push Notifications</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>P2P Chats</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Admin-Merchant/Manager Chats</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Show Chat Tags</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>ERPNext CRM</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>ERPNext Ticket Support</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>E-Form</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Hide Support Widget</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="row"
                        style={{ marginTop: 15, fontSize: 15 }}
                      >
                        <div className="col-md-3">
                          <b>Feedack After Closing Chat</b>
                        </div>
                        <div className="col-md-7">
                          Only administrator can add/edit user info.
                        </div>
                        <div className="col-md-2">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="10">
                {/* user rights */}
                <div>
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      marginTop: "15%",
                    }}
                  >
                    {" "}
                    User Rights
                  </span>
                  <br />
                  <br />{" "}
                  <span style={{ fontSize: "large" }}>
                    We take security seriously here at Hippo, and are proud to
                    exceed the industry standard when it comes to protecting
                    your personal information.
                  </span>
                  <div
                    className="container"
                    style={{ borderColor: "white", borderRadius: 2 }}
                  >
                    <br />
                    <select
                      id="LANGUAGES"
                      style={{
                        marginRight: "1%",
                        width: "30%",
                        height: "5%",
                        borderColor: "lightgrey",
                      }}
                      placeholder="English"
                      disaled
                    >
                      <option value="LANGUAGES">English</option>
                      <option value="skp">hindi</option>
                      <option value="skp">malay</option>
                      <option value="skp">french</option>
                    </select>
                    <br />
                    <br />
                    <input type="text" placeholder="Add another email id" />
                    <br />
                    <br />
                    <input type="text" placeholder="Reason" />
                    <br />
                    <br />
                    <button type="submit" style={{ backgroundColor: "blue" }}>
                      Submit
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="11">
                {/* ticket support */}
                hi
              </Tab.Pane>
              <Tab.Pane eventKey="12">
                {/* multichael msg */}
                hi2
              </Tab.Pane>
              <Tab.Pane eventKey="13">
                {/* business payment plans*/}
                <div className="mt-4" style={{ fontSize: "24px"}}>
                  Payment Plans
                </div>
                <button onClick={AddPlan}
          className="hover:bg-red-200 ml-2  mb-4 mt-4 text-center shodow-xl w-20 rounnded-full  h-8 text-white rounded focus:outline-none bg-blue-600"
          // style={{right:12,position:"absolute"}}
        >+Add Plan</button>
        {addplan ? (<div>
          <div className="border-1 border-gray-200 w-scree">
            <div className="m-1">PLAN NAME</div>
            <div className="p-1"><input type="text" className="w-full focus:ring-2 focus:ring-blue-600 "></input></div>
         <div className="m-2 border-1 border-gray-100 rounded-sm">
           <div className="flex">
             <div className="w-screen">
               <div className="m-1">TITLE</div>
               <div className="p-1"><input type="text" className="w-full focus:ring-2 focus:ring-blue-600 "></input></div>
             </div>
             <div className="w-screen">
               <div className="m-1">Amount</div>
               <div className="p-1"><input type="text" className="w-full focus:ring-2 focus:ring-blue-600 "></input></div>
             </div>
           
           </div>
           <div>
             <div className="m-1">Description</div>
            <div className="p-1"><input type="text" className="w-full focus:ring-2 focus:ring-blue-600 "></input></div>
            </div>
          
         </div>
          <button onClick={AddPlan}
          className="hover:bg-red-200 ml-2  mb-4 mt-4 text-center shodow-xl w-20 rounnded-full  h-8 text-white rounded focus:outline-none bg-blue-600"
          // style={{right:12,position:"absolute"}}
        >Add Plan</button>
        
          </div>
          <button
          className=" ml-2  mb-4 mt-4 text-center shodow-xl w-20 rounnded-full  h-8 text-white rounded focus:outline-none bg-gray-400"
          // style={{right:12,position:"absolute"}}
        >Cancel</button>
        <button
          className=" ml-2  mb-4 mt-4 text-center shodow-xl w-20 rounnded-full  h-8 text-white rounded focus:outline-none bg-blue-600"
          // style={{right:12,position:"absolute"}}
        >Save</button>
        
        
        </div>):null}
      
               </Tab.Pane>
              <Tab.Pane eventKey="14">
                {/* sms settig */}
                <div>
                <div className="font-semibold text-xl m-2 ">SMS</div>
                  <div className="ml-2 font-normal">
                    Complete flexibility over SMS sending options. Choose
                    between multiple SMS gateways available for ready use or
                    else configure Hippo SMS Service here.
                    </div>
                    <div className="m-2 ">
                    <label>Choose Your SMS gateway:</label>
                    <select
                    id="LANGUAGES"
                    className=" mt-2 ml-1  w-96 h-8 border-1 border-gray-300 rounded-sm"
                   >
                    <option value="LANGUAGES">English</option>
                    <option value="skp">hindi</option>
                    <option value="skp">malay</option>
                    <option value="skp">french</option>
                  </select>
               
                    </div>
                   
                  <div className="border-1 border-gray-200 rounded-lg m-1">
                   <div className="m-2   p-2">
                    To configure your Bumbl SMS service, refer to your Bumbl
                    dashboard and recharge the wallet to send SMS to the users
                    across globe. <span className="text-blue-600">Go to Bumbl Dashboard</span></div>
                    <div className=" mt-4">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
          <div className="flex">
          <Form.Label>API Key</Form.Label>
          <div className="text-red-400"><Form.Label>*</Form.Label></div></div>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="13b2e8e2a8a4bcc7a3b15c796472a40c"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <button
          className="mt-4 ml-4 mb-4  text-center shodow-xl w-16 h-8 text-white rounded focus:outline-none bg-blue-600"
          // style={{right:12,position:"absolute"}}
        >Save</button>
      
       
          </div>

          
          </div>
        
                      {/* <div className="flex">
                    <div className="ml-2 flex text-gray-600">API Key</div>
                  <div className="" style={{ color: "red" }}>*</div></div>
                 <div className="w-96"><input style={{defaultValue:"mark"}} className="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent ... ml-1  border-1 border-gray-200 rounded-sm" type="text" /> 
                </div>
                    </div>
                    </div>
                  </div> */}
                 </div>
              </Tab.Pane>
              <Tab.Pane eventKey="15">
                {/* payment methods */}
                <div className="m-8">Configure your business currencies</div>
                <div className="m-2  border-1 border-gray-300">
                  <div className="ml-4 mr-4 mt-4">Select Currencies</div>
                  <div>
                    <div onClick={Currency} className="border-1 border-gray-200 p-2 mt-2 ml-2 w-96 mb-2">currecy</div>
                  {currency ? (
                    <div>
                      <div className="flex">
                        <div> <Form.Check aria-label="option 1"/></div>
                        <div> <Form.Check aria-label="option 1"/></div>
                        <div> <Form.Check aria-label="option 1"/></div>
                        <div> <Form.Check aria-label="option 1"/></div>
                   </div>
                   </div>
                  ):null}
                   </div>
                </div>
                <div>
                  <div className="ml-2 mt-4 mb-2  text-2xl font-semibold">
                    Payment Methods
                  </div>
                  <div>Configure Your payment methods.</div>
                </div>
                <div className="border-1 border-gray-300 ml-2 mr-2 mt-4 p-4">
                  <div className="flex space-x-16 ">
                    <div className="box border-1 border-gray-200 p-4 ">
                      <div className="flex">
                        <div><img className="w-24" src={Razorpay} alt="" />
                   </div>
                        <div>
                          {" "}
                          <label className="switch ml-4">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>{" "}
                      </div>
                      </div>
                      <div className="font-semibold text-lg mt-12">Razorpay</div>
                      <div className="text-gray-400 w-40 flex justif-center">
                        Configure Razorpay to accept payment from customers
                      </div>
                    </div>

                    <div>  <div className="box border-1 border-gray-200 p-4 ">
                      <div className="flex">
                        <div><img className="w-24" src={Payt} alt="" />
                   </div>
                        <div>
                          {" "}
                          <label className="switch ml-4">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>{" "}
                        </div>
                      </div>
                      <div className="font-semibold text-lg mt-">paytm</div>
                      <div className="text-gray-400 w-40 flex justif-center">
                        Configure Razorpay to accept payment from customers
                      </div>
                    </div>
</div>
                    <div>  <div className="box border-1 border-gray-200 p-4 ">
                      <div className="flex">
                        <div><img className="w-24 mt-8  " src={stripe} alt="" />
                   </div>
                        <div>
                          {" "}
                          <label className="switch ml-4">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>{" "}
                        </div>
                      </div>
                      <div className="font-semibold text-lg mt-8">Stripe</div>
                      <div className="text-gray-400 w-40 flex justif-center">
                        Configure Razorpay to accept payment from customers
                      </div>
                    </div>
</div>
                    <div>  <div className="box border-1 border-gray-200 p-4 ">
                      <div className="flex">
                        <div><img className="w-40 " src={commerce} alt="" />
                   </div>
                        <div>
                          {" "}
                          <label className="switch ml-4">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>{" "}
                        </div>
                      </div>
                      <div className="font-semibold text-lg">Razorpay</div>
                      <div className="text-gray-400 w-40 flex justif-center">
                        Configure Razorpay to accept payment from customers
                      </div>
                    </div>
</div>
                  </div>
                  <div className="mt-2 flex space-x-16 ">
                    <div className="box border-1 border-gray-200 p-4 ">
                      <div className="flex">
                        <div><img className="w-24  " src={Razorpay} alt="" />
                   </div>
                        <div>
                          {" "}
                          <label className="switch ml-4">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>{" "}
                        </div>
                      </div>
                      <div className="font-semibold text-lg">Razorpay</div>
                      <div className="text-gray-400 w-40 flex justif-center">
                        Configure Razorpay to accept payment from customers
                      </div>
                    </div>

                    <div>  <div className="box border-1 border-gray-200 p-4 ">
                      <div className="flex">
                        <div><img className="w-24  " src={Razorpay} alt="" />
                   </div>
                        <div>
                          {" "}
                          <label className="switch ml-4">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>{" "}
                        </div>
                      </div>
                      <div className="font-semibold text-lg">Razorpay</div>
                      <div className="text-gray-400 w-40 flex justif-center">
                        Configure Razorpay to accept payment from customers
                      </div>
                    </div>
</div>
                    <div>  <div className="box border-1 border-gray-200 p-4 ">
                      <div className="flex">
                        <div><img className="w-24  " src={Razorpay} alt="" />
                   </div>
                        <div>
                          {" "}
                          <label className="switch ml-4">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>{" "}
                        </div>
                      </div>
                      <div className="font-semibold text-lg">Razorpay</div>
                      <div className="text-gray-400 w-40 flex justif-center">
                        Configure Razorpay to accept payment from customers
                      </div>
                    </div>
</div>
                    <div>  <div className="box border-1 border-gray-200 p-4 ">
                      <div className="flex">
                        <div><img className="w-24  " src={Razorpay} alt="" />
                   </div>
                        <div>
                          {" "}
                          <label className="switch ml-4">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>{" "}
                        </div>
                      </div>
                      <div className="font-semibold text-lg">Razorpay</div>
                      <div className="text-gray-400 w-40 flex justif-center">
                        Configure Razorpay to accept payment from customers
                      </div>
                    </div>
</div>
                  </div>
               
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
