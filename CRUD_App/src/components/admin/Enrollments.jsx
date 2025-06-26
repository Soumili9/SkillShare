import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEnrollments } from "../services/EnrollmentService";

function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const response = await getEnrollments();
      setEnrollments(response.data);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  return (
    <div>
      <h1>Enrollments</h1>
      <div className="mainleft">
        <Table className="table-image striped bordered hover" size="sm">
          <thead>
            <tr>
              <th>Enrollment ID</th>
              <th>Date</th>
              <th>User</th>
              <th>Email</th>
              <th>Fee</th>
              <th>Status</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((e) => (
              <tr key={e.enrollmentId}>
                <td>{e.enrollmentId}</td>
                <td>{e.enrollDate}</td>
                <td>{e.users.name}</td>
                <td>{e.users.emailid}</td>
                <td>₹{e.totalFee}</td>
                <td>{e.status}</td>
                <td>
                  <Link to={`viewdetails/${e.enrollmentId}`}>
                    <Button variant="info">View Details</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Enrollments;
