import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteCourse, getCourses } from "../services/CourseService";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      await deleteCourse(id);
      fetchCourses();
    }
  };

  return (
    <div>
      <h1>Courses</h1>
      <div className="mainleft">
        <Table className="table-image striped bordered hover" size="sm">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Category</th>
              <th>Title</th>
              <th>Price</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.courseId}>
                <td>
                  <img className="table-imagesize" src={`http://localhost:8185/images/${course.thumbnail}`} alt="thumbnail"/>
                </td>
                <td>{course.category.catname}</td>
                <td>{course.courseTitle}</td>
                <td>₹{course.coursePrice}</td>
                <td>
                  <Link to={`/admin/course/edit/${course.courseId}`}>
                    <Button variant="info">Update</Button>
                  </Link>
                </td>
                <td>
                  <Button onClick={() => handleDelete(course.courseId)} variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Link className="d-grid gap-2" to="/admin/course/create">
          <Button variant="warning" size="lg">Create Course</Button>
        </Link>
      </div>
    </div>
  );
}

export default Courses;
