import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createCourseContent } from "../services/CourseContentService";

function CreateCourseContent() {
    const navigate = useNavigate();
    const courseId = localStorage.getItem("selectedCourseId");
    const [content, setContent] = useState({
        title: '',
        description: '',
        url: '',
        course: { courseId: courseId }
    });

    const handleChange = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCourseContent(content);
        navigate("/admin/content");
    };

    return (
        <div className="mainleft">
            <h1>Add Course Content</h1>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={content.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={content.description}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        name="url"
                        type="text"
                        placeholder="Video URL"
                        value={content.url}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default CreateCourseContent;
