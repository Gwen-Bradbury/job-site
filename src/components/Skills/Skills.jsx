import React, { useState, useEffect } from 'react'
import './skills.css';

const Skills = (props) => {
    const [combinedSkills, setCombinedSkills] = useState([])
    useEffect(()=>{
        const combined=props.languages.concat(props.tools)
        setCombinedSkills(combined)
    },[props.languages, props.tools])
    return (
        <div className="skills_container">
            {combinedSkills.map((skill, i)=>(
                <span className="skills_skill" key={i}>{skill}</span>
            ))}
        </div>
    )
}

export default Skills
