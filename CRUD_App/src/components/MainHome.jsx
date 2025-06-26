import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = ({ addToCart }) => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8185/items");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className='row'>
      <div className='col-md-1'></div>
      <div className='col-md-10'>
        <h2 className='mb-2 mt-4'>Top Courses</h2>
        <div className='row'>
          {courses.map((course, i) => (
            <div key={i} className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
              <div className='product-img' style={{ height: '250px' }}>
                <img
                  src={`http://localhost:8185/images/${course.filename}`}
                  alt={course.itemName}
                  className='mb-3'
                  style={{
                    objectFit: 'contain',
                    height: '100%',
                    width: '100%',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
              </div>
              <div className='py-2'>
                <h5>{course.itemName}</h5>
                <p>₹ <strong>{course.itemPrice}</strong></p>
                <button
                className='btn btn-primary'
                onClick={() => {
                addToCart(course);
                window.location.href = '/Cart'; 
                }}
               >
              Enroll
          </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='col-md-1'></div>
    </div>
  );
};

export default Home;
