import React, { useState } from 'react'
import jobFile from '../../assets/Featured.json'
import { useParams } from 'react-router-dom'
import ApplicationModal from '../../Components/ApplicationModal/ApplicationModal'
import './JobDetails.css'

const JobDetails = () => {
    const {id} = useParams(); 
    const job = jobFile.jobs.find((job)=> job.id === parseInt((id)))
      const [showModal, setShowModal] = useState(false);

    if (!job) return <h2>Job Not Found</h2>
  return (
    <div className='detail-container'>
      <div className="detail-content">
        <h2><b>Job Title: </b>{job.title}</h2>
      <div className="info">
        <p><b>Company: </b>{job.company}</p>
      <p><b>Location: </b>{job.location}</p>
      <p><b>Salary: </b>{job.salary}</p>
      <p><b>Description: </b>{job.description}</p>
      </div>
     <div className="btn"> <button onClick={() => setShowModal(true)}>Apply Now</button></div>
      </div>
       {showModal && <ApplicationModal onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default JobDetails
