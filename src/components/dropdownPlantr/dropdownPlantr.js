import './dropdownPlantr.css'
import { useState, useEffect } from 'react'

export const DropdownPlantr = ({ tittle, options, onVariant }) => {



    return (<div className="plantDropdown">
        <p className="dropdownTittle">{tittle}</p>
        <select className="dropdownSelect" name={tittle} id={tittle} >
            {options.map((option) =>
                <option value={option} key={option}>{option}</option>
            )}
        </select>

    </div>
    )
}