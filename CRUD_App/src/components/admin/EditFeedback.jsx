import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { updateFeedback, getFeedbackByCourseId } from "../services/FeedbackService";
import axios from "axios";

function EditFeedback() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [feedback, setFeedback] = useState({
        id: 0,
        rating: '',
        comment: '',
        course: { courseId: 0 },
        user: { userid: 0 }
    });

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateFeedback(feedback);
        navigate("/admin/feedback");
    };

    const fetchFeedback = async () => {
        const courseId = localStorage.getItem("selectedCourseId");
        const response = await getFeedbackByCourseId(courseId);
        const matched = response.data.find(f => f.id === parseInt(id));
        if (matched) setFeedback(matched);
    };

    useEffect(() => {
        fetchFeedback();
    }, []);

    return (
        <div className="mainleft">
            <h1>Edit Feedback</h1>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                        name="rating"
                        type="number"
                        value={feedback.rating}
                        onChange={handleChange}
                        placeholder="Rating"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        name="comment"
                        type="text"
                        value={feedback.comment}
                        onChange={handleChange}
                        placeholder="Comment"
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Update</Button>
            </Form>
        </div>
    );
}

export default EditFeedback;
