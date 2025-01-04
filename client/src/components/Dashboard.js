import React, { useEffect } from 'react';
import { fetchProtectedData } from '../utils/api'; // Import the utility function

const Dashboard = () => {
  useEffect(() => {
    fetchProtectedData()
      .then((data) => {
        console.log('Protected data:', data);
        // Handle the data (e.g., update state)
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return <div>Welcome to the Dashboard!</div>;
};

export default Dashboard;
