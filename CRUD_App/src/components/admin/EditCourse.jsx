import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getCourseById, updateCourse } from "../services/CourseService";
import { getCategories } from "../services/CategoryService";

function EditCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState({
    courseId: 0,
    courseTitle: '',
    coursePrice: '',
    category: { catid: '' },
    thumbnail: ''
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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
    await updateCourse(course);
    navigate("/admin/");
  };

  useEffect(() => {
    fetchCategories();
    fetchCourseById();
  }, []);

  const fetchCourseById = async () => {
    const response = await getCourseById(id);
    setCourse(response.data);
  };

  const fetchCategories = async () => {
    const response = await getCategories();
    setCategories(response.data);
  };

  return (
    <div className="mainleft">
      <h1>Edit Course</h1>
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

        <Button type="submit" variant="primary">Update</Button>

        <Link className="d-grid gap-2" to="/admin/">
          <Button variant="warning" size="lg">Home</Button>
        </Link>
      </Form>
    </div>
  );
}

export default EditCourse;
