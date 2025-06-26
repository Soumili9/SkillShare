import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createFeedback } from "../services/FeedbackService";

function CreateFeedback() {
    const navigate = useNavigate();
    const courseId = localStorage.getItem("selectedCourseId");
    const userId = localStorage.getItem("userId");

    const [feedback, setFeedback] = useState({
        rating: '',
        comment: '',
        course: { courseId: courseId },
        user: { userid: userId }
    });

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createFeedback(feedback);
        navigate("/admin/feedback");
    };

    return (
        <div className="mainleft">
            <h1>Submit Feedback</h1>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                        name="rating"
                        type="number"
                        placeholder="Rating (1-5)"
                        value={feedback.rating}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        name="comment"
                        type="text"
                        placeholder="Your Comment"
                        value={feedback.comment}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default CreateFeedback;
