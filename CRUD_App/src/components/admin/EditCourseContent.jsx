import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getContentByCourseId, updateCourseContent } from "../services/CourseContentService";
import axios from "axios";

function EditCourseContent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [content, setContent] = useState({
        contentId: 0,
        title: '',
        description: '',
        url: '',
        course: { courseId: 0 }
    });

    const handleChange = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCourseContent(content);
        navigate("/admin/content");
    };

    const fetchContent = async () => {
        const courseId = localStorage.getItem("selectedCourseId");
        const response = await axios.get(`http://localhost:8185/api/content/course/${courseId}`);
        const matched = response.data.find(c => c.contentId === parseInt(id));
        if (matched) setContent(matched);
    };

    useEffect(() => {
        fetchContent();
    }, []);

    return (
        <div className="mainleft">
            <h1>Edit Course Content</h1>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                        name="title"
                        type="text"
                        value={content.title}
                        onChange={handleChange}
                        placeholder="Title"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        name="description"
                        type="text"
                        value={content.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        name="url"
                        type="text"
                        value={content.url}
                        onChange={handleChange}
                        placeholder="Video URL"
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Update</Button>
            </Form>
        </div>
    );
}

export default EditCourseContent;
