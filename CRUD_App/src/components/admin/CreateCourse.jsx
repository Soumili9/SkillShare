import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../services/CategoryService";
import { createCourse } from "../services/CourseService";

function CreateCourse() {
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    courseTitle: '',
    coursePrice: '',
    category: { catid: '' },
    thumbnail: ''
  });
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === 'category.catid') {
      setCourse({
        ...course,
        category: {
          ...course.category,
          catid: e.target.value,
        },
      });
    } else {
      setCourse({ ...course, [e.target.name]: e.target.value });
    }
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      await createCourse(course);
      navigate("/admin/");
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div className="mainleft">
      <h1>Create Course</h1>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handelSubmit}>
        <Form.Group className="mb-3">
          <Form.Select name="category.catid" onChange={handleChange} value={course.category.catid} required>
            <option>Select category</option>
            {categories.map((cat) => (
              <option key={cat.catid} value={cat.catid}>{cat.catname}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="courseTitle"
            type="text"
            onChange={handleChange}
            value={course.courseTitle}
            placeholder="Enter Course Title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="coursePrice"
            type="number"
            onChange={handleChange}
            value={course.coursePrice}
            placeholder="Enter Course Price"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="thumbnail"
            type="text"
            onChange={handleChange}
            value={course.thumbnail}
            placeholder="Enter Thumbnail Filename"
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">Submit</Button>

        <Link className="d-grid gap-2" to="/admin/">
          <Button variant="info" size="lg">Home</Button>
        </Link>
      </Form>
    </div>
  );
}

export default CreateCourse;
