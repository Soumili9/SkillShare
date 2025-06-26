import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getUsers } from "../services/UsersService";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    return (
        <div>
            <h1>Users</h1>
            <div className="mainleft">
                <Table className="table-image striped bordered hover" size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.userid}>
                                <td>{user.name}</td>
                                <td>{user.emailid}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Users;