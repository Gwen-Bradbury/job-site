import React from 'react'
import "./filter_checkbox.css"

const FilterCheckbox = (props) => {
    return (
        <div className="filter_checkbox">
           <input type="checkbox" checked={props.isChecked} onChange={() => props.handleCheckboxClick (props.value)}/> 
           <label>{props.value}</label>
        </div>
    )
}

export default FilterCheckbox
