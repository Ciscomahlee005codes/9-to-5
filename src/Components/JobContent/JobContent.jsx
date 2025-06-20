import React from 'react'
import jobFile from '../../assets/Featured.json'
import './JobContent.css'
import { Link } from 'react-router-dom'

const JobContent = () => {
   const ourJobs = jobFile.jobs;
  return (
    <div className='content-container'>
      <h2 style={{textAlign: 'center'}}>Available Jobs</h2>
      <div className="content-content">
         {
                ourJobs.map((job, index)=>{
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
    </div>
  )
}

export default JobContent
