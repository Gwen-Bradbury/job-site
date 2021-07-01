import React, { useState, useEffect } from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import './job_filter.css'
import uuid from '../../scripts/uuid'

const JobFilter = (props) => {
    const [potentialJobs, setPotentialJobs] = useState([])
    useEffect(() => {
        const allJobs = props.initialJobs.map((Job) => Job.languages).flat()
        const allTools = props.initialJobs.map((Job) => Job.tools).flat()
        const jobsAndTools = [...allJobs, ...allTools]
        const actualJobsAndTools = [...new Set(jobsAndTools)]
        setPotentialJobs(actualJobsAndTools)

        const checkedObj = {}
        actualJobsAndTools.forEach((Job) => {
            checkedObj[Job] = false
        })
        setChecked(checkedObj)
    }, [])
    const [checked, setChecked] = useState({})
    const handleCheckboxClick = (target) => {
        const draft = {...checked};
        draft[target] = !checked[target]
        setChecked(draft)
    }
    useEffect(() => {
        const languagesAndToolsArray = Object.entries(checked)
            .filter((it) => it[1]).map((it) => it[0]);
        const filteredJobs = props.initialJobs.filter(Job => Job.languages.some(item => languagesAndToolsArray.includes(item)))
        const otherFilteredJobs = props.initialJobs.filter(Job => Job.tools.some(item => languagesAndToolsArray.includes(item)))
        const allFilteredJobs = [...filteredJobs, ...otherFilteredJobs]
        const dedupedFilteredJobs = [...new Set(allFilteredJobs)]

        props.setJobs(dedupedFilteredJobs)
    }, [checked])
    return (
        <div className="job_filter">
            {potentialJobs.map(Job => (
                <FilterCheckbox key={uuid()} value={Job} handleCheckboxClick = {handleCheckboxClick} />
            ))}
        </div>
    )
}

export default JobFilter
