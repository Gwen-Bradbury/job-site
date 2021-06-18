import React from 'react'

const FilterCheckbox = (props) => {
    return (
        <div>
           <input type="checkbox" value={props.value} onClick={() => props.handleCheckboxClick (props.value)}/> 
           <label>{props.value}</label>
        </div>
    )
}

export default FilterCheckbox
