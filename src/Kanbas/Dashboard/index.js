/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { courses } from "./CardData";
import DashboardCard from "./card";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="d-flex">
      {/* <div className="vh-100 wd-nav">
        <ul className="wd-nav-list-group text-light">
          <img
            src="../../images/neu_logo.png"
            height="60px"
            className="w-full"
            style={{ marginLeft: "6px" }}
          />
          <li className="wd-nav-list-group-item py-2">
            <a href="../Account/Profile/index.html" className="text-light">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="wd-nav-icon fa-2xl fa-regular fa-circle-user my-3"></i>
                <div>Account</div>
              </div>
            </a>
          </li>
          <li className="wd-nav-list-group-item py-1 wd-active">
            <a href="../../Dashboard/index.html" className="text-light">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="wd-active-icon wd-nav-icon fa-xl fa-solid fa-gauge my-3"></i>
                <div className="wd-active-title">Dashboard</div>
              </div>
            </a>
          </li>
          <li className="wd-nav-list-group-item py-1">
            <a href="../Courses/Home/index.html" className="text-light">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="wd-nav-icon fa-xl fa-solid fa-book my-3"></i>
                <div>Courses</div>
              </div>
            </a>
          </li>
          <li className="wd-nav-list-group-item py-1">
            <a href="#" className="text-light">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="wd-nav-icon fa-xl fa-solid fa-calendar-days my-3"></i>
                <div>Calendar</div>
              </div>
            </a>
          </li>
          <li className="wd-nav-list-group-item py-1">
            <a href="#" className="text-light">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="wd-nav-icon fa-xl fa-solid fa-inbox my-3"></i>
                <div>Inbox</div>
              </div>
            </a>
          </li>
          <li className="wd-nav-list-group-item py-1">
            <a href="#" className="text-light">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="wd-nav-icon fa-xl fa-regular fa-clock my-3"></i>
                <div>History</div>
              </div>
            </a>
          </li>
          <li className="wd-nav-list-group-item py-1">
            <a href="#" className="text-light">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="wd-nav-icon fa-xl fa-solid fa-film my-3"></i>
                <div>Studio</div>
              </div>
            </a>
          </li>
          <li className="wd-nav-list-group-item py-1">
            <a href="#" className="text-light">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <i className="wd-nav-icon fa-xl fa-solid fa-circle-question my-3"></i>
                <div>Help</div>
              </div>
            </a>
          </li>
        </ul>
      </div> */}
      {/* <KanbasNavigation /> */}
      <div className="d-flex flex-column w-100 my-3">
        <div className="mx-4 d-flex align-items-center">
          <div className="wd-account-profile-text">Dashboard</div>
        </div>
        <hr className="mx-4 mt-2 mb-4" />
        <div className="mx-4 d-flex align-items-center">
          <div style={{ fontSize: "20px", color: "#2d3b45", fontWeight: 500 }}>
            Published Courses (24)
          </div>
        </div>
        <hr className="mx-4 mt-1" />
        <div
          className="d-flex flex-wrap"
          style={{ overflowY: "auto", height: "73vh" }}
        >
          {courses &&
            courses.map((course) => (
              // <Link
              //   className="text-decoration-none"
              //   to={`/Kanbas/Courses/${course._id}`}
              // >
              <DashboardCard id={course._id} courseData={course} />
              // </Link>
            ))}

          {/* <div className="col-lg-3 col-xs-12 col-md-4 col-sm-6">
            <div
              className="card wd-card-design position-relative"
              style={{ width: "260px" }}
            >
              <img
                className="card-img-top"
                src="../../images/card_image.jpg"
                alt="Card image cap"
              />
              <button className="wd-card-dropdown position-absolute d-flex rounded-circle align-items-center justify-content-center">
                <i
                  className="fa-solid fa-ellipsis-vertical fa-lg position-absolute"
                  style={{ color: "#fff" }}
                ></i>
              </button>
              <div className="card-body">
                <a href="#" className="card-link">
                  <div className="card-text wd-card-text">
                    CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    CS5610.11550.202410
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    202410_2 Fall 2023 Semester Full Term Grad
                  </div>
                </a>
                <div className="d-flex mb-3 mt-4 align-items-center">
                  <i
                    className="fa-solid fa-file-signature fa-lg mx-5"
                    style={{ color: "#2d3b45" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-md-4 col-sm-6">
            <div
              className="card wd-card-design position-relative"
              style={{ width: "260px" }}
            >
              <img
                className="card-img-top"
                src="../../images/card_image.jpg"
                alt="Card image cap"
              />
              <button className="wd-card-dropdown position-absolute d-flex rounded-circle align-items-center justify-content-center">
                <i
                  className="fa-solid fa-ellipsis-vertical fa-lg position-absolute"
                  style={{ color: "#fff" }}
                ></i>
              </button>
              <div className="card-body">
                <a href="#" className="card-link">
                  <div className="card-text wd-card-text">
                    CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    CS5610.11550.202410
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    202410_2 Fall 2023 Semester Full Term Grad
                  </div>
                </a>
                <div className="d-flex mb-3 mt-4 align-items-center">
                  <i
                    className="fa-solid fa-comments fa-lg"
                    style={{ color: "#2d3b45" }}
                  ></i>
                  <i
                    className="fa-solid fa-file-signature fa-lg mx-5"
                    style={{ color: "#2d3b45" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-md-4 col-sm-6">
            <div
              className="card wd-card-design position-relative"
              style={{ width: "260px" }}
            >
              <img
                className="card-img-top"
                src="../../images/card_image.jpg"
                alt="Card image cap"
              />
              <button className="wd-card-dropdown position-absolute d-flex rounded-circle align-items-center justify-content-center">
                <i
                  className="fa-solid fa-ellipsis-vertical fa-lg position-absolute"
                  style={{ color: "#fff" }}
                ></i>
              </button>
              <div className="card-body">
                <a href="#" className="card-link">
                  <div className="card-text wd-card-text">
                    CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    CS5610.11550.202410
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    202410_2 Fall 2023 Semester Full Term Grad
                  </div>
                </a>
                <div className="d-flex mb-3 mt-4 align-items-center">
                  <i
                    className="fa-solid fa-comments fa-lg"
                    style={{ color: "#2d3b45" }}
                  ></i>
                  <i
                    className="fa-solid fa-file-signature fa-lg mx-5"
                    style={{ color: "#2d3b45" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-md-4 col-sm-6">
            <div
              className="card wd-card-design position-relative"
              style={{ width: "260px" }}
            >
              <img
                className="card-img-top"
                src="../../images/card_image.jpg"
                alt="Card image cap"
              />
              <button className="wd-card-dropdown position-absolute d-flex rounded-circle align-items-center justify-content-center">
                <i
                  className="fa-solid fa-ellipsis-vertical fa-lg position-absolute"
                  style={{ color: "#fff" }}
                ></i>
              </button>
              <div className="card-body">
                <a href="#" className="card-link">
                  <div className="card-text wd-card-text">
                    CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    CS5610.11550.202410
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    202410_2 Fall 2023 Semester Full Term Grad
                  </div>
                </a>
                <div className="d-flex mb-3 mt-4 align-items-center">
                  <i
                    className="fa-solid fa-comments fa-lg"
                    style={{ color: "#2d3b45" }}
                  ></i>
                  <i
                    className="fa-solid fa-file-signature fa-lg mx-5"
                    style={{ color: "#2d3b45" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-md-4 col-sm-6">
            <div
              className="card wd-card-design position-relative"
              style={{ width: "260px" }}
            >
              <img
                className="card-img-top"
                src="../../images/card_image.jpg"
                alt="Card image cap"
              />
              <button className="wd-card-dropdown position-absolute d-flex rounded-circle align-items-center justify-content-center">
                <i
                  className="fa-solid fa-ellipsis-vertical fa-lg position-absolute"
                  style={{ color: "#fff" }}
                ></i>
              </button>
              <div className="card-body">
                <a href="#" className="card-link">
                  <div className="card-text wd-card-text">
                    CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    CS5610.11550.202410
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    202410_2 Fall 2023 Semester Full Term Grad
                  </div>
                </a>
                <div className="d-flex mb-3 mt-4 align-items-center">
                  <i className="fa-solid fa-comments fa-lg"></i>
                  <i
                    className="fa-solid fa-file-signature fa-lg mx-5"
                    style={{ color: "#2d3b45" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-md-4 col-sm-6">
            <div
              className="card wd-card-design position-relative"
              style={{ width: "260px" }}
            >
              <img
                className="card-img-top"
                src="../../images/card_image.jpg"
                alt="Card image cap"
              />
              <button className="wd-card-dropdown position-absolute d-flex rounded-circle align-items-center justify-content-center">
                <i
                  className="fa-solid fa-ellipsis-vertical fa-lg position-absolute"
                  style={{ color: "#fff" }}
                ></i>
              </button>
              <div className="card-body">
                <a href="#" className="card-link">
                  <div className="card-text wd-card-text">
                    CS5610 11550 Web Development SEC 01 Fall 2023 [VTL-2-OL]
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    CS5610.11550.202410
                  </div>
                  <div className="wd-card-text" style={{ color: "#677179" }}>
                    202410_2 Fall 2023 Semester Full Term Grad
                  </div>
                </a>
                <div className="d-flex mb-3 mt-4 align-items-center">
                  <i
                    className="fa-solid fa-comments fa-lg"
                    style={{ color: "#2d3b45" }}
                  ></i>
                  <i
                    className="fa-solid fa-file-signature fa-lg mx-5"
                    style={{ color: "#2d3b45" }}
                  ></i>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
