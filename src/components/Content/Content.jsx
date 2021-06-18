import React, { useState, useEffect } from 'react'
import './content.css';
import data from '../../data/data.json'
import Jobs from '../Jobs/Jobs';

const Content = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        setJobs(data)
    }, [])
    return (
        <div className="content_container">
           {jobs.map(job => (
               <Jobs job={job} key={job.id} />
           ))} 
        </div>
    )
}

export default Content
