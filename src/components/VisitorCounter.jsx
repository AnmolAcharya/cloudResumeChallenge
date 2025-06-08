import React, { useState, useEffect } from 'react';
import '../styles/VisitorCounter.css';

const VisitorCounter = () => {
  const [count, setCount] = useState('Loading...');

  useEffect(() => {
    // For now, using localStorage. In production, this would be an API call
    const storedCount = localStorage.getItem('visitorCount') || 0;
    const newCount = parseInt(storedCount) + 1;
    localStorage.setItem('visitorCount', newCount);
    setCount(newCount);

    // TODO: Replace with actual API call in the Cloud Resume Challenge
    // Example:
    /*
    fetch('your-api-endpoint')
      .then(response => response.json())
      .then(data => setCount(data.count))
      .catch(error => {
        console.error('Error fetching visitor count:', error);
        setCount('Error loading count');
      });
    */
  }, []);

  return (
    <div className="visitor-counter">
      <p>Visitors: <span className="count">{count}</span></p>
    </div>
  );
};

export default VisitorCounter; 