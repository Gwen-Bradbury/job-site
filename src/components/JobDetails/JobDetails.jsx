import React from 'react'
import './jobdetails.css';

const JobDetails = (props) => {
    return (
        <div className="flex">
            <div className="jobdetails_container">
                <div>
                    <span className="jobdetails_maindetails company">{props.company}</span>
                    {props.new ? <span className="jobdetails_maindetails new">New</span> : null}
                    {props.featured ? <span className="jobdetails_maindetails featured">Featured</span> : null}
                </div>
                <div className="jobdetails_position">{props.position}</div>
                <div>
                    <span className="jobdetails_details">{props.postedAt}</span>
                    <span className="jobdetails_details">{props.contract}</span>
                    <span className="jobdetails_details">{props.location}</span>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
