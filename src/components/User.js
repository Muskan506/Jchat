import React from "react";
import {
  Button,
  Modal,
  Form,
  Col,
  Row,
  Tab,
  Nav,
  Table,
} from "react-bootstrap";
import "../App.css";
function ImportModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Import Data to Database
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <a href="sample.csv">Click here</a>
        <span>to download CSV file template with sample values.</span> <br />
        <br />
        <form action="/action_page.php" style={{ textAlign: "center" }}>
          <input type="file" id="myFile" name="filename" />
          <input type="submit" />
        </form>
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
function SaveSegment(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Save Segment
        </Modal.Title>
      </Modal.Header>

      <form>
        <Modal.Body style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "14px", paddingRight: 10 }}>
            Create New Segment{" "}
          </span>
          <input
            type="text"
            name="sagmentName"
            placeholder="Enter new segment name"
            style={{
              border: "1px solid black",
              textDecoration: "none",
              width: "50%",
              boxShadow: "none",
              paddingLeft: 10,
            }}
          />
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
function SendMessage(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Conversations
        </Modal.Title>
      </Modal.Header>

      <form>
        <Modal.Body>
          <Form.Group as={Row} controlId="exampleForm.ControlInput1">
            <Form.Label column sm="1" style={{ paddingRight: 0 }}>
              To:
            </Form.Label>
            <Col sm="11" style={{ paddingLeft: 0 }}>
              <Form.Control plaintext readOnly defaultValue="Any Name" />
            </Col>
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter message title"
              required
              style={{
                border: 0,
                textDecoration: "none",
                outline: "none",
                boxShadow: "none",
                fontSize: 14,
              }}
            />
          </Form.Group>
          <hr />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={8}
              style={{
                border: 0,
                textDecoration: "none",
                outline: "none",
                boxShadow: "none",
                fontSize: 14,
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
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
            Send
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
export default function Users() {
  const [modalShow, setModalShow] = React.useState(false);
  const [exportShow, setExportShow] = React.useState(false);
  const [segmentShow, setSegmentShow] = React.useState(false);
  const [sendMsgShow, setSendMsgShow] = React.useState(false);
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5252/api/getuser")
      .then((res) => res.json())
      .then(({ user }) => {
        setUser(user);
      });
  }, []);

  return (
    <div className="container-fluid bg-white users">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} style={{ paddingRight: 0 }}>
            <div className="card" style={{ height: 44 }}>
              <div className="card-header">Segments</div>
            </div>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">All Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Web Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Mobile Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">New Users</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} style={{ paddingLeft: 0 }}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div style={{ paddingLeft: 0 }}>
                  <div className="card">
                    <div className="card-header">
                      <div className="row" style={{ marginBottom: 0 }}>
                        <span style={{ fontWeight: "bold" }}>All Users</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div
                          className="col-md-10"
                          style={{ display: "flex", margin: "top 0" }}
                        >
                          <button
                            className="btn btn-link btn-color font-bold btn-click-outside"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                          >
                            +Add filter
                          </button>
                          <button
                            className="btn btn-link btn-color font-bold btn-click-outside"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setSegmentShow(true)}
                          >
                            Save Segment
                          </button>
                          <SaveSegment
                            show={segmentShow}
                            onHide={() => setSegmentShow(false)}
                          />
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn btn-light"
                            style={{
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setModalShow(true)}
                          >
                            <i className="fas fa-file-csv" />
                            Upload CSV File
                          </button>
                          <ImportModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </div>
                      </div>
                      <hr style={{ margin: 10 }} />
                      <div className="row">
                        <div className="col-md-2">12345 MATCHES</div>
                        <div className="col-md-8" id="msgAll">
                          <Button
                            variant="outline-primary"
                            id="msgAll"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setSendMsgShow(true)}
                          >
                            <i className="fas fa-paper-plane" /> Send messages
                            to all
                          </Button>
                          <SendMessage
                            show={sendMsgShow}
                            onHide={() => setSendMsgShow(false)}
                          />
                        </div>
                        <div
                          className="col-md-8"
                          id="msg"
                          style={{ display: "none" }}
                        >
                          <Button
                            variant="outline-primary"
                            id="msg"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                          >
                            <i className="fas fa-paper-plane" /> Send message
                          </Button>
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn btn-light"
                            style={{
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                              fontSize: 14,
                              float: "right",
                              marginRight: 10,
                            }}
                            onClick={() => setExportShow(true)}
                            title="Export"
                          >
                            <i
                              className="fa fa-file"
                              style={{ paddingLeft: 8 }}
                            />
                          </button>
                          <ExportModal
                            show={exportShow}
                            onHide={() => setExportShow(false)}
                          />
                        </div>
                      </div>
                      <br />
                      <div style={{ height: "80%", overflow: "auto" }}>
                        <Table
                          style={{ width: 3000 }}
                          bordered
                          hover
                          responsive
                          size="sm"
                        >
                          <thead className="thead-dark">
                            <tr
                              className="red"
                              style={{ height: 50, textAlign: "center" }}
                            >
                              <th>
                                <input type="checkbox" />
                              </th>
                              <th>Email</th>
                              <th>Name</th>
                              <th>Phone Number</th>
                              <th>Created At</th>
                              <th>Unique ID</th>
                              <th>Device Type</th>
                              <th>Group Tag Name</th>
                              <th>Ip Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user.map((u) => (
                              <tr style={{ height: 50, textAlign: "center" }}>
                                <td style={{ paddingTop: 15, width: 80 }}>
                                  <input type="checkbox" />
                                </td>
                                <td style={{ paddingTop: 15 }}>{u.email}</td>
                                <td style={{ paddingTop: 15 }}>{u.name}</td>
                                <td style={{ paddingTop: 15 }}>{u.phone}</td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.createdAt}
                                </td>
                                <td style={{ paddingTop: 15 }}>{u._id}</td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.deviceType}
                                </td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.groupTagName}
                                </td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.ipAddress}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div style={{ paddingLeft: 0 }}>
                  <div className="card">
                    <div className="card-header">
                      <div className="row" style={{ marginBottom: 0 }}>
                        <span style={{ fontWeight: "bold" }}>Web Users</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div
                          className="col-md-10"
                          style={{ display: "flex", margin: "top 0" }}
                        >
                          <button
                            className="btn btn-link btn-color font-bold btn-click-outside"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                          >
                            +Add filter
                          </button>
                          <button
                            className="btn btn-link btn-color font-bold btn-click-outside"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setSegmentShow(true)}
                          >
                            Save Segment
                          </button>
                          <SaveSegment
                            show={segmentShow}
                            onHide={() => setSegmentShow(false)}
                          />
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn btn-light"
                            style={{
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setModalShow(true)}
                          >
                            <i className="fas fa-file-csv" />
                            Upload CSV File
                          </button>
                          <ImportModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </div>
                      </div>
                      <hr style={{ margin: 10 }} />
                      <div className="row">
                        <div className="col-md-2">12345 MATCHES</div>
                        <div className="col-md-8" id="msgAll">
                          <Button
                            variant="outline-primary"
                            id="msgAll"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setSendMsgShow(true)}
                          >
                            <i className="fas fa-paper-plane" /> Send messages
                            to all
                          </Button>
                          <SendMessage
                            show={sendMsgShow}
                            onHide={() => setSendMsgShow(false)}
                          />
                        </div>
                        <div
                          className="col-md-8"
                          id="msg"
                          style={{ display: "none" }}
                        >
                          <Button
                            variant="outline-primary"
                            id="msg"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                          >
                            <i className="fas fa-paper-plane" /> Send message
                          </Button>
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn btn-light"
                            style={{
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                              fontSize: 14,
                              float: "right",
                              marginRight: 10,
                            }}
                            onClick={() => setExportShow(true)}
                            title="Export"
                          >
                            <i
                              className="fa fa-file"
                              style={{ paddingLeft: 8 }}
                            />
                          </button>
                          <ExportModal
                            show={exportShow}
                            onHide={() => setExportShow(false)}
                          />
                        </div>
                      </div>
                      <br />
                      <div style={{ height: "80%", overflow: "auto" }}>
                        <Table
                          style={{ width: 3000 }}
                          bordered
                          hover
                          responsive
                          size="sm"
                        >
                          <thead className="thead-dark">
                            <tr
                              className="red"
                              style={{ height: 50, textAlign: "center" }}
                            >
                              <th>
                                <input type="checkbox" />
                              </th>
                              <th>Email</th>
                              <th>Name</th>
                              <th>Phone Number</th>
                              <th>Created At</th>
                              <th>Unique ID</th>
                              <th>Device Type</th>
                              <th>Group Tag Name</th>
                              <th>Ip Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user.map((u) => (
                              <tr style={{ height: 50, textAlign: "center" }}>
                                <td style={{ paddingTop: 15, width: 80 }}>
                                  <input type="checkbox" />
                                </td>
                                <td style={{ paddingTop: 15 }}>{u.email}</td>
                                <td style={{ paddingTop: 15 }}>{u.name}</td>
                                <td style={{ paddingTop: 15 }}>{u.phone}</td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.createdAt}
                                </td>
                                <td style={{ paddingTop: 15 }}>{u._id}</td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.deviceType}
                                </td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.groupTagName}
                                </td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.ipAddress}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div style={{ paddingLeft: 0 }}>
                  <div className="card">
                    <div className="card-header">
                      <div className="row" style={{ marginBottom: 0 }}>
                        <span style={{ fontWeight: "bold" }}>Mobile Users</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div
                          className="col-md-10"
                          style={{ display: "flex", margin: "top 0" }}
                        >
                          <button
                            className="btn btn-link btn-color font-bold btn-click-outside"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                          >
                            +Add filter
                          </button>
                          <button
                            className="btn btn-link btn-color font-bold btn-click-outside"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setSegmentShow(true)}
                          >
                            Save Segment
                          </button>
                          <SaveSegment
                            show={segmentShow}
                            onHide={() => setSegmentShow(false)}
                          />
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn btn-light"
                            style={{
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setModalShow(true)}
                          >
                            <i className="fas fa-file-csv" />
                            Upload CSV File
                          </button>
                          <ImportModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </div>
                      </div>
                      <hr style={{ margin: 10 }} />
                      <div className="row">
                        <div className="col-md-2">12345 MATCHES</div>
                        <div className="col-md-8" id="msgAll">
                          <Button
                            variant="outline-primary"
                            id="msgAll"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setSendMsgShow(true)}
                          >
                            <i className="fas fa-paper-plane" /> Send messages
                            to all
                          </Button>
                          <SendMessage
                            show={sendMsgShow}
                            onHide={() => setSendMsgShow(false)}
                          />
                        </div>
                        <div
                          className="col-md-8"
                          id="msg"
                          style={{ display: "none" }}
                        >
                          <Button
                            variant="outline-primary"
                            id="msg"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                          >
                            <i className="fas fa-paper-plane" /> Send message
                          </Button>
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn btn-light"
                            style={{
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                              fontSize: 14,
                              float: "right",
                              marginRight: 10,
                            }}
                            onClick={() => setExportShow(true)}
                            title="Export"
                          >
                            <i
                              className="fa fa-file"
                              style={{ paddingLeft: 8 }}
                            />
                          </button>
                          <ExportModal
                            show={exportShow}
                            onHide={() => setExportShow(false)}
                          />
                        </div>
                      </div>
                      <br />
                      <div style={{ height: "80%", overflow: "auto" }}>
                        <Table
                          style={{ width: 3000 }}
                          bordered
                          hover
                          responsive
                          size="sm"
                        >
                          <thead className="thead-dark">
                            <tr
                              className="red"
                              style={{ height: 50, textAlign: "center" }}
                            >
                              <th>
                                <input type="checkbox" />
                              </th>
                              <th>Email</th>
                              <th>Name</th>
                              <th>Phone Number</th>
                              <th>Created At</th>
                              <th>Unique ID</th>
                              <th>Device Type</th>
                              <th>Group Tag Name</th>
                              <th>Ip Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user.map((u) => (
                              <tr style={{ height: 50, textAlign: "center" }}>
                                <td style={{ paddingTop: 15, width: 80 }}>
                                  <input type="checkbox" />
                                </td>
                                <td style={{ paddingTop: 15 }}>{u.email}</td>
                                <td style={{ paddingTop: 15 }}>{u.name}</td>
                                <td style={{ paddingTop: 15 }}>{u.phone}</td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.createdAt}
                                </td>
                                <td style={{ paddingTop: 15 }}>{u._id}</td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.deviceType}
                                </td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.groupTagName}
                                </td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.ipAddress}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div className="row" style={{ marginBottom: 0 }}>
                        <span style={{ fontWeight: "bold" }}>New Users</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div
                          className="col-md-10"
                          style={{ display: "flex", margin: "top 0" }}
                        >
                          <button
                            className="btn btn-link btn-color font-bold btn-click-outside"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                          >
                            +Add filter
                          </button>
                          <button
                            className="btn btn-link btn-color font-bold btn-click-outside"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setSegmentShow(true)}
                          >
                            Save Segment
                          </button>
                          <SaveSegment
                            show={segmentShow}
                            onHide={() => setSegmentShow(false)}
                          />
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn btn-light"
                            style={{
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setModalShow(true)}
                          >
                            <i className="fas fa-file-csv" />
                            Upload CSV File
                          </button>
                          <ImportModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </div>
                      </div>
                      <hr style={{ margin: 10 }} />
                      <div className="row">
                        <div className="col-md-2">12345 MATCHES</div>
                        <div className="col-md-8" id="msgAll">
                          <Button
                            variant="outline-primary"
                            id="msgAll"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                            onClick={() => setSendMsgShow(true)}
                          >
                            <i className="fas fa-paper-plane" /> Send messages
                            to all
                          </Button>
                          <SendMessage
                            show={sendMsgShow}
                            onHide={() => setSendMsgShow(false)}
                          />
                        </div>
                        <div
                          className="col-md-8"
                          id="msg"
                          style={{ display: "none" }}
                        >
                          <Button
                            variant="outline-primary"
                            id="msg"
                            style={{
                              fontSize: 14,
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                            }}
                          >
                            <i className="fas fa-paper-plane" /> Send message
                          </Button>
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn btn-light"
                            style={{
                              textDecoration: "none",
                              outline: "none",
                              boxShadow: "none",
                              fontSize: 14,
                              float: "right",
                              marginRight: 10,
                            }}
                            onClick={() => setExportShow(true)}
                            title="Export"
                          >
                            <i
                              className="fa fa-file"
                              style={{ paddingLeft: 8 }}
                            />
                          </button>
                          <ExportModal
                            show={exportShow}
                            onHide={() => setExportShow(false)}
                          />
                        </div>
                      </div>
                      <br />

                      <div style={{ height: "80%", overflow: "auto" }}>
                        <Table
                          style={{ width: 3000 }}
                          bordered
                          hover
                          responsive
                          size="sm"
                        >
                          <thead className="thead-dark">
                            <tr
                              className="red"
                              style={{ height: 50, textAlign: "center" }}
                            >
                              <th>
                                <input type="checkbox" />
                              </th>
                              <th>Email</th>
                              <th>Name</th>
                              <th>Phone Number</th>
                              <th>Created At</th>
                              <th>Unique ID</th>
                              <th>Device Type</th>
                              <th>Group Tag Name</th>
                              <th>Ip Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user.map((u) => (
                              <tr style={{ height: 50, textAlign: "center" }}>
                                <td style={{ paddingTop: 15, width: 80 }}>
                                  <input type="checkbox" />
                                </td>
                                <td style={{ paddingTop: 15 }}>{u.email}</td>
                                <td style={{ paddingTop: 15 }}>{u.name}</td>
                                <td style={{ paddingTop: 15 }}>{u.phone}</td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.createdAt}
                                </td>
                                <td style={{ paddingTop: 15 }}>{u._id}</td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.deviceType}
                                </td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.groupTagName}
                                </td>
                                <td style={{ paddingTop: 15 }}>
                                  {u.ipAddress}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
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
