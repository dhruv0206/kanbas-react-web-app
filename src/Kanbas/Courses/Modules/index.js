import "./modules.css";
import {
  AiOutlineCheckCircle,
  AiOutlinePlus,
  AiFillCaretDown,
  AiFillCheckCircle,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiGridVertical } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import { displayType } from "../Home/CourseTableData";
import { ModuleData } from "./ModuleTableData";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Modules() {
  return (
    <div className="w-100 my-3">
      <div className="d-flex">
        <div className="row w-100 me-4" style={{ marginLeft: "30px" }}>
          <div className="col-12">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
              >
                Student View
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm mx-1"
              >
                View Progress
              </button>
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle btn-sm d-flex align-items-center"
                  type="button"
                  id="action-menu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AiOutlineCheckCircle
                    style={{ color: "#1f990c", height: "20px", width: "20px" }}
                  />
                  <span style={{ marginLeft: "5px" }}>Publish All</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="action-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Publish All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Course
                    </a>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="btn btn-sm d-flex align-items-center text-light mx-1"
                style={{ backgroundColor: "#b52828" }}
              >
                {/* <i className="fa-solid fa-plus"></i> */}
                <AiOutlinePlus />
                <span style={{ marginLeft: "5px" }}>Module</span>
              </button>
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  type="button"
                  id="action-menu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDotsVertical />
                </button>
                <ul className="dropdown-menu" aria-labelledby="action-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Speed Grader
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Duplicate
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div style={{ overflowY: "auto", height: "75vh" }}>
              <ul className="list-group">
                {ModuleData.map((data, index) =>
                  data.type === displayType.TITLE ? (
                    <li
                      className="list-group-item mt-5"
                      style={{
                        backgroundColor: "#f5f5f5",
                        border: "1px solid #aba89f",
                        borderRadius: "5px",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <BiGridVertical />
                          <AiFillCaretDown />
                          <div className="ms-2" style={{ fontWeight: 500 }}>
                            {data.displayText}
                          </div>
                        </div>
                        <div>
                          <AiFillCheckCircle
                            style={{
                              color: "#1f990c",
                              height: "20px",
                              width: "20px",
                            }}
                          />
                          <AiFillCaretDown className="ms-2" />
                          <AiOutlinePlus
                            className="mx-2"
                            style={{ color: "#2d3b45" }}
                          />
                          <BsThreeDotsVertical />
                        </div>
                      </div>
                    </li>
                  ) : data.type === displayType.HEADING ? (
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <BiGridVertical />
                          <div className="ms-2" style={{ fontWeight: 500 }}>
                            {data.displayText}
                          </div>
                        </div>
                        <div>
                          <AiFillCheckCircle
                            className="me-3"
                            style={{
                              color: "#1f990c",
                              height: "20px",
                              width: "20px",
                            }}
                          />
                          <BsThreeDotsVertical />
                        </div>
                      </div>
                    </li>
                  ) : data.type === displayType.SUBSECTION ? (
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <BiGridVertical />
                          <div
                            className="ms-2 ps-5"
                            style={{ fontWeight: 500 }}
                          >
                            {data.displayText}
                          </div>
                        </div>
                        <div>
                          <AiFillCheckCircle
                            className="me-3"
                            style={{
                              color: "#1f990c",
                              height: "20px",
                              width: "20px",
                            }}
                          />
                          <BsThreeDotsVertical />
                        </div>
                      </div>
                    </li>
                  ) : data.type === displayType.SLIDES ? (
                    <li
                      className="list-group-item"
                      style={{ color: "#b52828" }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <BiGridVertical style={{ color: "#2d3b45" }} />
                          <a
                            href="#"
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <BsLink45Deg
                              className="mx-2"
                              style={{
                                color: "#1f990c",
                                height: "20px",
                                width: "20px",
                              }}
                            />
                            <div className="" style={{ fontWeight: 500 }}>
                              {data.displayText}
                            </div>
                            <BiLinkExternal className="ms-2" />
                          </a>
                        </div>
                        <div>
                          <AiFillCheckCircle
                            className="me-3"
                            style={{
                              color: "#1f990c",
                              height: "20px",
                              width: "20px",
                            }}
                          />
                          <BsThreeDotsVertical style={{ color: "#2d3b45" }} />
                        </div>
                      </div>
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </div>
          {/* <div className="col-3" style={{ paddingRight: "0px" }}>
            <div style={{ color: "#2d3b45", fontWeight: "500" }}>
              Course Status
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary d-flex align-items-center"
              >
                <AiOutlineStop />
                <span className="ms-2">Unpublish</span>
              </button>
              <button
                type="button"
                className="btn btn-success disabled d-flex align-items-center"
              >
                <AiFillCheckCircle />
                <span className="ms-2">Success</span>
              </button>
            </div>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-3 text-start btn-sm d-flex align-items-center"
            >
              <FaFileImport />
              <span className="ms-2">Import from Contact</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm d-flex align-items-center"
            >
              <FaFileUpload />
              <span className="ms-2">Import from Commons</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm d-flex align-items-center"
            >
              <AiFillHome />
              <span className="ms-2">Choose Home Page</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm d-flex align-items-center"
            >
              <BsFillBarChartFill />
              <span className="ms-2">View Course Stream</span>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm"
            >
              <div className="d-flex align-items-center">
                <HiSpeakerphone />
                <span className="ms-2">New Announcement</span>
              </div>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm"
            >
              <div className="d-flex align-items-center">
                <BiSolidBarChartAlt2 />
                <span className="ms-2">New Analytics</span>
              </div>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-1 text-start btn-sm"
            >
              <div className="d-flex align-items-center">
                <IoNotificationsSharp />
                <span className="ms-2">View Course Notifications</span>
              </div>
            </button>
            <div className="mt-3" style={{ overflowY: "auto", height: "33vh" }}>
              <div>
                <div
                  className=""
                  style={{ color: "#2d3b45", fontSize: "12px" }}
                >
                  To do
                </div>
                <hr className="my-1" />
                <div className="d-flex align-items-baseline">
                  <div
                    className="text-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#b52828",
                      width: "17px",
                      height: "17px",
                      fontSize: "12px",
                    }}
                  >
                    1
                  </div>
                  <div className="ms-2">
                    <div
                      style={{
                        color: "#b52828",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      Grade 1 - ENV + HTML
                    </div>
                    <div style={{ color: "#2d3b45", fontSize: "12px" }}>
                      100 points · Sep 18 at 11:59pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className=""
                    style={{ color: "#2d3b45", fontSize: "12px" }}
                  >
                    Coming Up
                  </div>
                  <div className="d-flex align-items-center">
                    <BsCalendarDate className="me-2" />
                    <span style={{ color: "#b52828", fontSize: "12px" }}>
                      View Calendar
                    </span>
                  </div>
                </div>
                <hr className="mt-1 mb-2" />
                <div className="d-flex align-items-baseline">
                  <BsCalendarDate />
                  <div className="ms-2">
                    <div
                      style={{
                        color: "#b52828",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      Lecture
                    </div>
                    <div style={{ color: "#2d3b45", fontSize: "12px" }}>
                      CS5610.11550.202410
                    </div>
                    <div style={{ color: "#2d3b45", fontSize: "12px" }}>
                      Sep 11 at 7pm
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-baseline mt-3">
                  <BsCalendarDate />
                  <div className="ms-2">
                    <div
                      style={{
                        color: "#b52828",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      Lecture
                    </div>
                    <div style={{ color: "#2d3b45", fontSize: "12px" }}>
                      CS5610.11550.202410
                    </div>
                    <div style={{ color: "#2d3b45", fontSize: "12px" }}>
                      Sep 11 at 7pm
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-baseline mt-3">
                  <div
                    style={{
                      color: "#b52828",
                      fontWeight: "500",
                      fontSize: "14px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      width: "150px",
                    }}
                  >
                    12 more in the next week to complete before deadline
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Modules;
