import React from "react";
import { useState } from "react";

import "./index.css";
import { nanoid } from 'nanoid'

const AddForm = ({setData, data}) => {
  const [courseName, setcourseName] = useState("");
  const [coursePrice, setcoursePrice] = useState(0);
  const [courseImage, setcourseImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newCourse = {
      id: nanoid(),
      name: courseName,
      price: coursePrice,
      img: courseImage,
    };
    setData([...data, newCourse]);
    setcourseName("");
    setcoursePrice(0);
    setcourseImage("");
  };
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-div">
              <div className="input-div col-4">
                <label className="form-label" htmlFor="">
                  Course Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setcourseName(e.target.value)}
                  value={courseName}
                />
              </div>
              <div className="input-div col-4">
                <label className="form-label" htmlFor="">
                  Course Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  required
                  onChange={(e) => setcoursePrice(e.target.value)}
                  value={coursePrice}

                />
              </div>
              <div className="input-div col-4">
                <label className="form-label" htmlFor="">
                  Course Image Url
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => setcourseImage(e.target.value)}
                  value={courseImage}

                />
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Add Courses
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
