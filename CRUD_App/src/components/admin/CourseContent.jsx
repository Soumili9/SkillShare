import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getContentByCourseId, deleteCourseContent } from "../services/CourseContentService";

function CourseContent() {
    const [contents, setContents] = useState([]);
    const courseId = localStorage.getItem("selectedCourseId");

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        const response = await getContentByCourseId(courseId);
        setContents(response.data);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this content?")) {
            await deleteCourseContent(id);
            fetchContent();
        }
    };

    return (
        <div>
            <h1>Course Content</h1>
            <div className="mainleft">
                <Table className="table-image striped bordered hover" size="sm">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>URL</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contents.map((content) => (
                            <tr key={content.contentId}>
                                <td>{content.title}</td>
                                <td>{content.description}</td>
                                <td>{content.url}</td>
                                <td>
                                    <Button
                                        onClick={() => handleDelete(content.contentId)}
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link className="d-grid gap-2" to="/admin/content/create">
                    <Button variant="warning" size="lg">Add Content</Button>
                </Link>
            </div>
        </div>
    );
}

export default CourseContent;
