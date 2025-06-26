import React, { useEffect, useContext } from "react";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // ✅ Make sure path is correct

import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAdminLogin, logout } = useContext(AuthContext); // ✅ FIXED

  useEffect(() => {
    if (localStorage.getItem("usertype") !== "admin") {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    logout(); // ✅ use context logout function
    navigate('/admin/login');
  };

  return (
    <div>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">SkillShare</a>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#" onClick={handleLogout}>Log out</a>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="course" className="nav-link">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link to="category" className="nav-link">Categories</Link>
                </li>
                <li className="nav-item">
                  <Link to="content" className="nav-link">Course Content</Link>
                </li>
                <li className="nav-item">
                  <Link to="feedback" className="nav-link">Feedback</Link>
                </li>
                <li className="nav-item">
                  <Link to="payments" className="nav-link">Payments</Link>
                </li>
                <li className="nav-item">
                  <Link to="users" className="nav-link">Users</Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
