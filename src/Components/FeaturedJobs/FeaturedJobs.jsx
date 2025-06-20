import React from 'react'
import jobFiles from '../../assets/Featured.json'
import './FeaturedJobs.css'
import { Link } from 'react-router-dom'

const FeaturedJobs = () => {
  const ourJobs = jobFiles.jobs;
   const topJobs = ourJobs.slice(0, 4);
  return (
    <div className='featured-container'>
        <h2>Featured Jobs</h2>
      <div className="featured-content">
       {
        topJobs.map((job, index)=>{
          return <Link to={`/jobs/${job.id}`} key={index} className="job-card">
            <h2>Job Title: {job.title}</h2>
            <h3>Company: {job.company}</h3>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <p>Description: {job.description}</p>
          </Link>
        })
       }
      </div>
      <div className="view-all-btn">
        <Link to="/jobs">
          <button>Explore More Jobs</button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedJobs
