import React, { useState, useEffect } from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

const JobFilter = (props) => {
    const [potentialJobs, setPotentialJobs] = useState([])
    useEffect(() => {
        const allJobs = props.initialJobs.map((Job) => Job.languages).flat()
        const actualJobs = [...new Set(allJobs)];
        setPotentialJobs(actualJobs)

        const checkedObj = {}
        actualJobs.forEach((Job) => {
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
        const languagesArray = Object.entries(checked)
            .filter((it) => it[1]).map((it) => it[0]);
        const filteredJobs = props.initialJobs.filter(Job => Job.languages.some(item => languagesArray.includes(item)))
        
        props.setJobs(filteredJobs)
    }, [checked])
    return (
        <div>
            {potentialJobs.map(Job => (
                <FilterCheckbox value={Job} handleCheckboxClick = {handleCheckboxClick} />
            ))}
        </div>
    )
}

export default JobFilter
