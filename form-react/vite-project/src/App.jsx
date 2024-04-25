import { useState } from "react";
import "./App.css";
import AddForm from "./components/Addform";
import Course from "./components/Course";
import Courses from "./components/Courses";
import array from "./data/db";

function App() {
  const [data, setData] = useState(array);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = data.filter((q) => {
    return q.name
      .toLowerCase()
      .trim()
      .includes(searchQuery.trim().toLowerCase());
  });

  return (
    <>
      <AddForm data={data} setData={setData}/>
      <Courses data={filteredCourses} setData={setData}/>
    </>
  );
}

export default App;
