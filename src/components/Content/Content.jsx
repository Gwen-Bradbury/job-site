import React, { useState, useEffect } from 'react'
import './content.css';
import data from '../../data/data.json'
import Jobs from '../Jobs/Jobs';
import JobFilter from '../JobFilter/JobFilter'

const Content = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        setJobs(data)
    }, [])
    return (
        <React.Fragment>
            <JobFilter initialJobs = {data} setJobs = {setJobs}/>
            <div className="content_container">
            {jobs.map(job => (
                <Jobs job={job} key={job.id} />
            ))} 
            </div>
        </React.Fragment>
    )
}

export default Content
