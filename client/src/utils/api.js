export const fetchProtectedData = async () => {
  const token = localStorage.getItem('token'); // Retrieve the JWT token
  if (!token) {
    throw new Error('No token found. Please log in.');
  }
  
  const response = await fetch('/api/protected-route', {
    headers: {
      Authorization: `Bearer ${token}`, // Add the token to the Authorization header
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch protected data');
  }

  return response.json(); // Return the data from the response
};
