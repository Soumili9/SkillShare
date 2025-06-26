import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { getFeedbackByCourseId, deleteFeedback } from "../services/FeedbackService";

function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const courseId = localStorage.getItem("selectedCourseId");

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        const response = await getFeedbackByCourseId(courseId);
        setFeedbacks(response.data);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            await deleteFeedback(id);
            fetchFeedbacks();
        }
    };

    return (
        <div>
            <h1>Feedback</h1>
            <div className="mainleft">
                <Table className="table-image striped bordered hover" size="sm">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Rating</th>
                            <th>Comment</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((fb) => (
                            <tr key={fb.id}>
                                <td>{fb.user.name}</td>
                                <td>{fb.rating}</td>
                                <td>{fb.comment}</td>
                                <td>
                                    <Button onClick={() => handleDelete(fb.id)} variant="danger">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Feedback;
