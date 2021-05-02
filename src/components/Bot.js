import React from "react";
import {
  Button,
  Modal,
  Form,
  Col,
  Row,
  Tab,
  Nav,
  ToggleButton,
  ToggleButtonGroup,
  Dropdown,
} from "react-bootstrap";
import "../App.css";
// import Bot from "./Bot";
// import { View, styles } from 'react-native';

import { FaBeer } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillWarning } from "react-icons/ai";
import botimg from "../assets/Images/botimg.png";
import userimg from "../assets/Images/userimg.png";
import eboyoimg from "../assets/Images/eboyoimg.png";
// import * as GoIcons from "react-icons/go";
// import favicon from "../../assets/Favicon/favicon.png";
export default function Bot() {
  const [bot, setBot] = React.useState([]);
  const [value, setValue] = React.useState([1]);
  const handleChange = (val) => setValue(val);
  const [email, setEmail] = React.useState(false);
  const [selectoption, setSelectOption] = React.useState([]);
  const [seedata, setSeeData] = React.useState([]);
  // const[botpopup,setBotpopup]=React.useState([]);
   
  // const popupbot = ()=>{
  //   setBotpopup(!botpopup);
  // }


  React.useEffect(() => {
    fetch("http://localhost:6969/api/getBot")
      .then((res) => res.json())
      .then(({ bot }) => {
        setBot(bot);
      });
  }, []);
  const Editemail = () => {
    setEmail(!email);
  };
  const Selectoption = () => {
    setSelectOption(!selectoption);
  };
  const Seedata = () => {
    setSeeData(!seedata);
  };

  return (
    <div>
    
      <div className="row ">
        <div className="col-md-8 bg-gray-100">
          <div className="ml-8 mt-4 font-extrabold">
            <span>Hippo Bot</span>
          </div>
          <div className="ml-8 mt-2">
            Hippo Bot helps you to engage visitors and convert them into leads
            while your team is busy with other customers.
          </div>
          <div className="m-4 inline-flex">
            {/* <img src="pp.png" /> */}
            <div className=" h-4 w-12  bg-blue-100">
              <img src={botimg} alt="" />
            </div>
            <button className="text-blue-500">change this icon</button>
          </div>

          <div className="shadow-md m-2 bg-white">
            <div className="font-semibold ml-3 mt-4 text-blue-500">
              <span className="pt-2 ">CONVERSATION FLOW</span>
            </div>
            <div className="ml-3 mt-0">
              When a visitor initiates a conversation or responds to a broadcast
              message, you can decide what your bot will say and when.Use the
              flow below to customize your conversation. You can create
              different groups for bot and pass its group ID during widget
              initialization.
            </div>
            <div>
              <Row className="m-2">
                <Col sm={3}>
                  <label>Choose bot group:</label>
                </Col>
                <Col sm={9}>
                  {" "}
                  <select className="h-8 w-60 focus:outline-none border-2 border-gray-400">
                    <option value="1">All city</option>
                    <option value="2">skp</option>
                    <option value="3">sgnr</option>
                    <option value="4">delhi</option>
                    <option value="5">hmh</option>
                    <option value="6">raj</option>
                  </select>
                </Col>
              </Row>
            </div>
            <div className="m-4 shadow-md bg-gray-100">
              <div className="font-semibold mt-3 ml-4 pt-4">
                <label>Bot Group Status</label>
                <label className="switch ml-4">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <button style={{ position: "absolute", right: 44 }}>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
              <div className="font-semibold mt-2 ml-4 pt-2">
                <label>Bot Group Name</label>
                <span className="ml-8">eBoyo_Frenchise</span>
                <button style={{ position: "absolute", right: 44 }}>
                  <BsPencilSquare />
                </button>
              </div>
              <div className="font-semibold mt-2 ml-4 pt-2 flex">
                <label>Bot Group ID</label>
                <label className="p-1 mt-1 ml-1 border border-indigo-600 rounded-full h-4 w-4 bg-black text-white flex items-center hover:bg-gray-300">
                  ?
                </label>
                <span className="ml-12">3986</span>
                <button style={{ position: "absolute", right: 44 }}>
                  <i className="fa fa-copy" />
                </button>
              </div>
            </div>
            <div className="ml-4">
              <div className="m-2 inline-flex">
                <span className="border border-indigo-600 rounded-full h-4 w-4 bg-blue-500 flex items-center justify-center..."></span>
                <span className="border-2 border-blue-500 h-3 text-blue-500	 w-24 rounded-full  flex justify-center ml-2 	  h-8 ">
                  Email
                </span>
                <button className="ml-2" onClick={Editemail}>
                  <BsPencilSquare />
                </button>
              </div>
              {email ? (
                    <div>
                    <div className="m-0">
                      <span className="ml-4 mt-0">Office Hours</span>
                      <ToggleButtonGroup
                        type="checkbox"
                        value={value}
                        onChange={handleChange}
                        className="ml-3"
                      >
                        <ToggleButton value={1}>Online</ToggleButton>
                        <ToggleButton value={2}>Ofline</ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                    <div className="inline-flex mt-2 ml-16">
                      <div className="logo mt-2 ml-1">
                        <img src={botimg} />
                      </div>
                      <div className="h-8 w-96">
                        <input
                          type="text"
                          value="Email"
                          className="focus:outline-none rounded  border border-gray-400 pl-2  mt-2 ml-1  text-gray-700 focus:ring-2 focus:ring-blue-400"
                        ></input>
                      </div>
                    </div>
                    <div className="ml-28 w-full ">
                      <textarea className="focus:outline-none w-96 rounded  border border-gray-400  text-gray-700 focus:ring-2 focus:ring-blue-400"></textarea>
                    </div>
                    <div className="inline-flex ml-16 mt-1">
                      <label>Response Type</label>
                      <div className="ml-1">
                        <select className="h-8 w-60 focus:outline-none border-2 border-gray-400">
                          <option value="1">All city</option>
                          <option value="2">skp</option>
                          <option value="3">sgnr</option>
                          <option value="4">delhi</option>
                          <option value="5">hmh</option>
                          <option value="6">raj</option>
                        </select>
                      </div>
                    </div>
                    <div className="ml-96 mt-3 flex justify-space">
                      <span className="bg-gray-400 text-white border-2 border-gray-400 ml-0 mt-1 flex justify-center inline h-8 w-80 ">
                        User enters his/her text
                      </span>
                      <div className="logo  ml-1 h-2 w-4">
                        <img src={userimg} />
                      </div>
                    </div>
                    <div>
                      <div className="mt-3 ">
                        <span className="flex justify-center">
                          <span className="text-red-700 mt-1">
                            <AiFillWarning />
                          </span>
                          If the User response is invalid, Bot will send the
                          following message
                        </span>
                      </div>
                      <div className="ml-64 w-full">
                        <textarea className="focus:outline-none w-96 rounded  border border-gray-400  text-gray-700 focus:ring-2 focus:ring-blue-400"></textarea>
                      </div>
                      <div className="space-between">
                        <button
                          className="text-center mt-2 bg-red-500 shodow-xl w-16 h-8 text-white rounded focus:outline-none"
                          style={{ position: "absolute", right: 150 }}
                        >
                          Cancel
                        </button>
                        <button
                          className="text-center mt-2 bg-blue-500 shodow-xl w-24 h-8 text-white rounded focus:outline-none"
                          style={{ position: "absolute", right: 44 }}
                        >
                          Save{" "}
                        </button>
                      </div>
                    </div>{" "}
                  </div>
              
               ) : (
                <div>
                <div className="m-0">
                  <span className="ml-4 mt-0">Office Hours</span>
                  <ToggleButtonGroup
                    type="checkbox"
                    value={value}
                    onChange={handleChange}
                    className="ml-3"
                  >
                    <ToggleButton value={1}>Online</ToggleButton>
                    <ToggleButton value={2}>Ofline</ToggleButton>
                  </ToggleButtonGroup>
                </div>
                <div className="ml-2 mt-2 inline-flex">
                  <div className=" h-8  ml-1 mt-2 w-12">
                    <img src={botimg} alt="" />
                  </div>
                  <span className="border-2 border-gray-400 ml-0 mt-1 flex justify-center inline  h-12 p-2 w-full ">
                    Welcome to business_name Welcome to India's growing
                    On-Demand Delivery Platform - "eBOYO"
                  </span>
                </div>
                <div className="ml-96 mt-3 inline-flex">
                  <span className="bg-gray-400 text-white border-2 border-gray-400 ml-0 mt-1 flex justify-center inline h-8 w-80 ">
                    User enters his/her text
                  </span>
                  <div className="logo mt-1 ml-1">
                    <img src={userimg} />
                  </div>
                </div>
                <div className="mt-3 ">
                  <span className="flex justify-center">
                    <span className="text-red-700 mt-1">
                      <AiFillWarning />
                    </span>
                    If the User response is invalid, Bot will send the
                    following message
                  </span>
                </div>
                <div className="mt-2">
                  <span className="border-2 border-gray-400  h-4 ml-60 pl-4 pr-40 pt-1 pb-1">
                    Oops. kindly fill in the above details
                  </span>
                </div>
              </div>
            
              )}
              {/* <AddEmail show={email} onHide={()=> setEmail(false)} /> */}

              <div className="ml-3 bg-none">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Bot Trigger Actions
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="flex mt-4">
                <span className="border border-indigo-600 rounded-full h-4 w-4 bg-blue-600 flex items-center justify-center..."></span>

                <div>
                  <span className="h-4 w-40 ml-3 focus:outline-none rounded-md border-1 border-blue-600 p-1">
                    Please Select any one option
                  </span>
                </div>
                <div className="ml-2">
                  <button className="m-l2" onClick={Selectoption}>
                    <BsPencilSquare />
                  </button>
                </div>
                <div className="ml-2">
                  <button>
                    <i className="far fa-trash-alt" />
                  </button>
                </div>
              </div>

              {selectoption ? (
                <div>
                  <div className="ml-1 mt-3 inline-flex">
                    <div className="logo mt-1">
                      <img src={botimg} />
                    </div>
                    <span className="border-2 pl-1 pr-24 border-gray-400 ml-0 mt-1  inline h-8 w-auto ">
                      Kindly help us to assist you in a better way
                    </span>
                  </div>
                  <div className="ml-4 mb-2 border-1 border-gray-300 h-36 w-80">
                    <div className="inline-flex">
                      <span className="m-2 border border-indigo-600 rounded-full h-3 w-3 bg-blue-600 flex items-center justify-center..."></span>
                      <span>Want to join as a Franchise Owner</span>
                    </div>
                    <div className="inline-flex">
                      <span className="m-2 border border-indigo-600 rounded-full h-3 w-3 bg-blue-600 flex items-center justify-center..."></span>
                      <span>Want to join as a Merchant/Riders</span>
                    </div>
                    <div className="inline-flex">
                      <span className="m-2 border border-indigo-600 rounded-full h-3 w-3 bg-blue-600 flex items-center justify-center..."></span>
                      <span>I am existing Customer</span>
                    </div>
                    <div className="inline-flex font-semibold ml-1">
                      <span>Minimum items required to be selected: 1</span>
                    </div>
                    <div className="inline-flex font-semibold ml-1">
                      <span>Maximum items required to be selected: 1</span>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end pr-4">
                    <span className="bg-gray-400 text-white border-2 border-gray-400 ml-0 mt-1 flex justify-center inline h-8 w-80 ">
                      User enters his/her text
                    </span>
                    <div className="logo  ml-1 h-2 w-4">
                      <img src={userimg} />
                    </div>
                  </div>
                  <div className="mt-3 ">
                    <span className="flex justify-center">
                      <span className="text-red-700 mt-1">
                        <AiFillWarning />
                      </span>
                      If the User response is invalid, Bot will send the
                      following message
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="border-2 border-gray-400  h-4 ml-60 pl-4 pr-40 pt-1 pb-1">
                      Oops. kindly fill in the above details
                    </span>
                  </div>
                  <div className="ml-8 outline-none">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Bot Trigger Actions
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ) : (
                <div>
                  {/* select button data */}
                  <div className="inline-flex mt-2 ml-16 mr-36">
                    <div className="logo mt-2 ml-1">
                      <img src={botimg} />
                    </div>
                    <div className="h-8 w-96">
                      <input
                        type="text"
                        value="please select any one option"
                        className="ml-28 w-full focus:outline-none rounded  border border-gray-400 pl-2  mt-2 ml-1  text-gray-700 focus:ring-2 focus:ring-blue-400"
                      ></input>
                    </div>
                  </div>
                  <div className="mr-36">
                    <textarea className="ml-28 focus:outline-none w-full rounded  border border-gray-400  text-gray-700 focus:ring-2 focus:ring-blue-400"></textarea>
                  </div>
                  <div className="inline-flex ml-16 mt-1">
                    <label>Response Type</label>
                    <div className="ml-1">
                      <select className="h-8 w-60 focus:outline-none border-2 border-gray-400">
                        <option value="1">All city</option>
                        <option value="2">skp</option>
                        <option value="3">sgnr</option>
                        <option value="4">delhi</option>
                        <option value="5">hmh</option>
                        <option value="6">raj</option>
                      </select>
                    </div>
                  </div>
                  <div className="border border-gray-400 rounded-lg p-2 w-96 h-80 mt-2">
                    <div>
                      <div className="inline-flex">
                        <span className="m-2 border border-indigo-600 rounded-full h-3 w-3 bg-blue-600 flex items-center justify-center..."></span>
                        <div className="border border-indigo-600 p-1">
                          <span>Want to join as a Franchise Owner</span>
                        </div>
                      </div>
                      <div className="inline-flex">
                        <span className="m-2 border border-indigo-600 rounded-full h-3 w-3 bg-blue-600 flex items-center justify-center..."></span>
                        <div className="border border-indigo-600 p-1 mt-1">
                          <span>Want to join as a Merchant/Riders</span>
                        </div>
                      </div>
                      <div className="inline-flex">
                        <span className="m-2 border border-indigo-600 rounded-full h-3 w-3 bg-blue-600 flex items-center justify-center..."></span>
                        <div className="border border-indigo-600 p-1 mt-1">
                          <span>I am existing Customer</span>
                        </div>
                      </div>
                      <div className="border border-indigo-600 h-24 w-60 mt-2 ml-4">
                        <div>
                          <div className="ml-2 mr-2 mt-2">
                            <input
                              type="text"
                              className="w-12 ml-1 p-2   focus:ring-2 focus:ring-blue-400"
                              style={{ placholder: "Enter option label" }}
                            ></input>
                          </div>
                          <div>
                            <button className="text-center ml-2 mt-2 bg-blue-500 shodow-xl w-16 h-8 text-white rounded focus:outline-none">
                              + Add Option
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="inline-flex font-semibold ml-1">
                          <span>Minimum items required to be selected:</span>
                          <div className="ml-1">
                            <select className="h-5 w-8 focus:outline-none border-2 border-gray-400">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                        </div>
                        <div className="inline-flex font-semibold ml-1">
                          <span>Maximum items required to be selected:</span>
                          <div className="ml-1">
                            <select className="h-5 w-8 focus:outline-none border-2 border-gray-400">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-96 mt-3 inline-flex">
                    <span className="bg-gray-400 text-white border-2 border-gray-400 ml-0 mt-1 flex justify-center inline h-8 w-80 ">
                      User enters his/her text
                    </span>
                    <div className="logo  ml-1 h-2 w-4">
                      <img src={userimg} />
                    </div>
                  </div>
                  <div className="mt-3 ">
                    <span className="flex justify-center">
                      <span className="text-red-700 mt-1">
                        <AiFillWarning />
                      </span>
                      If the User response is invalid, Bot will send the
                      following message
                    </span>
                  </div>

                  <div className="mr-36 mt-2">
                    <textarea className="ml-28 focus:outline-none w-full rounded  border border-gray-400  text-gray-700 focus:ring-2 focus:ring-blue-400"></textarea>
                  </div>
                  <div className="ml-1 outline-none">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Bot Trigger Actions
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="space-between">
                    <button
                      className="text-center mt-2 bg-red-500 shodow-xl w-16 h-8 text-white rounded focus:outline-none"
                      style={{ position: "absolute", right: 150 }}
                    >
                      Cancel
                    </button>
                    <button
                      className="text-center mt-2 bg-blue-500 shodow-xl w-24 h-8 text-white rounded focus:outline-none"
                      style={{ position: "absolute", right: 44 }}
                    >
                      Save{" "}
                    </button>
                  </div>
                </div>
              )}
              <div className="mt-8 flex">
                <div className="border border-indigo-600 mt-1 rounded-full h-4 w-4 ml-1 bg-blue-600 flex items-center justify-center..."></div>
                <div>
                  <button className="ml-1 text-center bg-blue-500 shodow-xl w-60 h-8 text-white rounded focus:outline-none">
                    {" "}
                    + ADD CUSTOMER QUESTION
                  </button>
                </div>
              </div>
              <div className="ml-5 font-thin text-sm">
                (E.g What's your country of origin?)
              </div>
              <div className="flex mt-4">
                <div className="border border-indigo-600 mt-1 rounded-full h-4 w-4 ml-3 bg-blue-600 flex items-center justify-center..."></div>
                <div className="ml-1 border-1 border-blue-400 w-20 flex justify-center text-blue-600 rounded-lg">
                  See Ya
                </div>
                <div>
                  <button className="ml-2 mt-1" onClick={Seedata}>
                    <BsPencilSquare />
                  </button>
                </div>
              </div>
              {seedata ? (
                <div>
                  <div className="mt-2">
                    <div className="m-0">
                      <span className="ml-4 mt-0">Office Hours</span>
                      <ToggleButtonGroup
                        type="checkbox"
                        value={value}
                        onChange={handleChange}
                        className="ml-3"
                      >
                        <ToggleButton value={1}>Online</ToggleButton>
                        <ToggleButton value={2}>Ofline</ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                  </div>
                  <div>
                    <div className="m-4 inline-flex">
                      <div className=" h-4 w-12  bg-blue-100">
                        <img src={botimg} alt="" />
                      </div>
                      <div className="p-2 border-2  border-gray-400 pr-20 w-auto">
                        Hang on Our Products specialist will connect to your
                        shortly
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 ml-16 flex justify-center">
                    ---------------Bot flow ends here-------------
                  </div>
                  <div className="mt-2 flex justify-center">
                    <button className="ml-4 text-center bg-blue-500 shodow-xl w-40 h-8 text-white rounded focus:outline-none">
                      Save & Publish
                    </button>
                  </div>
                  <div className="mt-4 h-8"></div>
                </div>
              ) : (
                <div>
                  <div className="mt-2">
                    <div className="m-0">
                      <span className="ml-4 mt-0">Office Hours</span>
                      <ToggleButtonGroup
                        type="checkbox"
                        value={value}
                        onChange={handleChange}
                        className="ml-3"
                      >
                        <ToggleButton value={1}>Online</ToggleButton>
                        <ToggleButton value={2}>Ofline</ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                  </div>
                  <div>
                    <div className="m-4 inline-flex">
                      <div className=" h-4 w-12  bg-blue-100">
                        <img src={botimg} alt="" />
                      </div>
                      <div className="ml-1">
                        <textarea className="p-2 h-40 w-96   border-2  border-gray-400 pr-20">
                          Hang on Our Products specialist will connect to your
                          shortly
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 ml-16 flex justify-center">
                    ---------------Bot flow ends here-------------
                  </div>
                  <div className="mt-2 flex justify-center">
                    <button className="ml-4 text-center bg-blue-500 shodow-xl w-40 h-8 text-white rounded focus:outline-none">
                      Save & Publish
                    </button>
                  </div>
                  <div className="mt-4 h-8"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4 bg-gray-200">
          <div className="mt-16">
            <div className="text-white bg-blue-600 rounded-lg  ml-20  h-8 flex  w-36 text-center p-1">
              Widget Preview
            </div>
          </div>
          <div className=" h-40 w-full mt-10 ml-16">
            <img style={{ position: "fixed" }} src={eboyoimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
