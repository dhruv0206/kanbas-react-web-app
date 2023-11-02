import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import { courses } from "./Dashboard/CardData";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";

function Kanbas() {
  const [coursesList, setCoursesList] = useState(courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCoursesList([...courses, { ...course, _id: new Date().getTime() }]);
  };
  const deleteCourse = (courseId) => {
    setCoursesList(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCoursesList(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        {/* <div> */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          {/* <Route path="Account" element={<Account />} /> */}
          <Route
            path="Dashboard"
            element={
              <Dashboard
                coursesList={coursesList}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses coursesList={coursesList} />}
          />
          {/* <Route path="Calendar" element={<h1>Calendar</h1>} /> */}
        </Routes>
        {/* </div> */}
      </div>
    </Provider>
  );
}
export default Kanbas;
