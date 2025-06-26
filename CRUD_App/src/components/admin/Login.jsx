import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import { Modal, Button } from 'react-bootstrap';
import { userLogin } from '../services/UsersService';
import { AuthContext } from '../../context/AuthContext';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const { adminLogin } = useContext(AuthContext);

  const [emailid, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errortxt, setErrortxt] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputHandler1 = (event) => setEmail(event.target.value);
  const inputHandler2 = (event) => setPasword(event.target.value);

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    
    // Avoid triggering navigation prematurely
    if (isLoading) return;

    try {
      setIsLoading(true);

      const response = await userLogin(emailid, password);
      console.log('User logged in:', response.data);

      if (response.status === 200) {
        const user = response.data;

        if (user.role === 'Admin') {
          console.log('Admin logged in');
          localStorage.setItem('usertype', 'admin');
          adminLogin(user);
          navigate('/admin/');
        } else {
          setErrortxt('Invalid username or password');
        }
      } else {
        setErrortxt('Server error, please try again.');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setErrortxt(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      if (errortxt) handleShow();  // Only show modal if there's an error message
    }
  };

  return (
    <div>
      <main className="form-signin">
        <form onSubmit={authSubmitHandler}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={inputHandler1}
              value={emailid}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={inputHandler2}
              value={password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>

      {isLoading && <LoadingSpinner asOverlay />}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errortxt}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
