import React, { useState, useEffect } from 'react';

function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Fetch data from the API route
        const res = await fetch('src/app/data/jobs.csv');
        const data = await res.json();
        setJobs(data); // Update state with fetched data
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };

    fetchJobs(); // Invoke the fetch function on component mount
  }, []); // Empty dependency array ensures useEffect runs once

  return (
    <div>
      <h1>Jobs</h1>
      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-item">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            {/* Display other job details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsPage;