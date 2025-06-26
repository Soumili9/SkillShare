import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/UIElements/LoadingSpinner';
import { Modal, Button } from "react-bootstrap";
import { createUsers } from '../components/services/UsersService';

const Auth = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({ name: '', emailid: '', password: '', role: 'User' });
  const [isLoading, setIsLoading] = useState(false);
  const [errortxt, setErrortxt] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUsers = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    // Basic frontend validation
    if (!users.name || !users.emailid || !users.password) {
      setErrortxt("All fields are required.");
      handleShow();
      return;
    }

    try {
      setIsLoading(true);
      const response = await createUsers(users);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "User with this email already exists.";
      setErrortxt(msg);
      handleShow();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      {isLoading && <LoadingSpinner asOverlay />}
      <form className="form-signin" onSubmit={authSubmitHandler}>
        <fieldset>
          <h2>Sign Up</h2>
          <hr />
          <div className="Field">
            <label>Full Name <sup>*</sup></label>
            <input
              className="form-control"
              placeholder="Full Name"
              name="name"
              value={users.name}
              onChange={handleUsers}
              required
            />
          </div>
          <div className="Field">
            <label>Email ID <sup>*</sup></label>
            <input
              className="form-control"
              placeholder="Enter Email"
              name="emailid"
              type="email"
              value={users.emailid}
              onChange={handleUsers}
              required
            />
          </div>
          <div className="Field">
            <label>Password <sup>*</sup></label>
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              type="password"
              value={users.password}
              onChange={handleUsers}
              required
            />
          </div>
          <button type="submit" className="mt-3 btn btn-lg btn-success btn-block">Register</button>
        </fieldset>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><Modal.Title>Error Message</Modal.Title></Modal.Header>
        <Modal.Body>{errortxt}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Auth;
