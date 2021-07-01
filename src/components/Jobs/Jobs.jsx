import React from 'react'
import './jobs.css';
import JobDetails from '../JobDetails/JobDetails';
import Skills from '../Skills/Skills';

const Jobs = (props) => {
    return (
        <div className="job_container">
            <div className="flex">
                <div className="jobdetails_img"><img src={props.job.logo}/></div>
                <JobDetails 
                    company={props.job.company}
                    position={props.job.position}
                    new={props.job.new}
                    featured={props.job.featured}
                    postedAt={props.job.postedAt}
                    contract={props.job.contract}
                    location={props.job.location}
                />
            </div>
            <Skills 
                languages={props.job.languages}
                tools={props.job.tools}
            />
        </div>
    )
}

export default Jobs
